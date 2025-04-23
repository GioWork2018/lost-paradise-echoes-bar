
import React from 'react';
import { EvocativeCTA } from '../ui/EvocativeCTA';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 lg:pt-24 lg:pb-32 bg-night relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">Location</h2>
          <p className="text-fog/80 text-center mb-12">
            Vieni a scoprire Lost Paradise dal vivo, dove l'esperienza diventa tangibile.
          </p>
          
          <div className="bg-night/60 border border-rust/30 rounded-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:flex-1">
                  <h3 className="text-2xl font-display mb-4">ASSAB ONE</h3>
                  <p className="text-sm text-fog/80 mb-4">
                    Via Privata Assab, 1<br />
                    20132 Milano, Italia
                  </p>
                  
                  <p className="text-sm text-fog/80">
                    Lo spazio ASSAB ONE di Milano ospiterà la presentazione ufficiale del progetto, 
                    con un evento esclusivo che permetterà di immergersi completamente nell'atmosfera 
                    di Lost Paradise.
                  </p>
                </div>
                
                <div className="md:w-1/3">
                  <div className="rusty-border p-4 bg-night/80">
                    <h4 className="text-lg font-mono mb-2">Partecipa all'evento</h4>
                    <p className="text-xs text-fog/80 mb-4">
                      L'accesso all'evento è gratuito ma su registrazione. Iscriviti tramite il link per assicurarti un posto.
                    </p>
                    <EvocativeCTA 
                      text="Registrati su Lu.ma" 
                      to="https://lu.ma/ftvdm5dt" 
                      className="text-sm w-full justify-center"
                      external={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 border-t border-rust/20 pt-12 text-center">
            <h3 className="text-2xl font-display mb-4">
              "Il Paradiso Perduto? Sì, ma fuori, dove c'è il Bar."
            </h3>
            <p className="text-sm italic text-fog/60">— Giovanni Motta</p>
          </div>
        </div>
      </div>
    </section>
  );
};
