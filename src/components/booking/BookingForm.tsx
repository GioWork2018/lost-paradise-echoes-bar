
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  onSubmit: () => void;
}

export const BookingForm = ({ onSubmit }: BookingFormProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [interest, setInterest] = useState<string[]>([]);

  const handleInterestChange = (item: string) => {
    if (interest.includes(item)) {
      setInterest(interest.filter(i => i !== item));
    } else {
      setInterest([...interest, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !name.trim()) {
      toast({
        title: "Errore",
        description: "Inserisci nome e email per continuare",
        variant: "destructive"
      });
      return;
    }
    
    onSubmit();
    toast({
      title: "Richiesta inviata",
      description: "La tua prenotazione è stata registrata. Riceverai presto una risposta.",
    });
  };

  return (
    <div className="md:col-span-3">
      <div className="bg-night/60 border border-rust/30 p-6 md:p-8 rounded-sm">
        <h2 className="text-2xl font-display mb-6">Modulo di Prenotazione</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-mono text-fog/80 mb-2">
              NOME COMPLETO
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-night border border-fog/30 rounded-sm text-white focus:outline-none focus:border-toxic"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-mono text-fog/80 mb-2">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-night border border-fog/30 rounded-sm text-white focus:outline-none focus:border-toxic"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-mono text-fog/80 mb-2">
              OPERE DI INTERESSE
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="sagome"
                  checked={interest.includes('sagome')}
                  onChange={() => handleInterestChange('sagome')}
                  className="w-4 h-4 bg-transparent border border-fog/30 rounded-sm focus:outline-none focus:border-toxic mr-3"
                />
                <label htmlFor="sagome" className="text-sm text-fog/90">
                  15 Sagome Originali in Legno (€12.000 cad.)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="stampe"
                  checked={interest.includes('stampe')}
                  onChange={() => handleInterestChange('stampe')}
                  className="w-4 h-4 bg-transparent border border-fog/30 rounded-sm focus:outline-none focus:border-toxic mr-3"
                />
                <label htmlFor="stampe" className="text-sm text-fog/90">
                  15 Stampe Artistiche (€3.000 cad.)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tela"
                  checked={interest.includes('tela')}
                  onChange={() => handleInterestChange('tela')}
                  className="w-4 h-4 bg-transparent border border-fog/30 rounded-sm focus:outline-none focus:border-toxic mr-3"
                />
                <label htmlFor="tela" className="text-sm text-fog/90">
                  "Lost Paradise" - Dipinto su Tela (Prezzo su richiesta)
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="toy"
                  checked={interest.includes('toy')}
                  onChange={() => handleInterestChange('toy')}
                  className="w-4 h-4 bg-transparent border border-fog/30 rounded-sm focus:outline-none focus:border-toxic mr-3"
                />
                <label htmlFor="toy" className="text-sm text-fog/90">
                  Toy "Fresh Start Day" (€340)
                </label>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-mono text-fog/80 mb-2">
              MESSAGGIO (OPZIONALE)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 bg-night border border-fog/30 rounded-sm text-white focus:outline-none focus:border-toxic"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="evocative-cta w-full justify-center text-base font-mono tracking-wider"
          >
            PRENOTA PRIMA DELLA FINE
          </button>
          
          <p className="text-xs text-fog/60 text-center">
            Inviando questo modulo, verrai contattato all'indirizzo email fornito
            per completare la prenotazione e ricevere informazioni sulle opere.
          </p>
        </form>
      </div>
    </div>
  );
};
