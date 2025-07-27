'use client';

import { createContext, useContext, useReducer, useEffect, useCallback, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const AdminContext = createContext();

const initialState = {
  isAuthenticated: false,
  admin: null,
  loading: true,
  error: null
};

function adminReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        admin: action.payload,
        loading: false,
        error: null
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        admin: null,
        loading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        admin: null,
        loading: false,
        error: null
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}

export default function AdminProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, initialState);
  const router = useRouter();
  const pathname = usePathname();

  // Prevent multiple simultaneous auth checks
  const authCheckRef = useRef(false);

      // Check authentication status on mount
  useEffect(() => {
    checkAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run only once on mount

  // Redirect logic
  useEffect(() => {
    if (!state.loading) {
      if (!state.isAuthenticated && pathname !== '/admin/login' && pathname !== '/admin/reset-password') {
        router.push('/admin/login');
      } else if (state.isAuthenticated && pathname === '/admin/login') {
        router.push('/admin/dashboard');
      }
    }
  }, [state.isAuthenticated, state.loading, pathname, router]);

      const checkAuthStatus = useCallback(async () => {
    // Prevent multiple simultaneous auth checks
    if (authCheckRef.current) return;

    try {
      // Ensure we're on the client side
      if (typeof window === 'undefined') {
        dispatch({ type: 'LOGOUT' });
        return;
      }

      authCheckRef.current = true;

      const response = await fetch('/api/admin/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.admin });
      } else {
        dispatch({ type: 'LOGOUT' });
      }
    } catch (error) {
      console.error('Auth check error:', error);
      dispatch({ type: 'LOGOUT' });
    } finally {
      authCheckRef.current = false;
    }
  }, []);

    const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });

    try {
      const response = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: data.admin });
        return { success: true };
      } else {
        dispatch({ type: 'LOGIN_ERROR', payload: data.error });
        return { success: false, error: data.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ type: 'LOGIN_ERROR', payload: 'Network error. Please try again.' });
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/admin/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      dispatch({ type: 'LOGOUT' });
      router.push('/admin/login');
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    login,
    logout,
    clearError,
    checkAuthStatus
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}