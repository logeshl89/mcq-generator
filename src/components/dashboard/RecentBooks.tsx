import React from 'react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function RecentBooks() {
  const books = [
    {
      id: 1,
      title: "Advanced Mathematics",
      progress: 75,
      lastAccessed: "2 hours ago",
      coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=300"
    },
    {
      id: 2,
      title: "Physics Fundamentals",
      progress: 45,
      lastAccessed: "1 day ago",
      coverUrl: "https://images.unsplash.com/photo-1632571401005-458e9d244591?auto=format&fit=crop&w=300"
    },
    {
      id: 3,
      title: "Chemistry Basics",
      progress: 30,
      lastAccessed: "3 days ago",
      coverUrl: "https://images.unsplash.com/photo-1532634993-15f421e42ec0?auto=format&fit=crop&w=300"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Books</h2>
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="space-y-6">
        {books.map((book) => (
          <div key={book.id} className="flex items-center space-x-4">
            <img
              src={book.coverUrl}
              alt={book.title}
              className="w-16 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{book.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="h-4 w-4 mr-1" />
                {book.lastAccessed}
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${book.progress}%` }}
                />
              </div>
            </div>
            <button className="p-2 hover:bg-gray-50 rounded-full">
              <BookOpen className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}