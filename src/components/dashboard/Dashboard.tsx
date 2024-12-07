import React from 'react';
import { Book, BarChart2, Clock, Award } from 'lucide-react';
import RecentBooks from './RecentBooks';
import ProgressChart from './ProgressChart';
import PerformanceStats from './PerformanceStats';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600">Track your progress and continue learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <Book className="h-10 w-10 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Books</p>
                <p className="text-xl font-semibold">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <BarChart2 className="h-10 w-10 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Questions Answered</p>
                <p className="text-xl font-semibold">247</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <Clock className="h-10 w-10 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Study Time</p>
                <p className="text-xl font-semibold">32h</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center">
              <Award className="h-10 w-10 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Accuracy</p>
                <p className="text-xl font-semibold">84%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RecentBooks />
          </div>
          <div>
            <ProgressChart />
          </div>
        </div>

        <div className="mt-8">
          <PerformanceStats />
        </div>
      </div>
    </div>
  );
}