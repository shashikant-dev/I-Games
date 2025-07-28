'use client';

import { useState } from 'react';
import { EyeIcon, PencilIcon, TrashIcon, CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NewsletterSubscribersTable({ subscribers, loading, pagination, onPageChange, onUpdateSubscriber, onDeleteSubscriber }) {
  const [editingSubscriber, setEditingSubscriber] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return 'Never';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const toggleSubscriberStatus = async (subscriber) => {
    const result = await onUpdateSubscriber(subscriber._id, { isActive: !subscriber.isActive });
    if (!result.success) alert('Failed to update subscriber status: ' + result.error);
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (<div key={i} className="h-16 bg-gray-200 rounded"></div>))}
        </div>
      </div>
    );
  }

  if (subscribers.length === 0) {
    return (<div className="p-6 text-center"><p className="text-gray-500">No newsletter subscribers found.</p></div>);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscriber</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscribed</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.map((subscriber) => (
              <tr key={subscriber._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm text-gray-500">{subscriber.email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleSubscriberStatus(subscriber)}
                    className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                      subscriber.isActive ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-red-100 text-red-800 hover:bg-red-200'
                    } transition-colors cursor-pointer`}
                  >
                    {subscriber.isActive ? (<><CheckCircleIcon className="h-3 w-3 mr-1" />Active</>) : (<><XCircleIcon className="h-3 w-3 mr-1" />Inactive</>)}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">{subscriber.source}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(subscriber.createdAt)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingSubscriber(subscriber)} className="text-indigo-600 hover:text-indigo-900" title="Edit">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button onClick={() => onDeleteSubscriber(subscriber._id)} className="text-red-600 hover:text-red-900" title="Delete">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination.totalPages > 1 && (
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-700">
            Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to {Math.min(pagination.currentPage * pagination.limit, pagination.totalCount)} of {pagination.totalCount} results
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => onPageChange(pagination.currentPage - 1)} disabled={!pagination.hasPrevPage} className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <span className="text-sm text-gray-700">Page {pagination.currentPage} of {pagination.totalPages}</span>
            <button onClick={() => onPageChange(pagination.currentPage + 1)} disabled={!pagination.hasNextPage} className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      {editingSubscriber && (<SubscriberEditModal subscriber={editingSubscriber} onClose={() => setEditingSubscriber(null)} onSave={onUpdateSubscriber} />)}
    </div>
  );
}

function SubscriberEditModal({ subscriber, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: subscriber.name || '',
    isActive: subscriber.isActive,
    tags: subscriber.tags ? subscriber.tags.join(', ') : ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateData = {
      name: formData.name,
      isActive: formData.isActive,
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : []
    };
    const result = await onSave(subscriber._id, updateData);
    if (result.success) onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-md shadow-lg rounded-md bg-white">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">Update Settings</h3>
            <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" value={formData.isActive} onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'true' })}>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Cancel</button>
            <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}