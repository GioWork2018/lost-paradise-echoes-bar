
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { GlitchText } from './GlitchText';
import { Mail } from 'lucide-react';

export const EmailCapture = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Messaggio ricevuto",
      description: "Ti contatteremo presto con informazioni esclusive.",
    });
    setEmail('');
  };

  return (
    <div className="max-w-xl mx-auto bg-night/60 border border-rust/30 p-8 rounded-sm">
      <h3 className="text-xl font-display mb-6 text-center">
        <GlitchText
          text="Entra nel Paradiso Perduto"
          intensity="high"
        />
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email"
            className="w-full px-4 py-3 bg-night/80 border border-rust/30 rounded-sm text-fog 
                     placeholder:text-fog/50 focus:outline-none focus:border-toxic transition-colors"
            required
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-toxic/50" />
        </div>
        
        <button
          type="submit"
          className="w-full evocative-cta group justify-center text-base"
        >
          È solo questione di tempo
        </button>
      </form>
      
      <p className="text-xs text-fog/60 mt-6 text-center">
        Il Paradiso Perduto? Sì, ma fuori, dove c'è il Bar.
      </p>
    </div>
  );
};
