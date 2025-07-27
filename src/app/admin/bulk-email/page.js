'use client';

import { useState, useEffect } from 'react';
import { PaperAirplaneIcon, CheckCircleIcon, XCircleIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function BulkEmailPage() {
  const [emailData, setEmailData] = useState({
    subject: '',
    content: '',
    recipientFilter: {
      tags: [],
      source: '',
      frequency: ''
    }
  });
  const [stats, setStats] = useState({
    totalSubscribers: 0,
    activeSubscribers: 0,
    filteredCount: 0
  });
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    fetchEmailStats();
  }, []);

  useEffect(() => {
    // Update filtered count when filters change
    updateFilteredCount();
  }, [emailData.recipientFilter]);

  const fetchEmailStats = async () => {
    try {
      const response = await fetch('/api/admin/bulk-email', {
      credentials: 'include'
      });

      if (response.ok) {
      const data = await response.json();
      setStats({
        totalSubscribers: data.data.overview.totalSubscribers,
        activeSubscribers: data.data.overview.activeSubscribers,
        filteredCount: data.data.overview.activeSubscribers
      });
      }
    } catch (error) {
      console.error('Error fetching email stats:', error);
    }
  };

  const updateFilteredCount = async () => {
    try {
      const queryParams = new URLSearchParams({
      limit: '1',
      isActive: 'true',
      ...Object.fromEntries(
        Object.entries(emailData.recipientFilter).filter(([_, value]) =>
          value && (Array.isArray(value) ? value.length > 0 : true)
        )
      )
      });

      const response = await fetch(`/api/admin/newsletter-subscribers?${queryParams}`, {
      credentials: 'include'
      });

      if (response.ok) {
      const data = await response.json();
      setStats(prev => ({ ...prev, filteredCount: data.pagination.totalCount }));
      }
    } catch (error) {
      console.error('Error updating filtered count:', error);
    }
  };

  const handleSendEmail = async () => {
    if (!emailData.subject.trim() || !emailData.content.trim()) {
      alert('Please fill in both subject and content fields.');
      return;
    }

    if (!confirm(`Are you sure you want to send this email to ${stats.filteredCount} subscribers?`)) {
      return;
    }

    setSending(true);
    setResult(null);

    try {
      const response = await fetch('/api/admin/bulk-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: emailData.subject,
        content: emailData.content,
        recipientFilter: emailData.recipientFilter
      }),
      credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
      setResult({
        type: 'success',
        message: data.message,
        stats: data.data.stats
      });
      // Reset form after successful send
      setEmailData({
        subject: '',
        content: '',
        recipientFilter: { tags: [], source: '', frequency: '' }
      });
      } else {
      setResult({ type: 'error', message: data.error });
      }
    } catch (error) {
      console.error('Error sending bulk email:', error);
      setResult({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  const generatePreview = () => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #3B82F6; color: white; padding: 30px 20px; text-align: center;">
        <h1>iGames.cloud</h1>
        <p>Gaming & Sports Technology Solutions</p>
      </div>
      <div style="padding: 40px 30px; background: white;">
        ${emailData.content.replace(/\n/g, '<br>')}
      </div>
      <div style="padding: 30px 20px; text-align: center; color: #666; font-size: 14px; background: #f8f9fa;">
        <p>&copy; 2025 iGames.cloud. All rights reserved.</p>
        <div style="color: #666; font-size: 12px; margin-top: 20px;">
          <p>You are receiving this email because you subscribed to our newsletter.</p>
        </div>
      </div>
      </div>
    `;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Bulk Email</h1>
        <p className="mt-1 text-sm text-gray-500">
          Send newsletters and updates to your subscribers
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <UserGroupIcon className="h-8 w-8 text-blue-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Subscribers</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.totalSubscribers}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Subscribers</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.activeSubscribers}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <PaperAirplaneIcon className="h-8 w-8 text-purple-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Recipients (Filtered)</dt>
                  <dd className="text-lg font-medium text-gray-900">{stats.filteredCount}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {result && (
        <div className={`rounded-md p-4 ${result.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
          <div className="flex">
            {result.type === 'success' ? (
              <CheckCircleIcon className="h-5 w-5 text-green-400" />
            ) : (
              <XCircleIcon className="h-5 w-5 text-red-400" />
            )}
            <div className="ml-3">
              <p className={`text-sm font-medium ${result.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                {result.message}
              </p>
              {result.stats && (
                <div className="mt-2 text-sm text-green-700">
                  <p>Successfully sent: {result.stats.successfulSends}</p>
                  <p>Failed: {result.stats.failedSends}</p>
                  <p>Success rate: {result.stats.successRate}%</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Composer */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Compose Email</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setPreviewMode(!previewMode)}
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  {previewMode ? 'Edit' : 'Preview'}
                </button>
              </div>
            </div>

            {!previewMode ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={emailData.subject}
                    onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                    placeholder="Enter email subject..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                  <textarea
                    required
                    rows={12}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={emailData.content}
                    onChange={(e) => setEmailData({ ...emailData, content: e.target.value })}
                    placeholder="Write your email content here... You can use {{name}} to personalize with subscriber names."
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Use {{name}} to insert subscriber names. HTML tags are supported.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Email Preview</h4>
                <div className="border rounded-md p-4 bg-gray-50">
                  <div className="mb-4">
                    <strong>Subject:</strong> {emailData.subject || 'No subject'}
                  </div>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: generatePreview() }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recipient Filters & Send */}
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recipient Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={emailData.recipientFilter.source}
                  onChange={(e) => setEmailData({
                    ...emailData,
                    recipientFilter: { ...emailData.recipientFilter, source: e.target.value }
                  })}
                >
                  <option value="">All Sources</option>
                  <option value="website">Website</option>
                  <option value="api">API</option>
                  <option value="import">Import</option>
                  <option value="manual">Manual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequency Preference</label>
                <select
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={emailData.recipientFilter.frequency}
                  onChange={(e) => setEmailData({
                    ...emailData,
                    recipientFilter: { ...emailData.recipientFilter, frequency: e.target.value }
                  })}
                >
                  <option value="">All Frequencies</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>{stats.filteredCount}</strong> subscribers will receive this email
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <button
              onClick={handleSendEmail}
              disabled={sending || !emailData.subject.trim() || !emailData.content.trim()}
              className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PaperAirplaneIcon className="h-5 w-5 mr-2" />
              {sending ? 'Sending...' : `Send to ${stats.filteredCount} Recipients`}
            </button>

            {stats.filteredCount === 0 && (
              <p className="text-sm text-red-600 mt-2 text-center">
                No active subscribers match the current filters
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}