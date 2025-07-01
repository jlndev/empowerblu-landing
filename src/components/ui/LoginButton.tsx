"use client";

import config from '@/config';
import Link from 'next/link';

interface LoginButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
}

export default function LoginButton({
  className = '',
  variant = 'text',
}: LoginButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-md',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md',
    text: 'text-blue-600 hover:text-blue-800',
  };

  // Construct the login URL
  const loginUrl = `${config.urls.app}/login`;

  return (
    <Link 
      href={loginUrl}
      className={`font-medium transition-colors ${variantClasses[variant]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Log In
    </Link>
  );
} 