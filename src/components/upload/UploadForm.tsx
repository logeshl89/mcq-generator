import React, { useCallback } from 'react';
import { Upload, FileText } from 'lucide-react';

interface UploadFormProps {
  onFileUpload: (file: File) => void;
}

export default function UploadForm({ onFileUpload }: UploadFormProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      onFileUpload(file);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900">Upload your PDF</h3>
          <p className="mt-2 text-sm text-gray-500">
            Drag and drop your PDF file here, or click to select a file
          </p>
        </div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
        >
          <FileText className="mr-2 h-5 w-5" />
          Select PDF File
        </label>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-900">Supported Format</h4>
        <p className="mt-1 text-sm text-gray-500">
          Only PDF files are supported. Maximum file size: 50MB
        </p>
      </div>
    </div>
  );
}