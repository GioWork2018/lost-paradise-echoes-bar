
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
import { sagome } from '@/data/sagomeData';
import { SagomaCard } from './SagomaCard';

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
              {sagome.map((sagoma, index) => (
                <CarouselItem key={sagoma.id} className="md:basis-1/2 lg:basis-1/3">
                  <SagomaCard
                    sagoma={sagoma}
                    isActive={activeSagoma === sagoma.id}
                    onToggle={() => setActiveSagoma(activeSagoma === sagoma.id ? null : sagoma.id)}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-night/60 hover:bg-night text-fog hover:text-toxic border-rust/40" />
            <CarouselNext className="right-2 bg-night/60 hover:bg-night text-fog hover:text-toxic border-rust/40" />
          </Carousel>
        </div>
        
        {activeSagoma && (
          <ParallaxElement className="mt-8 max-w-lg mx-auto p-4 border border-rust/20 bg-night/60 rounded-sm animate-fade-in">
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
