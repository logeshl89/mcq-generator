import React from 'react';
import { ArrowRight, BookOpen, Brain, Target } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Study Material into
              <span className="text-indigo-600"> Interactive Learning</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Upload your study material and let our AI generate personalized multiple-choice questions. 
              Master your subjects with smart practice sessions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Upload Material</h3>
                <p className="text-gray-600 text-sm">Simply upload your PDF study materials to get started</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Brain className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">AI Processing</h3>
                <p className="text-gray-600 text-sm">Our AI analyzes your content and generates relevant questions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Target className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Practice & Learn</h3>
                <p className="text-gray-600 text-sm">Answer questions and track your progress</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-xl shadow-lg text-white">
                <h3 className="font-semibold mb-2">Get Started Now</h3>
                <p className="text-sm opacity-90">Join thousands of students improving their study efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}