"use client";

import Link from 'next/link';
import { useState } from 'react';
import LoginButton from '../ui/LoginButton';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-gray-900">Empower</span>
          <span className="text-blue-600">Blu</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="mr-8">
            <ul className="flex space-x-8">
              <li>
                <Link href="/#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <LoginButton variant="outline" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg 
            className="w-6 h-6 text-gray-700" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/#features" 
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="/#industries" 
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link 
                  href="/#pricing" 
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-100">
                <div className="py-2" onClick={() => setIsMenuOpen(false)}>
                  <LoginButton 
                    variant="primary" 
                    className="w-full flex justify-center"
                  />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
} 