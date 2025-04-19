
import React, { useState, useEffect, useRef } from 'react';
import { ParallaxElement } from '../ui/ParallaxElement';
import { GlitchText } from '../ui/GlitchText';
import { useIsMobile } from '@/hooks/use-mobile';

interface Silhouette {
  id: number;
  name: string;
  position: {
    mobile: {
      top: string;
      left: string;
    },
    desktop: {
      top: string;
      left: string;
    }
  };
  color: string;
  size: string;
  delay: number;
}

const silhouettes: Silhouette[] = [
  { 
    id: 1, 
    name: 'Cleon', 
    position: {
      desktop: { top: '20%', left: '15%' },
      mobile: { top: '15%', left: '25%' }
    }, 
    color: 'bg-rust/70', 
    size: 'h-24 md:h-32',
    delay: 0.3
  },
  { 
    id: 2, 
    name: 'Swaney', 
    position: {
      desktop: { top: '30%', left: '70%' },
      mobile: { top: '30%', left: '60%' }
    }, 
    color: 'bg-toxic/60', 
    size: 'h-28 md:h-40',
    delay: 0.7
  },
  { 
    id: 3, 
    name: 'Sugar', 
    position: {
      desktop: { top: '55%', left: '25%' },
      mobile: { top: '50%', left: '25%' }
    }, 
    color: 'bg-acid/50', 
    size: 'h-20 md:h-36',
    delay: 0.5
  },
  { 
    id: 4, 
    name: 'JonnyBoy', 
    position: {
      desktop: { top: '45%', left: '60%' },
      mobile: { top: '65%', left: '60%' }
    }, 
    color: 'bg-ash/60', 
    size: 'h-32 md:h-48',
    delay: 0.8
  }
];

export const CageSection: React.FC = () => {
  const [activeSilhouette, setActiveSilhouette] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cageRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cageRef.current || isMobile) return;
      
      const rect = cageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Apply a subtle tilt effect based on mouse position
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);
  
  // Calculate the tilt transform style
  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${(mousePosition.y * 5) - 2.5}deg) rotateY(${(mousePosition.x * 5) - 2.5}deg)`
  };

  return (
    <section className="py-20 lg:py-32 bg-night relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            <GlitchText text="La Gabbia Visiva" intensity="low" tag="span" />
          </h2>
          <p className="text-fog/80 max-w-2xl mx-auto">
            Uno specchio simbolico dove i "furbi" si affacciano, intrappolati in un mondo distrutto dalla propria avidità. Sei dentro o fuori dalla gabbia?
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div 
            ref={cageRef}
            className="tilt-container aspect-[4/3] bg-night/80 border border-rust/30 rounded-sm relative overflow-hidden"
            style={!isMobile ? tiltStyle : undefined}
          >
            {/* Cage bars overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 flex">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 border-l border-r border-fog/10"
                    style={{ borderWidth: '1px' }}
                  ></div>
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 border-t border-b border-fog/10"
                    style={{ borderWidth: '1px' }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Silhouettes */}
            {silhouettes.map((silhouette, index) => (
              <div 
                key={silhouette.id}
                className="cage-silhouette cursor-pointer"
                style={{ 
                  top: isMobile ? silhouette.position.mobile.top : silhouette.position.desktop.top, 
                  left: isMobile ? silhouette.position.mobile.left : silhouette.position.desktop.left,
                  animationDelay: `${silhouette.delay}s`,
                  opacity: activeSilhouette === null || activeSilhouette === silhouette.id ? 1 : 0.2,
                  transform: `scale(${activeSilhouette === silhouette.id ? 1.1 : 1})`,
                  transition: 'all 0.5s ease-out'
                }}
                onClick={() => setActiveSilhouette(activeSilhouette === silhouette.id ? null : silhouette.id)}
              >
                <div className={`${silhouette.color} ${silhouette.size} w-8 md:w-16 animate-float`} style={{
                  animationDelay: `${index * 0.5}s`,
                  maskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 60\"><path d=\"M12,0 C16,15 24,20 24,35 C24,48 18,60 12,60 C6,60 0,48 0,35 C0,20 8,15 12,0 Z\" /></svg>')",
                  WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 60\"><path d=\"M12,0 C16,15 24,20 24,35 C24,48 18,60 12,60 C6,60 0,48 0,35 C0,20 8,15 12,0 Z\" /></svg>')",
                }}></div>
                
                {activeSilhouette === silhouette.id && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 text-xs md:text-sm font-mono text-toxic whitespace-nowrap bg-night/70 px-2 py-1 rounded-sm animate-fade-in">
                    {silhouette.name}
                  </div>
                )}
              </div>
            ))}
            
            {/* Reflection effect at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-fog/5 to-transparent"></div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-fog/60 italic">
              Interagisci con le sagome per scoprire i loro nomi
            </p>
          </div>
          
          {activeSilhouette && (
            <ParallaxElement className="mt-8 max-w-lg mx-auto p-4 border border-rust/20 bg-night/60 rounded-sm animate-fade-in">
              <p className="text-sm text-fog/90 italic">
                "{silhouettes.find(s => s.id === activeSilhouette)?.name} è un simbolo della giovinezza intrappolata, ma anche dell'innocenza che resiste. In un mondo distrutto, è tanto vittima quanto salvatore."
              </p>
              <p className="text-right text-xs text-fog/60 mt-2">— Giovanni Motta</p>
            </ParallaxElement>
          )}
        </div>
      </div>
    </section>
  );
};
