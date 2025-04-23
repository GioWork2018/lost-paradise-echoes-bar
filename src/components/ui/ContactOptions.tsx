
import React from 'react';
import { Calendar, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EvocativeCTA } from './EvocativeCTA';

export const ContactOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card className="bg-night/60 border-rust/30 hover:border-toxic/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-6 w-6 text-toxic" />
            <CardTitle className="font-display">Prenota le Opere</CardTitle>
          </div>
          <CardDescription className="text-fog/80">
            Assicurati un pezzo di questo mondo effimero prima della sua scomparsa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-fog/80 mb-6">
            Prenota in anticipo le opere della collezione Lost Paradise 
            e approfitta dello sconto del 15% riservato alle prenotazioni anticipate.
          </p>
          <EvocativeCTA 
            text="PRENOTA LE OPERE" 
            to="https://giovannimotta.it/contacts"
            variant="threshold"
            external={true}
            hoverText="PRIMA DELLA FINE"
          />
        </CardContent>
      </Card>

      <Card className="bg-night/60 border-rust/30 hover:border-toxic/50 transition-colors">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-6 w-6 text-toxic" />
            <CardTitle className="font-display">Evento Milano</CardTitle>
          </div>
          <CardDescription className="text-fog/80">
            Partecipa alla presentazione esclusiva presso ASSAB ONE
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-fog/80 mb-6">
            Vieni a scoprire Lost Paradise dal vivo l'8 Maggio 2025. 
            Un evento unico dove l'arte incontra la distopia.
          </p>
          <EvocativeCTA 
            text="PARTECIPA ALL'EVENTO" 
            to="https://lu.ma/ftvdm5dt"
            variant="resist"
            external={true}
            hoverText="UNISCITI A NOI"
          />
        </CardContent>
      </Card>
    </div>
  );
};
