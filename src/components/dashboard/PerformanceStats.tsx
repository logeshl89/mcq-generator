import React from 'react';
import { TrendingUp, Clock, Target, Brain } from 'lucide-react';

export default function PerformanceStats() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Performance Statistics</h2>
        <TrendingUp className="h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Clock className="h-5 w-5 text-indigo-600 mr-2" />
            <h3 className="font-medium text-gray-900">Average Time</h3>
          </div>
          <p className="text-2xl font-semibold text-gray-900">2.5 min</p>
          <p className="text-sm text-gray-600">per question</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Target className="h-5 w-5 text-green-600 mr-2" />
            <h3 className="font-medium text-gray-900">Success Rate</h3>
          </div>
          <p className="text-2xl font-semibold text-gray-900">84%</p>
          <p className="text-sm text-gray-600">correct answers</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Brain className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="font-medium text-gray-900">Topics Mastered</h3>
          </div>
          <p className="text-2xl font-semibold text-gray-900">15</p>
          <p className="text-sm text-gray-600">across all subjects</p>
        </div>
      </div>
    </div>
  );
}