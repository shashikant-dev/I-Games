'use client';

import { useState, useEffect } from 'react';
import NewsletterSubscribersTable from '@/components/admin/newsletter/NewsletterSubscribersTable';
import NewsletterSubscribersFilters from '@/components/admin/newsletter/NewsletterSubscribersFilters';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function NewsletterSubscribersPage() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    limit: 10
  });
  const [stats, setStats] = useState({
    activeCount: 0,
    inactiveCount: 0
  });
  const [filters, setFilters] = useState({
    search: '',
    isActive: '',
    source: '',
    dateFrom: '',
    dateTo: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchSubscribers();
  }, [filters, pagination.currentPage, pagination.limit]);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);

      const queryParams = new URLSearchParams({
      page: pagination.currentPage.toString(),
      limit: pagination.limit.toString(),
      ...Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value !== '')
      )
      });

      const response = await fetch(`/api/admin/newsletter-subscribers?${queryParams}`, {
      credentials: 'include'
      });

      if (response.ok) {
      const data = await response.json();
      setSubscribers(data.data);
      setPagination(prev => ({
        ...prev,
        ...data.pagination
      }));
      setStats(data.stats);
      } else {
      console.error('Failed to fetch newsletter subscribers');
      }
    } catch (error) {
      console.error('Error fetching newsletter subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  };

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, currentPage: page }));
  };

  const handleUpdateSubscriber = async (id, updateData) => {
    try {
      const response = await fetch(`/api/admin/newsletter-subscribers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
      credentials: 'include'
      });

      if (response.ok) {
      fetchSubscribers(); // Refresh the list
      return { success: true };
      } else {
      const error = await response.json();
      return { success: false, error: error.message };
      }
    } catch (error) {
      console.error('Error updating subscriber:', error);
      return { success: false, error: 'Network error' };
    }
  };

  const handleDeleteSubscriber = async (id) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/newsletter-subscribers/${id}`, {
      method: 'DELETE',
      credentials: 'include'
      });

      if (response.ok) {
      fetchSubscribers(); // Refresh the list
      return { success: true };
      } else {
      const error = await response.json();
      return { success: false, error: error.message };
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
      return { success: false, error: 'Network error' };
    }
  };

  const handleAddSubscriber = async (subscriberData) => {
    try {
      const response = await fetch('/api/admin/newsletter-subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...subscriberData, source: 'manual' }),
      credentials: 'include'
      });

      if (response.ok) {
      fetchSubscribers(); // Refresh the list
      setShowAddModal(false);
      return { success: true };
      } else {
      const error = await response.json();
      return { success: false, error: error.error };
      }
    } catch (error) {
      console.error('Error adding subscriber:', error);
      return { success: false, error: 'Network error' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage newsletter subscriptions and send bulk emails
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Active: {stats.activeCount} | Total: {pagination.totalCount}
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Subscriber
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{stats.activeCount}</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Active Subscribers
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {((stats.activeCount / pagination.totalCount) * 100 || 0).toFixed(1)}% of total
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{stats.inactiveCount}</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Inactive Subscribers
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {((stats.inactiveCount / pagination.totalCount) * 100 || 0).toFixed(1)}% of total
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{pagination.totalCount}</span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Total Subscribers
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    All time signups
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <NewsletterSubscribersFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={() => {
          setFilters({
            search: '',
            isActive: '',
            source: '',
            dateFrom: '',
            dateTo: '',
            sortBy: 'createdAt',
            sortOrder: 'desc'
          });
        }}
      />

      {/* Results */}
      <div className="bg-white shadow rounded-lg">
        <NewsletterSubscribersTable
          subscribers={subscribers}
          loading={loading}
          pagination={pagination}
          onPageChange={handlePageChange}
          onUpdateSubscriber={handleUpdateSubscriber}
          onDeleteSubscriber={handleDeleteSubscriber}
        />
      </div>

      {/* Add Subscriber Modal */}
      {showAddModal && (
        <AddSubscriberModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddSubscriber}
        />
      )}
    </div>
  );
}

// Add Subscriber Modal Component
function AddSubscriberModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const result = await onAdd(formData);

    if (result.success) {
      onClose();
    } else {
      setError(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Add New Subscriber</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="subscriber@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name (Optional)
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Subscriber Name"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Subscriber'}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}