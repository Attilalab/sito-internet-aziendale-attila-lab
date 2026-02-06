import { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!formRef.current) return;

    try {
      // Aggiungo campi nascosti per EmailJS
      const form = formRef.current;
      
      // Creo input nascosti per i parametri extra
      const timeInput = document.createElement('input');
      timeInput.type = 'hidden';
      timeInput.name = 'time';
      timeInput.value = new Date().toLocaleString('it-IT');
      form.appendChild(timeInput);

      await emailjs.sendForm(
        'service_pop8uae',
        'template_83plbpm',
        form,
        'l6vIjPkz4Hqffr9Os'
      );

      // Rimuovo l'input aggiunto
      form.removeChild(timeInput);

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError(`Errore: ${err.text || 'Riprova più tardi'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name;
    // Mappa i nomi dei campi EmailJS ai nomi dello state
    const stateField = fieldName === 'from_name' ? 'name' : 
                       fieldName === 'reply_to' ? 'email' : 
                       fieldName;
    
    setFormData(prev => ({
      ...prev,
      [stateField]: e.target.value
    }));
  };

  return (
    <section id="contatti" className="relative py-24 lg:py-32 bg-[#0a0c10]">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm text-cyan-400 font-medium tracking-wider uppercase mb-4 block">
              Contatti
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
              <span className="gradient-text">Contattaci</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hai un progetto in mente? Descrivilo in poche righe e ti risponderemo 
              in poche ore per capire insieme come possiamo aiutarti.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Messaggio inviato!
                    </h3>
                    <p className="text-gray-400">
                      Ti risponderemo il prima possibile.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Input nascosti per EmailJS */}
                    <input type="hidden" name="to_email" value="attila.lab@hotmail.com" />
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Nome <span className="text-cyan-400">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="from_name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Il tuo nome"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email <span className="text-cyan-400">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="reply_to"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="la.tua@email.com"
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">
                        Telefono <span className="text-gray-500">(opzionale)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+39 123 456 7890"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Messaggio <span className="text-cyan-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Descrivi il tuo progetto in poche righe..."
                        rows={5}
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 h-auto text-base font-medium text-[#0a0c10] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Invio in corso...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Invia messaggio
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Informazioni di contatto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Email</p>
                      <a 
                        href="mailto:attila.lab@hotmail.com" 
                        className="text-white hover:text-cyan-400 transition-colors"
                      >
                        attila.lab@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Telefono</p>
                      <a 
                        href="tel:+393518011635" 
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        +39 351 801 1635
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Sede</p>
                      <p className="text-white">Italia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="pt-8 border-t border-white/5">
                <h3 className="text-sm font-medium text-gray-500 mb-4">
                  Dati societari
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>Ditta Individuale di Loredana Guida</p>
                  <p>P.IVA: [in attesa di attribuzione]</p>
                  <p>Sede legale: Italia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
