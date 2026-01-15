import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import spaForest from '../../../assets/spa-forest.svg';

interface SpaProps {
  onOpenBooking: () => void;
}

export const Spa = ({ onOpenBooking }: SpaProps) => {
  const { t } = useLanguage();

  return (
    <section id="spa" className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={spaForest} 
          alt="Spa in the forest" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
        {/* Steam / Light Effect */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 via-transparent to-transparent pointer-events-none"
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl bg-white/10 backdrop-blur-md p-10 md:p-16 border border-white/20 text-center mx-auto md:mx-0"
        >
          <span className="text-white/80 text-xs uppercase tracking-[0.2em] block mb-4">Wellness</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            {t.spa.title}
          </h2>
          <p className="text-white/90 text-lg font-light mb-10 leading-relaxed">
            {t.spa.subtitle}
          </p>
          
          <ul className="text-white/80 space-y-3 mb-12 text-sm uppercase tracking-wider font-light">
            {t.spa.items.map((item) => (
              <li key={item} className="border-b border-white/20 pb-2 last:border-0">
                {item}
              </li>
            ))}
          </ul>

          <Button 
            onClick={onOpenBooking}
            className="bg-white text-[#2C2C2C] hover:bg-stone-200 rounded-none px-8 py-6 uppercase tracking-widest text-xs w-full sm:w-auto"
          >
            {t.spa.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
