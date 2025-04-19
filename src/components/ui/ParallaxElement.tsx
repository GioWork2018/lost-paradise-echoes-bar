
import React, { useRef, useEffect, useState } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Speed factor for the parallax effect
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.1,
  className = '',
  direction = 'vertical',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      // Get the element's position relative to the viewport
      const rect = elementRef.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      
      // Calculate how far we've scrolled past the element
      const scrolled = window.scrollY - elementTop + window.innerHeight;
      
      if (scrolled > 0 && window.scrollY + window.innerHeight > elementTop) {
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  // Style based on direction
  const style = direction === 'vertical'
    ? { transform: `translateY(${offset}px)` }
    : { transform: `translateX(${offset}px)` };
  
  return (
    <div 
      ref={elementRef} 
      className={`transition-transform will-change-transform ${className}`} 
      style={style}
    >
      {children}
    </div>
  );
};
