
import React from 'react';
import { ContactOptions } from '../ui/ContactOptions';

export const BookingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-ash to-night">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display mb-4">Partecipa al Progetto</h2>
          <p className="text-fog/80">
            Scegli come vuoi far parte di Lost Paradise: prenota le opere o partecipa all'evento di Milano.
          </p>
        </div>
        <ContactOptions />
      </div>
    </section>
  );
};
