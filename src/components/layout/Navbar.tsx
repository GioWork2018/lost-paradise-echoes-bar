
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-night/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-display tracking-wider text-white">
          <span className="text-rust">LOST</span> PARADISE
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-mono text-sm uppercase tracking-wider">
          <Link to="/" className="text-fog hover:text-toxic transition-colors duration-300">Home</Link>
          <Link to="/collection" className="text-fog hover:text-toxic transition-colors duration-300">Collezione</Link>
          <Link to="/project" className="text-fog hover:text-toxic transition-colors duration-300">Progetto</Link>
          <Link to="/booking" className="text-fog hover:text-toxic transition-colors duration-300">Prenota</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-night/90 backdrop-blur-md border-t border-rust/20">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 font-mono text-sm uppercase tracking-wider">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className="py-2 text-fog hover:text-toxic transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/collection" 
              onClick={toggleMenu}
              className="py-2 text-fog hover:text-toxic transition-colors duration-300"
            >
              Collezione
            </Link>
            <Link 
              to="/project" 
              onClick={toggleMenu}
              className="py-2 text-fog hover:text-toxic transition-colors duration-300"
            >
              Progetto
            </Link>
            <Link 
              to="/booking" 
              onClick={toggleMenu}
              className="py-2 text-fog hover:text-toxic transition-colors duration-300"
            >
              Prenota
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
