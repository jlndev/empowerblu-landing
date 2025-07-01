"use client";

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-md text-center font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  
  const widthClass = fullWidth ? 'w-full' : 'inline-block';
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={allClasses} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button type={type} className={allClasses} onClick={onClick}>
      {children}
    </button>
  );
} 