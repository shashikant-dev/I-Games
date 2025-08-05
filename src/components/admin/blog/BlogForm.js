'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import CKEditor with SSR disabled
const CKEditor = dynamic(
  () => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor),
  { ssr: false }
);

// Dynamically import the editor build
const ClassicEditor = dynamic(
  () => import('@ckeditor/ckeditor5-build-classic'),
  { ssr: false }
);

export default function BlogForm({ blog, onSubmit, isSubmitting }) {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    slug: blog?.slug || '',
    description: blog?.description || '',
    content: blog?.content || '',
    bannerImage: blog?.bannerImage || '',
    isPublished: blog?.isPublished || false
  });
  const [imagePreview, setImagePreview] = useState(blog?.bannerImage || '');
  const [error, setError] = useState(null);
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'title') {
      const newSlug = generateSlug(value);
      setFormData(prev => ({
        ...prev,
        [name]: value,
        slug: newSlug
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to upload image');
      }

      const { url } = await res.json();
      setFormData(prev => ({ ...prev, bannerImage: url }));
      setImagePreview(url);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleCancel = () => {
    // Use router instead of window.history
    window.location.href = '/admin/blog';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Slug (Auto-generated)
        </label>
        <div className="mt-1 relative">
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            readOnly
            className="block w-full px-3 py-2 text-gray-500 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
            Auto-generated
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          The URL-friendly version of the title is automatically generated
        </p>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Banner Image
        </label>
        <div className="mt-1 flex items-center gap-4">
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 dark:text-gray-400"
          />
          {imagePreview && (
            <div className="relative h-20 w-32">
              <Image
                src={imagePreview}
                alt="Banner preview"
                fill
                className="object-cover rounded"
              />
            </div>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Content
        </label>
        {editorLoaded && (
          <CKEditor
            editor={ClassicEditor}
            data={formData.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFormData(prev => ({ ...prev, content: data }));
            }}
            config={{
              toolbar: {
                items: [
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  'underline',
                  'strikethrough',
                  '|',
                  'link',
                  'bulletedList',
                  'numberedList',
                  '|',
                  'alignment',
                  'indent',
                  'outdent',
                  '|',
                  'blockQuote',
                  'insertTable',
                  '|',
                  'undo',
                  'redo'
                ]
              },
              table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
              },
              height: '500px'
            }}
          />
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isPublished"
          name="isPublished"
          checked={formData.isPublished}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
          Publish immediately
        </label>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : 'Save Blog'}
        </button>
      </div>
    </form>
  );
}