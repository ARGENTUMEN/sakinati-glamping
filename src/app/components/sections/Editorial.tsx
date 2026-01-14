import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

export const Editorial = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#FDFCF8] py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative aspect-[4/5] md:aspect-[3/4]"
          >
            <div className="absolute inset-4 border border-[#C5A059]/30 z-10 translate-x-4 translate-y-4" />
            <img 
              src="https://images.unsplash.com/photo-1764956605289-81e100c82bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGl2ZSUyMGdyb3ZlJTIwdHJElMjBzdW5ueSUyMGRheSUyMG5hdHVyZXxlbnwxfHx8fDE3Njg0MTEyODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Olive Grove"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 z-20 relative"
            />
          </motion.div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-8 relative"
          >
            {/* Organic Particles / Leaves hint */}
            <motion.div 
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 right-10 w-2 h-2 rounded-full bg-[#556B2F]/20 hidden md:block"
            />
            <motion.div 
              animate={{ y: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-[#C5A059]/20 hidden md:block"
            />

            <h2 className="font-serif text-3xl md:text-5xl text-[#2C2C2C] leading-tight">
              {t.editorial.title}
            </h2>
            <div className="w-16 h-[1px] bg-[#C5A059] mx-auto md:mx-0" />
            <p className="text-stone-600 leading-relaxed text-lg font-light max-w-lg mx-auto md:mx-0">
              {t.editorial.text}
            </p>
            <Button 
              variant="link" 
              className="text-[#556B2F] hover:text-[#435425] p-0 uppercase tracking-widest text-xs underline-offset-4 decoration-[1px]"
            >
              {t.editorial.cta}
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
