import React, { useState } from 'react';
import { Book, ChevronRight } from 'lucide-react';

interface PageSelectionProps {
  fileName: string;
  onPageSelection: (pages: { start: number; end: number }) => void;
}

export default function PageSelection({ fileName, onPageSelection }: PageSelectionProps) {
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPageSelection({ start: startPage, end: endPage });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center mb-6">
        <Book className="h-8 w-8 text-indigo-600" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">{fileName}</h3>
          <p className="text-sm text-gray-500">Select the pages you want to study</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startPage" className="block text-sm font-medium text-gray-700">
              Start Page
            </label>
            <input
              type="number"
              id="startPage"
              min="1"
              value={startPage}
              onChange={(e) => setStartPage(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="endPage" className="block text-sm font-medium text-gray-700">
              End Page
            </label>
            <input
              type="number"
              id="endPage"
              min={startPage}
              value={endPage}
              onChange={(e) => setEndPage(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}