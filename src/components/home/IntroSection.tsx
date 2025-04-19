
import React, { useState, useEffect } from 'react';
import { GlitchText } from '../ui/GlitchText';

export const IntroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Audio element (simulated audio loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAudioLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Audio play logic would go here in a real implementation
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Video Simulation (gradient + overlay) */}
      <div className="absolute inset-0 bg-gradient-to-b from-night to-ash overflow-hidden">
        <div className="absolute inset-0 bg-jonnyboy bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent"></div>
      </div>
      
      <div className={`max-w-4xl mx-auto text-center z-10 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-4 md:mb-6">
          <GlitchText 
            text="LOST PARADISE" 
            intensity="medium"
            tag="span"
            className="text-white"
          />
        </h1>
        
        <p className="text-xl md:text-2xl text-fog/80 mb-10 italic font-display">
          Un nuovo progetto che esplora un mondo post-apocalittico<br />
          dove sopravvive solo l'astrazione della giovinezza
        </p>
        
        <p className="text-lg md:text-xl text-toxic/90 mb-4 font-mono mt-8">
          Qui il tempo è finito. Ma tu puoi ancora scegliere.
        </p>
      </div>
      
      {/* Audio Control */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={toggleAudio}
          className={`flex items-center space-x-2 text-xs uppercase font-mono tracking-wider text-fog/70 hover:text-white transition-colors 
            ${audioLoaded ? '' : 'animate-pulse opacity-50'}`}
          disabled={!audioLoaded}
        >
          <span className="inline-block w-3 h-3 rounded-full bg-rust relative">
            {isPlaying && (
              <span className="absolute inset-0 rounded-full bg-rust animate-ping opacity-75"></span>
            )}
          </span>
          <span>{isPlaying ? 'Disattiva Audio' : 'Attiva Audio'}</span>
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};
