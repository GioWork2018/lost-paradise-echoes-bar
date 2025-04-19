
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Eye, Shield, Skull, Zap } from 'lucide-react';

interface EvocativeCTAProps {
  text: string;
  to: string;
  className?: string;
  variant?: 'threshold' | 'reflect' | 'resist' | 'time' | 'collect' | 'default';
  external?: boolean;
  hoverText?: string;
}

export const EvocativeCTA: React.FC<EvocativeCTAProps> = ({ 
  text, 
  to, 
  className = '',
  variant = 'default',
  external = false,
  hoverText
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseClasses = 'evocative-cta group';
  const displayText = isHovered && hoverText ? hoverText : text;
  
  const getIcon = () => {
    switch (variant) {
      case 'threshold':
        return <ArrowRight className="ml-2 w-4 h-4 text-toxic group-hover:translate-x-1 transition-transform" />;
      case 'reflect':
        return <Eye className="ml-2 w-4 h-4 text-toxic group-hover:scale-110 transition-transform" />;
      case 'resist':
        return <Zap className="ml-2 w-4 h-4 text-toxic group-hover:rotate-12 transition-transform" />;
      case 'time':
        return <Clock className="ml-2 w-4 h-4 text-toxic animate-pulse" />;
      case 'collect':
        return <Shield className="ml-2 w-4 h-4 text-toxic group-hover:-translate-y-1 transition-transform" />;
      default:
        return <Skull className="ml-2 w-4 h-4 text-toxic group-hover:rotate-12 transition-transform" />;
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Instead of conditionally rendering different components with different props,
  // we'll render them separately based on the 'external' prop
  if (external) {
    return (
      <a 
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="flex items-center relative">
          <span className={`transition-opacity duration-300 ${isHovered && hoverText ? 'opacity-0' : 'opacity-100'}`}>
            {text}
          </span>
          <span className={`absolute left-0 transition-opacity duration-300 ${isHovered && hoverText ? 'opacity-100' : 'opacity-0'}`}>
            {hoverText}
          </span>
          <span className="ml-2">
            {getIcon()}
          </span>
        </span>
      </a>
    );
  }
  
  return (
    <Link 
      to={to}
      className={`${baseClasses} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="flex items-center relative">
        <span className={`transition-opacity duration-300 ${isHovered && hoverText ? 'opacity-0' : 'opacity-100'}`}>
          {text}
        </span>
        {hoverText && (
          <span className={`absolute left-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {hoverText}
          </span>
        )}
        <span className="ml-2">
          {getIcon()}
        </span>
      </span>
    </Link>
  );
};
