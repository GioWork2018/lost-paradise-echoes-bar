
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ParallaxElement } from '../ui/ParallaxElement';
import { GlitchText } from '../ui/GlitchText';

interface Sagoma {
  id: string;
  name: string;
  description: string;
  color: string;
}

const sagome: Sagoma[] = [
  {
    id: "cleon",
    name: "Cleon",
    description: "Il guardiano della memoria collettiva, intrappolato tra passato e futuro.",
    color: "bg-rust/80"
  },
  {
    id: "kyashan",
    name: "Kyashan",
    description: "Simbolo della tecnologia ribelle, cerca un'anima in un corpo meccanico.",
    color: "bg-toxic/80"
  },
  {
    id: "luffy",
    name: "Luffy",
    description: "Esploratore dell'ignoto, porta con sé la leggerezza dell'innocenza.",
    color: "bg-acid/70"
  },
  {
    id: "jonnyboy",
    name: "JonnyBoy",
    description: "Il prototipo dell'individualità pura, resiste all'assimilazione.",
    color: "bg-white/40"
  },
  {
    id: "momi",
    name: "Momi",
    description: "Custode delle emozioni perdute, raccoglie frammenti di umanità.",
    color: "bg-dust/70"
  },
  {
    id: "swaney",
    name: "Swaney",
    description: "Artista del caos, trasforma la distruzione in bellezza fugace.",
    color: "bg-toxic/60"
  },
  {
    id: "sugar",
    name: "Sugar",
    description: "Depositaria della dolcezza in un mondo amaro, simbolo di resistenza.",
    color: "bg-acid/50"
  }
];

export const SagomeCarousel: React.FC = () => {
  const [activeSagoma, setActiveSagoma] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-ash to-night">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            <GlitchText text="Le Sagome" intensity="low" tag="span" />
          </h2>
          <p className="text-fog/80 max-w-2xl mx-auto">
            Frammenti di giovinezza cristallizzati nel tempo, ogni sagoma racconta una storia diversa dello stesso universo perduto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {sagome.map((sagoma) => (
                <CarouselItem key={sagoma.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div 
                      className={`aspect-[2/3] rounded-sm p-6 flex flex-col justify-end border border-fog/20 bg-night/80 hover:border-toxic/50 transition-all cursor-pointer ${
                        activeSagoma === sagoma.id ? "border-toxic" : ""
                      }`}
                      onClick={() => setActiveSagoma(activeSagoma === sagoma.id ? null : sagoma.id)}
                    >
                      <div className="flex-1 flex items-center justify-center relative">
                        <div 
                          className={`${sagoma.color} h-36 w-12 md:h-40 md:w-14 animate-float`}
                          style={{
                            maskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 60\"><path d=\"M12,0 C16,15 24,20 24,35 C24,48 18,60 12,60 C6,60 0,48 0,35 C0,20 8,15 12,0 Z\" /></svg>')",
                            WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 60\"><path d=\"M12,0 C16,15 24,20 24,35 C24,48 18,60 12,60 C6,60 0,48 0,35 C0,20 8,15 12,0 Z\" /></svg>')",
                          }}
                        />
                        {activeSagoma === sagoma.id && (
                          <div className="absolute inset-0 bg-night/50 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4">
                            <p className="text-xs text-fog/90 text-center">{sagoma.description}</p>
                          </div>
                        )}
                      </div>
                      
                      <h3 className="font-display text-xl mt-4 text-center">{sagoma.name}</h3>
                      <p className="text-xs text-fog/60 mt-1 text-center font-mono">{activeSagoma === sagoma.id ? "Clicca per chiudere" : "Clicca per scoprire"}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-night/60 hover:bg-night text-fog hover:text-toxic border-rust/40" />
            <CarouselNext className="right-2 bg-night/60 hover:bg-night text-fog hover:text-toxic border-rust/40" />
          </Carousel>
        </div>
        
        {activeSagoma && (
          <ParallaxElement className="mt-8 max-w-lg mx-auto p-4 border border-rust/20 bg-night/60 rounded-sm animate-fade-in text-center">
            <p className="text-sm text-fog/90 italic">
              "{sagome.find(s => s.id === activeSagoma)?.name} incarna la fragilità e la resilienza dell'anima umana. Una figura che sfida il tempo, un testimone muto del nostro passaggio."
            </p>
            <p className="text-right text-xs text-fog/60 mt-2">— Giovanni Motta</p>
          </ParallaxElement>
        )}
      </div>
    </section>
  );
};
