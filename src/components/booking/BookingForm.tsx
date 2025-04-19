
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { BookingFields } from './BookingFields';
import { BookingInterests } from './BookingInterests';

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
          <BookingFields 
            name={name}
            email={email}
            message={message}
            onNameChange={setName}
            onEmailChange={setEmail}
            onMessageChange={setMessage}
          />
          
          <BookingInterests 
            interest={interest}
            onInterestChange={handleInterestChange}
          />
          
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
