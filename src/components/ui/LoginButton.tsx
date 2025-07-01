"use client";

import config from '@/config';
import { ButtonHTMLAttributes } from 'react';

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
}

export default function LoginButton({
  className = '',
  variant = 'text',
  ...props
}: LoginButtonProps) {
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 px-4 py-2 rounded-md',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md',
    text: 'text-blue-600 hover:text-blue-800',
  };

  const handleLogin = () => {
    // Redirect to the app URL
    window.location.href = `${config.urls.app}/auth/login`;
  };

  return (
    <button
      onClick={handleLogin}
      className={`font-medium transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      Log In
    </button>
  );
} 