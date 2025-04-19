
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Eye, Shield, Skull, Zap } from 'lucide-react';

interface EvocativeCTAProps {
  text: string;
  to: string;
  className?: string;
  variant?: 'threshold' | 'reflect' | 'resist' | 'time' | 'collect' | 'default';
  external?: boolean;
}

export const EvocativeCTA: React.FC<EvocativeCTAProps> = ({ 
  text, 
  to, 
  className = '',
  variant = 'default',
  external = false
}) => {
  const baseClasses = 'evocative-cta group';
  
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

  const Comp = external ? 'a' : Link;
  const linkProps = external ? { href: to, target: "_blank", rel: "noopener noreferrer" } : { to };

  return (
    <Comp 
      {...linkProps}
      className={`${baseClasses} ${className}`}
    >
      <span className="flex items-center">
        {text}
        {getIcon()}
      </span>
    </Comp>
  );
};
