import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';

interface DomesProps {
  onOpenBooking: (domeName?: string) => void;
}

const domeImages = [
  "https://images.unsplash.com/photo-1751834296374-ece431ad6618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBleHRlcmlvciUyMHN1bm55JTIwZGF5JTIwb2xpdmUlMjB0cmVlc3xlbnwxfHx8fDE3Njg0MTE0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1762255121620-3ca4c551404c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBpbnRlcmlvciUyMGx1eHVyeSUyMGJlZHJvb218ZW58MXx8fHwxNzY4NDExNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1656443876192-22c578744a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtcGluZyUyMGRvbWUlMjBkZWNrJTIwaG90JTIwdHViJTIwdmlld3xlbnwxfHx8fDE3Njg0MTE0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

const DomeCard = ({ dome, index, onOpenBooking }: { dome: any, index: number, onOpenBooking: any }) => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Create a "living shadow" effect by moving the card slightly and changing shadow spread
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, 0]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Default
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", // Lifted
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"  // Back down
    ]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, boxShadow: shadow }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group h-full bg-white transition-all duration-500"
    >
      <Card className="border-none shadow-none bg-transparent overflow-hidden rounded-none h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={domeImages[index]} 
            alt={dome.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-[#C5A059]/10 transition-colors duration-500" />
        </div>
        
        <CardHeader className="pt-8 pb-4">
          <h3 className="font-serif text-2xl text-[#2C2C2C]">{dome.name}</h3>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-stone-500 text-sm mb-6 leading-relaxed">
            {dome.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {dome.amenities.map((amenity: string) => (
              <Badge key={amenity} variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200 font-light tracking-wide text-[10px] uppercase rounded-none">
                {amenity}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="pb-8 pt-4">
          <Button 
            onClick={() => onOpenBooking(dome.name)}
            className="w-full bg-transparent border border-[#556B2F] text-[#556B2F] hover:bg-[#556B2F] hover:text-white rounded-none transition-all uppercase text-xs tracking-widest py-6"
          >
            {t.domes.cta}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const Domes = ({ onOpenBooking }: DomesProps) => {
  const { t } = useLanguage();

  return (
    <section id="domes" className="bg-stone-50 py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#556B2F] text-xs uppercase tracking-widest block mb-4">Accommodations</span>
          <h2 className="font-serif text-4xl text-[#2C2C2C]">{t.domes.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.domes.items.map((dome, index) => (
            <DomeCard 
              key={dome.id} 
              dome={dome} 
              index={index} 
              onOpenBooking={onOpenBooking} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
