
import React from 'react';
import { ParallaxElement } from '../ui/ParallaxElement';
import { GlitchText } from '../ui/GlitchText';
import { EvocativeCTA } from '../ui/EvocativeCTA';

export const ProjectSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-night">
      {/* Visual noise background */}
      <div className="absolute inset-0 opacity-20 distressed-bg"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-10 w-96 h-96 bg-rust opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 w-80 h-80 bg-toxic opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
              <GlitchText text="Il Progetto" intensity="low" tag="span" />
            </h2>
            
            <ParallaxElement>
              <p className="text-lg md:text-xl italic text-fog/80 mb-8 font-display text-center">
                "Un nuovo progetto che esplora un mondo post-apocalittico dove sopravvive solo l'astrazione della giovinezza."
              </p>
            </ParallaxElement>
            
            <div className="space-y-6 md:space-y-8 text-fog/90">
              <ParallaxElement>
                <div className="rusty-border p-4">
                  <p className="text-sm md:text-base leading-relaxed">
                    Il pittore e artista digitale Giovanni Motta presenta <strong>Lost Paradise</strong>, una collezione potente 
                    e immersiva composta da 15 sagome in legno dipinte a mano, 15 stampe artistiche incorniciate artigianalmente, 
                    un toy in resina da collezione e un grande dipinto su tela che segna l'inizio della collaborazione ufficiale 
                    con la Maddox Gallery di Londra.
                  </p>
                </div>
              </ParallaxElement>
              
              <ParallaxElement>
                <p className="text-sm md:text-base leading-relaxed">
                  Attraverso la figura di JonnyBoy, suo alter ego e simbolo dell'interiorità che resiste, Motta ci porta 
                  in un viaggio emotivo tra macerie e rinascita. La gabbia che vediamo è uno specchio della nostra condizione, 
                  un confine tra chi è fuori e chi è dentro, tra chi osserva e chi è osservato.
                </p>
              </ParallaxElement>
              
              <ParallaxElement className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="aspect-square max-w-xs mx-auto bg-jonnyboy bg-cover bg-center bg-no-repeat rusty-border"></div>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm md:text-base leading-relaxed">
                    In questo mondo distrutto, dove il tempo stesso sembra essersi fermato, i colori acidi e le forme pure 
                    di JonnyBoy rompono la monotonia della desolazione. Come un archeologo del futuro, Motta disegna reperti 
                    che raccontano la nostra epoca e ne prevedono il possibile esito.
                  </p>
                  
                  <p className="text-sm md:text-base leading-relaxed mt-4">
                    Non è una distopia, è un invito alla riflessione: quanto siamo disposti a cedere prima di reagire? 
                    Cosa resta di noi quando tutto ciò che conosciamo svanisce?
                  </p>
                </div>
              </ParallaxElement>
            </div>
          </div>
          
          <div className="text-center">
            <EvocativeCTA 
              text="Varca la soglia" 
              to="/project" 
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
