
import React from 'react';
import { GlitchText } from '../ui/GlitchText';

export const CollectionHeader = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-center">
        <GlitchText text="La Collezione" intensity="low" tag="span" />
      </h1>
      
      <p className="text-lg text-fog/80 text-center max-w-2xl mx-auto">
        Esplora i reperti archeologici di un futuro che potrebbe essere, 
        opere che raccontano la resistenza della giovinezza in un mondo collassato.
      </p>
    </div>
  );
};
