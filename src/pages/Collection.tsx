
import React, { useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { CollectionHeader } from '../components/collection/CollectionHeader';
import { CollectionItem } from '../components/collection/CollectionItem';
import { EvocativeCTA } from '../components/ui/EvocativeCTA';

const Collection: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-night">
        <div className="container mx-auto px-4">
          <CollectionHeader />
          
          <div className="space-y-20 md:space-y-32">
            <CollectionItem 
              title="15 Sagome Originali in Legno"
              description="Ognuna è un pezzo unico, dipinto a mano in acrilico, con altezze variabili da 120 cm a 150 cm.
                Le sagome rappresentano JonnyBoy, simbolo dell'interiorità che attraversa un mondo collassato."
              image="/lovable-uploads/f0fa3fd8-d248-494e-8fd8-1204771b4569.png"
              price="€12.000 cad."
              details={[
                "Acrilico su legno tagliato a mano",
                "Altezze variabili da 120 cm a 150 cm",
                "Ogni silhouette ha un nome e una storia unica"
              ]}
            />
            
            <CollectionItem 
              title="15 Stampe Artistiche"
              description="Ognuna è un pezzo unico, stampata in alta qualità e incorniciata artigianalmente 
                con vetro museale anti-riflesso. La stampa flottante su carta Archer 320 gr 
                valorizza ogni dettaglio dell'opera."
              image="/lovable-uploads/4f14bea5-85e8-4be7-a551-6a66bcf48cb2.png"
              price="€3.000 cad."
              details={[
                "Formato 50 x 70 cm",
                "Stampa flottante (sospesa) su carta Archer 320 gr",
                "Cornice artigianale con vetro museale anti-riflesso"
              ]}
              imagePosition="right"
            />
            
            <CollectionItem 
              title='"Lost Paradise"'
              description="Dipinto Acrilico su Tela - Opera su tela 100 x 150 cm che rappresenta il manifesto 
                visivo del progetto e segna l'inizio della collaborazione di Giovanni Motta 
                con la prestigiosa Maddox Gallery di Londra."
              image="/lovable-uploads/68ce6b01-7363-4a15-a495-2b42c8a150ab.png"
              price="Prezzo su richiesta"
              details={[
                "Dimensioni: 100 x 150 cm",
                "Manifesto visivo del progetto",
                "Collaborazione con Maddox Gallery di Londra"
              ]}
            />
            
            <CollectionItem 
              title='Toy da Collezione in Resina – "Fresh start day"'
              description="Altezza 23 cm, edizione limitata di 99 pezzi, confezionato in un box dal design
                esclusivo. Firmato e autenticato dall'artista, rappresenta l'essenza di JonnyBoy
                in forma tridimensionale."
              image="/lovable-uploads/af2a387a-4dab-4467-843e-8faca8c4305d.png"
              price="€340"
              details={[
                "Altezza: 23 cm",
                "Edizione limitata di 99 pezzi",
                "Box design esclusivo, firmato e autenticato"
              ]}
              imagePosition="right"
            />
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
