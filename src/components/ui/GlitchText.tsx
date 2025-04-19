
import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  intensity = 'medium',
  tag: Tag = 'span'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    // Random glitching intervals
    const glitchRandom = () => {
      const timeout = Math.random() * (
        intensity === 'high' ? 2000 : 
        intensity === 'medium' ? 5000 : 8000
      ) + 1000;
      
      setTimeout(() => {
        setIsGlitching(true);
        
        setTimeout(() => {
          setIsGlitching(false);
          glitchRandom();
        }, Math.random() * 200 + 100);
      }, timeout);
    };
    
    glitchRandom();
    
    return () => {
      // Clean up any timers if needed
    };
  }, [intensity]);

  const intensityClass = 
    intensity === 'high' ? 'before:opacity-90 after:opacity-90' :
    intensity === 'medium' ? 'before:opacity-70 after:opacity-70' :
    'before:opacity-50 after:opacity-50';

  return (
    <Tag 
      className={`relative inline-block ${isGlitching ? 'animate-glitch' : ''} ${className}`}
      data-text={text}
    >
      <span className="relative">
        {text}
        {isGlitching && (
          <>
            <span className={`absolute left-0 top-0 text-red-500 clip-path-glitch z-10 ${intensityClass}`}>
              {text}
            </span>
            <span className={`absolute left-0 top-0 text-cyan-400 clip-path-glitch-offset z-10 ${intensityClass}`}>
              {text}
            </span>
          </>
        )}
      </span>
    </Tag>
  );
};
