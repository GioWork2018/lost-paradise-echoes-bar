
import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simula un tempo di caricamento per l'effetto immersivo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-night text-white relative">
      {loading ? (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-display animate-text-flicker mb-4">LOST PARADISE</h1>
          <p className="text-sm md:text-base text-dust animate-fade-in-slow">Giovanni Motta</p>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="flex-grow relative">
            {children}
            <div className="noise-overlay"></div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
