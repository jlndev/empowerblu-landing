import { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
  highlight?: boolean;
}

export default function Card({
  children,
  className = '',
  icon,
  title,
  description,
  highlight = false,
}: CardProps) {
  return (
    <div 
      className={`
        p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow
        ${highlight ? 'ring-2 ring-blue-600 bg-blue-50' : 'bg-white'}
        ${className}
      `}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
    </div>
  );
} 