import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../ui/button';
import heroImage from 'figma:asset/89fe0be82d091d7f0bf1a2d2ff4772e4af7b6c24.png';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero = ({ onOpenBooking }: HeroProps) => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay for text readability */}
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage} 
          alt="Sakinati Night Domes" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white relative mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide leading-tight"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light tracking-wider mb-10 opacity-90 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={onOpenBooking}
              className="bg-[#C5A059] hover:bg-[#b08d48] text-white px-8 py-6 rounded-none text-sm tracking-[0.2em] uppercase w-full sm:w-auto"
            >
              {t.hero.ctaPrimary}
            </Button>
          </motion.div>
          
          <Button 
            variant="outline"
            onClick={onOpenBooking}
            className="border-white text-white hover:bg-white/10 hover:text-white px-8 py-6 rounded-none text-sm tracking-[0.2em] uppercase w-full sm:w-auto bg-transparent"
          >
            {t.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30" />
      </motion.div>
    </section>
  );
};
