
import React from 'react';
import { CalendarDays, Clock, Percent } from 'lucide-react';
import { EvocativeCTA } from '../ui/EvocativeCTA';

export const BookingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-ash to-night">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">Prenota Ora</h2>
          <p className="text-fog/80 text-center mb-12">
            Assicurati le opere prima che svaniscano nel tempo.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-night/60 border border-rust/30 p-6 rounded-sm">
              <div className="text-toxic mb-4">
                <CalendarDays size={32} />
              </div>
              <h3 className="text-xl font-display mb-2">Disponibilità</h3>
              <p className="text-sm text-fog/80">
                Le opere saranno disponibili dal <strong>7 al 10 maggio 2025</strong> esclusivamente sul sito ufficiale.
              </p>
            </div>
            
            <div className="bg-night/60 border border-rust/30 p-6 rounded-sm">
              <div className="text-toxic mb-4">
                <Percent size={32} />
              </div>
              <h3 className="text-xl font-display mb-2">Prevendita</h3>
              <p className="text-sm text-fog/80">
                Previsto uno <strong>sconto del 15%</strong> per chi prenota le opere prima dell'apertura ufficiale della vendita.
              </p>
            </div>
            
            <div className="bg-night/60 border border-rust/30 p-6 rounded-sm">
              <div className="text-toxic mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-display mb-2">Spedizione</h3>
              <p className="text-sm text-fog/80">
                Le opere saranno spedite entro <strong>la fine del mese di Giugno 2025</strong>.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-night/80 border border-rust/30 p-6 md:p-8 rounded-sm max-w-2xl mx-auto">
              <h3 className="text-xl font-display mb-4">Per prenotare:</h3>
              <p className="text-lg font-mono text-toxic mb-6">info@giovannimotta.it</p>
              <EvocativeCTA 
                text="Prenota prima della fine" 
                to="/booking" 
                className="mx-auto"
              />
              <p className="text-xs text-fog/60 mt-6">
                È solo questione di tempo. Prenota ora per assicurarti un pezzo di questo mondo effimero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
