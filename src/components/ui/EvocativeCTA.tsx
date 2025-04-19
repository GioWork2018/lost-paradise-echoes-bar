
import React from 'react';
import { Link } from 'react-router-dom';

interface EvocativeCTAProps {
  text: string;
  to: string;
  className?: string;
  external?: boolean;
}

export const EvocativeCTA: React.FC<EvocativeCTAProps> = ({ 
  text, 
  to, 
  className = '', 
  external = false 
}) => {
  const baseClasses = 'evocative-cta group';
  
  if (external) {
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseClasses} ${className}`}
      >
        {text}
      </a>
    );
  }
  
  return (
    <Link to={to} className={`${baseClasses} ${className}`}>
      {text}
    </Link>
  );
};
