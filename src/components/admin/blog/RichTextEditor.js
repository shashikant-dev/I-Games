'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import CKEditor with no SSR
const CKEditor = dynamic(
  () => import('@ckeditor/ckeditor5-react').then((mod) => mod.CKEditor),
  { ssr: false }
);

// Dynamically import ClassicEditor
const ClassicEditor = dynamic(
  () => import('@ckeditor/ckeditor5-build-classic'),
  { ssr: false }
);

export default function RichTextEditor({ value, onChange }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-[500px] border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[500px]">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
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
          }
        }}
      />
    </div>
  );
}