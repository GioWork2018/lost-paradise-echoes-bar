
import { Check } from 'lucide-react';

export const BookingSuccess = () => {
  return (
    <div className="max-w-xl mx-auto bg-night/60 border border-toxic/30 p-8 rounded-sm animate-fade-in">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-toxic/20 mb-4">
          <Check className="text-toxic" size={24} />
        </div>
        <h2 className="text-2xl font-display mb-4">Prenotazione Registrata</h2>
        <p className="text-fog/80 mb-6">
          Grazie per il tuo interesse in Lost Paradise. 
          Abbiamo ricevuto la tua richiesta e ti contatteremo presto 
          all'indirizzo email fornito con i prossimi passi.
        </p>
        <p className="text-sm text-fog/60 italic">
          "È solo questione di tempo prima che il paradiso perduto diventi tuo."
        </p>
      </div>
    </div>
  );
};
