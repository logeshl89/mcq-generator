import React, { useState } from 'react';
import { BookOpenCheck, Menu, X, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpenCheck className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">DPP Platform</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
                <Link to="/upload" className="text-gray-600 hover:text-indigo-600">Upload Book</Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  <span>Logout</span>
                  <LogOut className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
                <Link to="/faq" className="text-gray-600 hover:text-indigo-600">FAQ</Link>
                <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
                <Link
                  to="/login"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-3">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-gray-600 hover:text-indigo-600">Dashboard</Link>
                  <Link to="/upload" className="text-gray-600 hover:text-indigo-600">Upload Book</Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                  >
                    <span>Logout</span>
                    <LogOut className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
                  <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
                  <Link to="/faq" className="text-gray-600 hover:text-indigo-600">FAQ</Link>
                  <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
                  <Link
                    to="/login"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors text-center"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}