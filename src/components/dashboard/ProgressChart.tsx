import React from 'react';
import { BarChart, Activity } from 'lucide-react';

export default function ProgressChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Weekly Progress</h2>
        <Activity className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Mathematics</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '85%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Physics</span>
            <span>65%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '65%' }} />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Chemistry</span>
            <span>45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }} />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Overall Progress</span>
          <span className="font-semibold text-indigo-600">72%</span>
        </div>
      </div>
    </div>
  );
}