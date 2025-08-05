import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    throw new Error('Invalid token');
  }
}

export function getTokenFromRequest(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Also check for token in cookies
  const cookies = request.headers.get('cookie');
  if (cookies) {
    const tokenCookie = cookies
      .split(';')
      .find(c => c.trim().startsWith('admin-token='));
    if (tokenCookie) {
      return tokenCookie.split('=')[1];
    }
  }

  return null;
}

export async function authenticateAdmin(request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const decoded = verifyToken(token);
    return decoded;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}

export function createAuthResponse(data, token) {
  const response = new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Set HTTP-only cookie for better security
  // Only use Secure flag in production (HTTPS)
  const isProduction = process.env.NODE_ENV === 'production';
  const secureFlag = isProduction ? 'Secure; ' : '';

  response.headers.set(
    'Set-Cookie',
    `admin-token=${token}; HttpOnly; ${secureFlag}SameSite=Strict; Max-Age=${7 * 24 * 60 * 60}; Path=/`
  );

  return response;
}

export async function verifyAuth(request) {
  try {
    const admin = await authenticateAdmin(request);
    return admin;
  } catch (error) {
    return null;
  }
}

export function clearAuthResponse(data = { message: 'Logged out successfully' }) {
  const response = new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Clear the cookie with same settings as when it was set
  const isProduction = process.env.NODE_ENV === 'production';
  const secureFlag = isProduction ? 'Secure; ' : '';

  response.headers.set(
    'Set-Cookie',
    `admin-token=; HttpOnly; ${secureFlag}SameSite=Strict; Max-Age=0; Path=/`
  );

  return response;
}