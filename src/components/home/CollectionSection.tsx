
import React from 'react';
import { ParallaxElement } from '../ui/ParallaxElement';
import { EvocativeCTA } from '../ui/EvocativeCTA';

interface ArtifactProps {
  title: string;
  description: string;
  price: string;
  image: string;
  details?: string[];
  className?: string;
}

const Artifact: React.FC<ArtifactProps> = ({ 
  title, 
  description, 
  price, 
  image, 
  details = [], 
  className = '' 
}) => {
  return (
    <div className={`artifact-card ${className}`}>
      <div className="p-4 md:p-6 flex flex-col h-full">
        <div className="rusty-border mb-4">
          <div className="aspect-square bg-night/60 relative overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h3 className="text-xl font-display mb-2">{title}</h3>
        
        <p className="text-fog/80 text-sm mb-4">{description}</p>
        
        {details.length > 0 && (
          <ul className="space-y-1 text-xs text-fog/70 mb-4">
            {details.map((detail, index) => (
              <li key={index} className="pl-3 border-l border-rust/30">
                {detail}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <div className="font-mono text-lg text-toxic">{price}</div>
            <div className="text-xs text-fog/60 italic">Pezzo unico</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CollectionSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-night to-ash">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">La Collezione</h2>
          <p className="text-fog/80 max-w-2xl mx-auto">
            Opere che raccontano un mondo al limite tra distruzione e rinascita, 
            reperti archeologici di un futuro che potrebbe essere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ParallaxElement speed={0.05}>
            <Artifact 
              title="15 Sagome Originali"
              description="Pezzi unici dipinti a mano in acrilico, con altezze variabili."
              price="€12.000"
              image="/lovable-uploads/f0fa3fd8-d248-494e-8fd8-1204771b4569.png"
              details={["Altezze da 120 a 150 cm", "Simbolo dell'interiorità", "Acrilico su legno"]}
            />
          </ParallaxElement>
          
          <ParallaxElement speed={0.1}>
            <Artifact 
              title="15 Stampe Artistiche"
              description="Stampe in alta qualità incorniciate artigianalmente con vetro museale."
              price="€3.000"
              image="/lovable-uploads/4f14bea5-85e8-4be7-a551-6a66bcf48cb2.png"
              details={["50 x 70 cm", "Carta Archer 320gr", "Stampa flottante"]}
            />
          </ParallaxElement>
          
          <ParallaxElement speed={0.07}>
            <Artifact 
              title="Lost Paradise"
              description="Dipinto Acrilico su Tela, manifesto visivo del progetto."
              price="Su richiesta"
              image="/lovable-uploads/68ce6b01-7363-4a15-a495-2b42c8a150ab.png"
              details={["100 x 150 cm", "Collaborazione con Maddox Gallery", "Opera principale"]}
            />
          </ParallaxElement>
          
          <ParallaxElement speed={0.12}>
            <Artifact 
              title="Fresh Start Day"
              description="Toy da Collezione in Resina, edizione limitata firmata e autenticata."
              price="€340"
              image="/lovable-uploads/af2a387a-4dab-4467-843e-8faca8c4305d.png"
              details={["Altezza 23 cm", "Edizione limitata di 99 pezzi", "Box design esclusivo"]}
            />
          </ParallaxElement>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <EvocativeCTA 
            text="Raccogli il frammento perduto" 
            hoverText="Contatta l'artista" 
            to="https://giovannimotta.it/contacts" 
            external={true}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
