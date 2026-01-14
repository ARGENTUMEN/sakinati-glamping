import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

interface GastronomyProps {
  onOpenBooking: () => void;
}

export const Gastronomy = ({ onOpenBooking }: GastronomyProps) => {
  const { t } = useLanguage();

  return (
    <section id="gastronomy" className="bg-stone-50 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-right space-y-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl text-[#2C2C2C] leading-tight">
              {t.gastronomy.title}
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto md:ml-auto md:mr-0" />
            <p className="text-stone-600 leading-relaxed text-lg font-light max-w-lg mx-auto md:ml-auto md:mr-0">
              {t.gastronomy.text}
            </p>
            <Button 
              onClick={onOpenBooking}
              className="bg-[#2C2C2C] hover:bg-black text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs"
            >
              {t.gastronomy.cta}
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
             <div className="absolute -inset-4 bg-[#C5A059]/10 z-0 -translate-x-4 translate-y-4 hidden md:block" />
             <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1671691302268-e316f81c7b3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGx1eHVyeSUyMGRpbm5lciUyMG91dGRvb3IlMjBjYW5kbGUlMjBsaWdodHxlbnwxfHx8fDE3Njg0MTEyODF8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Romantic Dinner"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
