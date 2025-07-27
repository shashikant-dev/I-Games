'use client';

import { useState, useEffect } from 'react';
import ContactRequestsTable from '@/components/admin/contact-requests/ContactRequestsTable';
import ContactRequestsFilters from '@/components/admin/contact-requests/ContactRequestsFilters';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function ContactRequestsPage() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    limit: 10
  });
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    priority: '',
    dateFrom: '',
    dateTo: '',
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });

  useEffect(() => {
    fetchRequests();
  }, [filters, pagination.currentPage, pagination.limit]);

  const fetchRequests = async () => {
    try {
      setLoading(true);

      const queryParams = new URLSearchParams({
        page: pagination.currentPage.toString(),
        limit: pagination.limit.toString(),
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== '')
        )
      });

      const response = await fetch(`/api/admin/contact-requests?${queryParams}`, {
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        setRequests(data.data);
        setPagination(prev => ({
          ...prev,
          ...data.pagination
        }));
      } else {
        console.error('Failed to fetch contact requests');
      }
    } catch (error) {
      console.error('Error fetching contact requests:', error);
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

  const handleUpdateRequest = async (id, updateData) => {
    try {
      const response = await fetch(`/api/admin/contact-requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
        credentials: 'include'
      });

      if (response.ok) {
        fetchRequests(); // Refresh the list
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message };
      }
    } catch (error) {
      console.error('Error updating request:', error);
      return { success: false, error: 'Network error' };
    }
  };

  const handleDeleteRequest = async (id) => {
    if (!confirm('Are you sure you want to delete this contact request?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/contact-requests/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        fetchRequests(); // Refresh the list
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message };
      }
    } catch (error) {
      console.error('Error deleting request:', error);
      return { success: false, error: 'Network error' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Requests</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage and respond to user contact requests
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Total: {pagination.totalCount} requests
        </div>
      </div>

      {/* Filters */}
      <ContactRequestsFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={() => {
          setFilters({
            search: '',
            status: '',
            priority: '',
            dateFrom: '',
            dateTo: '',
            sortBy: 'createdAt',
            sortOrder: 'desc'
          });
        }}
      />

      {/* Results */}
      <div className="bg-white shadow rounded-lg">
        <ContactRequestsTable
          requests={requests}
          loading={loading}
          pagination={pagination}
          onPageChange={handlePageChange}
          onUpdateRequest={handleUpdateRequest}
          onDeleteRequest={handleDeleteRequest}
        />
      </div>
    </div>
  );
}