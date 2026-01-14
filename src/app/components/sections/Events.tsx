import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

interface EventsProps {
  onOpenBooking: () => void;
}

export const Events = ({ onOpenBooking }: EventsProps) => {
  const { t } = useLanguage();

  return (
    <section id="events" className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1767127314115-1a4c9a464fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBvdXRkb29yJTIwb2xpdmUlMjB0cmVlJTIwbmF0dXJlfGVufDF8fHx8MTc2ODQxMTI4MXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Wedding Ceremony"
          className="w-full h-full object-cover brightness-[0.8]"
        />
        <div className="absolute inset-0 bg-stone-900/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <span className="text-[#C5A059] text-xs uppercase tracking-[0.2em] block">Celebrations</span>
          <h2 className="font-serif text-4xl md:text-6xl">{t.events.title}</h2>
          <p className="text-lg md:text-xl font-light opacity-90">{t.events.text}</p>
          <Button 
            onClick={onOpenBooking}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-stone-900 rounded-none px-10 py-7 uppercase tracking-widest text-xs bg-transparent transition-all mt-8"
          >
            {t.events.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
