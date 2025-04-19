
import { Clock, Mail } from 'lucide-react';
import { ParallaxElement } from '../ui/ParallaxElement';

export const BookingInfo = () => {
  return (
    <div className="md:col-span-2 space-y-8">
      <ParallaxElement>
        <div className="bg-night/60 border border-rust/30 p-6 rounded-sm">
          <h3 className="text-xl font-display mb-4">Disponibilità</h3>
          <p className="text-sm text-fog/80 mb-4">
            Le opere saranno disponibili dal <strong>7 al 10 maggio 2025</strong> esclusivamente sul sito ufficiale.
          </p>
          <p className="text-sm text-fog/80">
            È previsto uno <strong>sconto del 15%</strong> per chi prenota le opere prima dell'apertura ufficiale della vendita.
          </p>
        </div>
      </ParallaxElement>
      
      <ParallaxElement>
        <div className="bg-night/60 border border-rust/30 p-6 rounded-sm">
          <h3 className="text-xl font-display mb-4">Spedizione</h3>
          <p className="text-sm text-fog/80">
            Le opere saranno spedite entro la fine del mese di Giugno 2025.
            Per ulteriori dettagli sulla consegna o per ritiri in loco, contattaci direttamente.
          </p>
          
          <div className="flex items-center gap-2 mt-4 text-sm text-toxic">
            <Mail size={16} />
            <span>info@giovannimotta.it</span>
          </div>
        </div>
      </ParallaxElement>
      
      <ParallaxElement>
        <div className="bg-night/60 border border-rust/30 p-6 rounded-sm">
          <div className="flex items-start gap-3">
            <Clock size={24} className="text-toxic flex-shrink-0 mt-1" />
            <p className="text-sm text-fog/80 italic">
              "È solo questione di tempo. Prenota ora per assicurarti un pezzo di questo mondo effimero."
            </p>
          </div>
        </div>
      </ParallaxElement>
    </div>
  );
};
