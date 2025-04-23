import React, { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { ParallaxElement } from '../components/ui/ParallaxElement';
import { GlitchText } from '../components/ui/GlitchText';
import { EvocativeCTA } from '../components/ui/EvocativeCTA';
import { BookOpen, Info } from 'lucide-react';

const Collection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-night">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-center">
              <GlitchText text="La Collezione" intensity="low" tag="span" />
            </h1>
            
            <p className="text-lg text-fog/80 text-center max-w-2xl mx-auto">
              Esplora i reperti archeologici di un futuro che potrebbe essere, 
              opere che raccontano la resistenza della giovinezza in un mondo collassato.
            </p>
          </div>
          
          <div className="space-y-20 md:space-y-32">
            {/* Sagome */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ParallaxElement>
                <div className="aspect-square max-w-md mx-auto rusty-border">
                  <img 
                    src="/lovable-uploads/f0fa3fd8-d248-494e-8fd8-1204771b4569.png" 
                    alt="Le 15 Sagome Originali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ParallaxElement>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-4">15 Sagome Originali in Legno</h2>
                
                <p className="text-fog/80 mb-6">
                  Ognuna è un pezzo unico, dipinto a mano in acrilico, con altezze variabili da 120 cm a 150 cm.
                  Le sagome rappresentano JonnyBoy, simbolo dell'interiorità che attraversa un mondo collassato.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Acrilico su legno tagliato a mano
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Altezze variabili da 120 cm a 150 cm
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Ogni silhouette ha un nome e una storia unica
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="font-mono text-xl text-toxic">€12.000 cad.</div>
                  <EvocativeCTA 
                    text="Prenota ora" 
                    to="/booking"
                  />
                </div>
              </div>
            </div>
            
            {/* Stampe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-display mb-4">15 Stampe Artistiche</h2>
                
                <p className="text-fog/80 mb-6">
                  Ognuna è un pezzo unico, stampata in alta qualità e incorniciata artigianalmente 
                  con vetro museale anti-riflesso. La stampa flottante su carta Archer 320 gr 
                  valorizza ogni dettaglio dell'opera.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Formato 50 x 70 cm
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Stampa flottante (sospesa) su carta Archer 320 gr
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Cornice artigianale con vetro museale anti-riflesso
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="font-mono text-xl text-toxic">€3.000 cad.</div>
                  <EvocativeCTA 
                    text="Prenota ora" 
                    to="/booking"
                  />
                </div>
              </div>
              
              <ParallaxElement className="order-1 md:order-2">
                <div className="aspect-square max-w-md mx-auto rusty-border">
                  <img 
                    src="/lovable-uploads/4f14bea5-85e8-4be7-a551-6a66bcf48cb2.png"
                    alt="Le 15 Stampe Artistiche"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ParallaxElement>
            </div>
            
            {/* Lost Paradise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ParallaxElement>
                <div className="aspect-[2/3] max-w-md mx-auto rusty-border">
                  <img 
                    src="/lovable-uploads/68ce6b01-7363-4a15-a495-2b42c8a150ab.png" 
                    alt="Lost Paradise"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ParallaxElement>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-display mb-4">"Lost Paradise"</h2>
                
                <p className="text-fog/80 mb-6">
                  Dipinto Acrilico su Tela - Opera su tela 100 x 150 cm che rappresenta il manifesto 
                  visivo del progetto e segna l'inizio della collaborazione di Giovanni Motta 
                  con la prestigiosa Maddox Gallery di Londra.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Dimensioni: 100 x 150 cm
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Manifesto visivo del progetto
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Collaborazione con Maddox Gallery di Londra
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="font-mono text-xl text-toxic">Prezzo su richiesta</div>
                  <EvocativeCTA 
                    text="Contatta per info" 
                    to="/booking"
                  />
                </div>
              </div>
            </div>
            
            {/* Toy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-display mb-4">Toy da Collezione in Resina – "Fresh start day"</h2>
                
                <p className="text-fog/80 mb-6">
                  Altezza 23 cm, edizione limitata di 99 pezzi, confezionato in un box dal design
                  esclusivo. Firmato e autenticato dall'artista, rappresenta l'essenza di JonnyBoy
                  in forma tridimensionale.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">1</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Altezza: 23 cm
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">2</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Edizione limitata di 99 pezzi
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-toxic/20 flex items-center justify-center mt-0.5">
                      <span className="text-xs">3</span>
                    </div>
                    <p className="text-sm text-fog/80">
                      Box design esclusivo, firmato e autenticato
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="font-mono text-xl text-toxic">€340</div>
                  <EvocativeCTA 
                    text="Contatta l'artista" 
                    to="https://giovannimotta.it/contacts"
                    external={true}
                  />
                </div>
              </div>
              
              <ParallaxElement className="order-1 md:order-2">
                <div className="aspect-square max-w-md mx-auto bg-jonnyboy bg-cover bg-center rusty-border"></div>
              </ParallaxElement>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="max-w-xl mx-auto flex gap-4 flex-col sm:flex-row justify-center">
              <EvocativeCTA 
                text="Scopri il progetto" 
                to="/project"
                className="flex-1 justify-center"
              />
              <EvocativeCTA 
                text="Contatta l'artista" 
                to="https://giovannimotta.it/contacts" 
                external={true}
                className="flex-1 justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
