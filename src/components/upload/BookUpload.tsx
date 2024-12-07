import React, { useState } from 'react';
import { Upload, FileText, ChevronRight, AlertCircle } from 'lucide-react';
import UploadForm from './UploadForm';
import PageSelection from './PageSelection';
import GenerationOptions from './GenerationOptions';

export default function BookUpload() {
  const [step, setStep] = useState(1);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedPages, setSelectedPages] = useState({ start: 1, end: 1 });
  const [options, setOptions] = useState({
    difficulty: 'medium',
    questionsPerPage: 5,
    topics: []
  });

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setStep(2);
  };

  const handlePageSelection = (pages: { start: number; end: number }) => {
    setSelectedPages(pages);
    setStep(3);
  };

  const handleOptionsSubmit = (generationOptions: any) => {
    setOptions(generationOptions);
    // Here you would typically start the MCQ generation process
    console.log('Starting MCQ generation with:', { uploadedFile, selectedPages, generationOptions });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((number) => (
              <React.Fragment key={number}>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= number ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {number}
                </div>
                {number < 3 && (
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <p className="text-sm text-gray-600">
              {step === 1 && 'Upload Your Book'}
              {step === 2 && 'Select Pages'}
              {step === 3 && 'Configure Options'}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-3xl mx-auto">
          {step === 1 && (
            <UploadForm onFileUpload={handleFileUpload} />
          )}
          
          {step === 2 && uploadedFile && (
            <PageSelection 
              fileName={uploadedFile.name}
              onPageSelection={handlePageSelection}
            />
          )}
          
          {step === 3 && (
            <GenerationOptions onSubmit={handleOptionsSubmit} />
          )}
        </div>
      </div>
    </div>
  );
}