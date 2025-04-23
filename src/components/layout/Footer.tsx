import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-night border-t border-rust/30 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display mb-4">LOST PARADISE</h3>
            <p className="text-sm text-fog/80 mb-4">
              Un progetto che esplora un mondo post-apocalittico
              dove sopravvive solo l'astrazione della giovinezza.
            </p>
            <p className="text-xs text-fog/60 italic">
              Giovanni Motta ©{new Date().getFullYear()}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-mono uppercase tracking-wider mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/collection" className="text-fog/80 hover:text-toxic transition-colors duration-300">
                  La Collezione
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-fog/80 hover:text-toxic transition-colors duration-300">
                  Il Progetto
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-fog/80 hover:text-toxic transition-colors duration-300">
                  Prenota le Opere
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-mono uppercase tracking-wider mb-4">Contatti</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-fog/80">
                <Mail size={16} className="text-rust" />
                <a href="mailto:info@giovannimotta.it" className="hover:text-toxic transition-colors duration-300">
                  info@giovannimotta.it
                </a>
              </li>
              <li className="flex items-center gap-2 text-fog/80">
                <Instagram size={16} className="text-rust" />
                <a 
                  href="https://instagram.com/mottagiovanni" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-toxic transition-colors duration-300"
                >
                  @mottagiovanni
                </a>
              </li>
              <li className="flex items-start gap-2 text-fog/80">
                <MapPin size={16} className="text-rust mt-1" />
                <span>ASSAB ONE, Via Privata Assab, 1, Milano</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-fog/10 text-center">
          <p className="text-fog/60 text-sm">
            "Il Paradiso Perduto? Sì, ma fuori, dove c'è il Bar."
          </p>
        </div>
      </div>
    </footer>
  );
};
