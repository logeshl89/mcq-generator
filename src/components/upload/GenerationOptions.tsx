import React, { useState } from 'react';
import { Settings, Zap } from 'lucide-react';

interface GenerationOptionsProps {
  onSubmit: (options: any) => void;
}

export default function GenerationOptions({ onSubmit }: GenerationOptionsProps) {
  const [difficulty, setDifficulty] = useState('medium');
  const [questionsPerPage, setQuestionsPerPage] = useState(5);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const topics = ['Definitions', 'Concepts', 'Formulas', 'Applications', 'Examples'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      difficulty,
      questionsPerPage,
      topics: selectedTopics
    });
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <div className="flex items-center mb-6">
        <Settings className="h-8 w-8 text-indigo-600" />
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-900">Generation Options</h3>
          <p className="text-sm text-gray-500">Customize your MCQ generation settings</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Difficulty Level
          </label>
          <div className="grid grid-cols-3 gap-4">
            {['easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setDifficulty(level)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize ${
                  difficulty === level
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Questions per Page
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={questionsPerPage}
            onChange={(e) => setQuestionsPerPage(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-sm text-gray-600 mt-1">
            {questionsPerPage} questions
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Question Types
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                className={`px-4 py-2 rounded-md text-sm font-medium border ${
                  selectedTopics.includes(topic)
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate MCQs
            <Zap className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}