import React, { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { ParallaxElement } from '../components/ui/ParallaxElement';
import { GlitchText } from '../components/ui/GlitchText';
import { EvocativeCTA } from '../components/ui/EvocativeCTA';
import { Quote } from 'lucide-react';

const Project: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-night">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-center">
              <GlitchText text="Il Progetto" intensity="low" tag="span" />
            </h1>
            
            <p className="text-lg text-fog/80 text-center">
              Un diario di sopravvivenza dal mondo di Lost Paradise, dove 
              l'astrazione della giovinezza è l'ultima resistenza.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16 md:space-y-24">
              <div className="aspect-video w-full bg-night rusty-border relative overflow-hidden">
                <div className="absolute inset-0 bg-jonnyboy bg-cover bg-center opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-night to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-display mb-4">LOST PARADISE</h2>
                    <p className="text-sm md:text-base text-fog/80 italic max-w-lg mx-auto">
                      Un viaggio tra memoria e futuro
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rusty-border p-6 bg-night/40">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <Quote size={30} className="text-toxic flex-shrink-0" />
                  <p className="text-lg md:text-xl italic text-fog/90 font-display leading-relaxed">
                    In un mondo sempre più chiuso e frammentato, l'arte diventa uno specchio che riflette 
                    il nostro essere collettivo. Lost Paradise è la mia visione di un futuro possibile, 
                    dove ciò che resta sono le tracce dell'innocenza.
                  </p>
                </div>
                <p className="text-right text-sm text-fog/70 mt-4">— Giovanni Motta</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ParallaxElement>
                  <h3 className="text-xl md:text-2xl font-display mb-4">Un Mondo in Rovina</h3>
                  <p className="text-fog/80 mb-4">
                    La gabbia che vediamo in Lost Paradise non è solo fisica, ma mentale. Rappresenta
                    i confini che ci siamo imposti, le barriere che abbiamo eretto tra noi e gli altri.
                    In un paesaggio devastato, le figure dei "furbi" - Cleon, Swaney, Sugar e JonnyBoy -
                    emergono come simboli di una resistenza silenziosa.
                  </p>
                  <p className="text-fog/80">
                    Ogni sagoma racconta una storia di sopravvivenza in un ecosistema collassato.
                    Eppure, nonostante la distruzione, c'è una strana bellezza nei colori vividi
                    che contrastano con la monotonia delle rovine.
                  </p>
                </ParallaxElement>
                
                <ParallaxElement>
                  <h3 className="text-xl md:text-2xl font-display mb-4">JonnyBoy: Un Simbolo di Resistenza</h3>
                  <p className="text-fog/80 mb-4">
                    JonnyBoy rappresenta la parte di noi che rimane intatta nonostante tutto.
                    L'innocenza, la curiosità, il desiderio di esplorare e creare anche quando
                    tutto intorno a noi sembra perduto. È l'interiorità che attraversa un mondo
                    in rovina, portando con sé la speranza di un nuovo inizio.
                  </p>
                  <p className="text-fog/80">
                    La sua figura cartoonesca, con occhi grandi e espressivi, contrasta volutamente
                    con la durezza del mondo che lo circonda, creando una tensione visiva che è
                    al centro del progetto.
                  </p>
                </ParallaxElement>
              </div>
              
              <ParallaxElement>
                <div className="aspect-[21/9] w-full bg-night rusty-border relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80" 
                    style={{ 
                      backgroundImage: "url('/lovable-uploads/160da050-cb2f-42ad-b52b-80a6f7fcd830.png')" 
                    }}
                  ></div>
                </div>
              </ParallaxElement>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ParallaxElement>
                  <h3 className="text-xl md:text-2xl font-display mb-4">La Gabbia Come Specchio</h3>
                  <p className="text-fog/80 mb-4">
                    La gabbia è un elemento cruciale di Lost Paradise. È uno specchio della nostra
                    condizione collettiva, un riflesso delle nostre limitazioni autoimposte.
                    Chi è dentro e chi è fuori? Chi osserva e chi è osservato?
                  </p>
                  <p className="text-fog/80">
                    Guardando la gabbia, ci vediamo riflessi - intrappolati nelle nostre abitudini,
                    nelle nostre paure, nei nostre pregiudizi. E allo stesso tempo, ci rendiamo conto
                    che la chiave per aprirla è sempre stata nelle nostre mani.
                  </p>
                </ParallaxElement>
                
                <ParallaxElement>
                  <h3 className="text-xl md:text-2xl font-display mb-4">Il Paradiso Perduto è Fuori</h3>
                  <p className="text-fog/80 mb-4">
                    Il titolo "Lost Paradise" evoca l'idea di un'età dell'oro ormai perduta, un mondo
                    ideale che si è sgretolato sotto il peso delle nostre azioni collettive.
                    Ma il paradiso non è davvero perduto - è solo nascosto sotto le macerie.
                  </p>
                  <p className="text-fog/80">
                    La frase finale del progetto, "Il Paradiso Perduto? Sì, ma fuori, dove c'è il Bar",
                    è un invito a guardare oltre, a cercare la bellezza e la connessione umana anche
                    nelle condizioni più avverse. Il bar rappresenta lo spazio di condivisione,
                    il luogo dove le storie si intrecciano e le solitudini si dissolvono.
                  </p>
                </ParallaxElement>
              </div>
              
              <ParallaxElement>
                <div className="bg-night/60 border border-rust/30 p-6 md:p-8 rounded-sm">
                  <h3 className="text-xl md:text-2xl font-display mb-4 text-center">Una Collaborazione Significativa</h3>
                  <p className="text-fog/80 text-center">
                    Lost Paradise segna l'inizio della collaborazione ufficiale di Giovanni Motta con la
                    prestigiosa Maddox Gallery di Londra, portando questo messaggio a un pubblico internazionale.
                    Un passo importante che sottolinea la rilevanza universale dei temi esplorati.
                  </p>
                </div>
              </ParallaxElement>
            </div>
            
            <div className="mt-20 text-center">
              <div className="max-w-xl mx-auto flex gap-4 flex-col sm:flex-row justify-center">
                <EvocativeCTA 
                  text="Esplora la Collezione" 
                  to="/collection"
                  className="flex-1 justify-center"
                />
                <EvocativeCTA 
                  text="Prenota le opere" 
                  to="/booking" 
                  className="flex-1 justify-center"
                />
              </div>
              
              <p className="text-fog/60 text-sm italic mt-8">
                "È solo questione di tempo. Il paradiso è perduto, ma la gabbia è aperta."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
