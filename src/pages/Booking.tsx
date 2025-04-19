
import React, { useState, useEffect } from 'react';
import { Layout } from '../components/layout/Layout';
import { ParallaxElement } from '../components/ui/ParallaxElement';
import { GlitchText } from '../components/ui/GlitchText';
import { Check, Clock, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Booking: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [interest, setInterest] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    
    // Simulate form submission
    setSubmitted(true);
    toast({
      title: "Richiesta inviata",
      description: "La tua prenotazione è stata registrata. Riceverai presto una risposta.",
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-20 lg:pt-32 lg:pb-32 bg-night">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-center">
              <GlitchText text="Prenota Ora" intensity="low" tag="span" />
            </h1>
            
            <p className="text-lg text-fog/80 text-center">
              Assicurati le opere prima della fine del tempo.
              Prenota ora e ricevi uno sconto speciale del 15%.
            </p>
          </div>
          
          {submitted ? (
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
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
