
import React from 'react';
import type { Sagoma } from '@/data/sagomeData';

interface SagomaCardProps {
  sagoma: Sagoma;
  isActive: boolean;
  onToggle: () => void;
  index: number;
}

export const SagomaCard: React.FC<SagomaCardProps> = ({ sagoma, isActive, onToggle, index }) => {
  return (
    <div className="p-2">
      <div 
        className={`aspect-[3/4] rounded-sm p-6 flex flex-col justify-end border border-fog/20 bg-night/80 hover:border-toxic/50 transition-all cursor-pointer ${
          isActive ? "border-toxic" : ""
        }`}
        onClick={onToggle}
      >
        <div className="flex-1 flex items-center justify-center relative">
          <img 
            src={sagoma.image} 
            alt="Sagoma"
            className="h-full w-auto object-contain animate-float"
            style={{
              animationDelay: `${index * 0.5}s`
            }}
          />
          {isActive && (
            <div className="absolute inset-0 bg-night/50 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4">
              <p className="text-xs text-fog/90 text-center">{sagoma.description}</p>
            </div>
          )}
        </div>
        
        <p className="text-xs text-fog/60 mt-4 text-center font-mono">
          {isActive ? "Clicca per chiudere" : "Clicca per scoprire"}
        </p>
      </div>
    </div>
  );
};
