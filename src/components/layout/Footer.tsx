import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">DPP Platform</h3>
            <p className="text-gray-600 text-sm">
              Empowering students with AI-powered learning tools for better understanding and retention.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-indigo-600 text-sm">About Us</a></li>
              <li><a href="/features" className="text-gray-600 hover:text-indigo-600 text-sm">Features</a></li>
              <li><a href="/pricing" className="text-gray-600 hover:text-indigo-600 text-sm">Pricing</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-indigo-600 text-sm">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-600 hover:text-indigo-600 text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-indigo-600 text-sm">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-600 hover:text-indigo-600 text-sm">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DPP Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}