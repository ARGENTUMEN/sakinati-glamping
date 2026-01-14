import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

interface ExperiencesProps {
  onOpenBooking: () => void;
}

const experienceImages = [
  "https://images.unsplash.com/photo-1768028758084-e6b264ece28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib25maXJlJTIwbmlnaHQlMjBmcmllbmRzJTIwY2FtcGluZ3xlbnwxfHx8fDE3Njg0MTEyODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1652806724292-381ff63977b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyZ2F6aW5nJTIwdGVsZXNjb3BlJTIwbmlnaHQlMjBza3l8ZW58MXx8fHwxNzY4NDExMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1604771972373-df596ccdc406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB3YWxraW5nJTIwbmF0dXJlJTIwdHJhaWx8ZW58MXx8fHwxNzY4NDExMjgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1609585051727-1dc8c3361910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYW5pbWFscyUyMHNoZWVwJTIwb2xpdmUlMjBncm92ZXxlbnwxfHx8fDE3Njg0MTEyODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

export const Experiences = ({ onOpenBooking }: ExperiencesProps) => {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="bg-[#FDFCF8] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#2C2C2C] mb-8">{t.experiences.title}</h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto md:h-[500px]">
          {t.experiences.items.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group h-[300px] md:h-full overflow-hidden cursor-pointer"
            >
              <img 
                src={experienceImages[index]} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-[#C5A059]/20 transition-colors duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="border border-white/30 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-white/5 backdrop-blur-sm group-hover:bg-white/10">
                  <h3 className="font-serif text-xl text-white mb-2">{item.name}</h3>
                  <p className="text-white/70 text-xs uppercase tracking-widest">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={onOpenBooking}
            variant="outline"
            className="border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs transition-all"
          >
            {t.experiences.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
