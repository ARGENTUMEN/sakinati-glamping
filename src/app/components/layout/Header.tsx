import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import logo from 'figma:asset/22f90f6e4e825816bb73f1d119d6cde8320b472d.png';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header = ({ onOpenBooking }: HeaderProps) => {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled,Sf] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      Sf(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.domes, id: 'domes' },
    { label: t.nav.spa, id: 'spa' },
    { label: t.nav.experiences, id: 'experiences' },
    { label: t.nav.gastronomy, id: 'gastronomy' },
    { label: t.nav.events, id: 'events' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-stone-50/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img src={logo} alt="Sakinati Logo" className="h-12 md:h-16 object-contain" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-widest hover:text-[#C5A059] transition-colors uppercase ${
                  scrolled ? 'text-stone-800' : 'text-stone-100' // Assuming dark hero, light otherwise. Wait, header is sticky. 
                  // If transparent on Hero, text needs to be visible. Hero image is dark?
                  // Hero image is 'night domes', so likely dark.
                  // But if scrolled, background is light (stone-50), so text dark.
                }`}
                style={{ color: scrolled ? undefined : 'white' }} 
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side: Lang + CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => setLanguage('es')} 
                className={`font-medium ${language === 'es' ? 'underline decoration-1 underline-offset-4' : 'opacity-60'} ${scrolled ? 'text-stone-800' : 'text-white'}`}
              >
                ES
              </button>
              <span className={scrolled ? 'text-stone-400' : 'text-white/40'}>|</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`font-medium ${language === 'en' ? 'underline decoration-1 underline-offset-4' : 'opacity-60'} ${scrolled ? 'text-stone-800' : 'text-white'}`}
              >
                EN
              </button>
            </div>
            
            <Button 
              onClick={onOpenBooking}
              className={`bg-[#556B2F] hover:bg-[#435425] text-white rounded-none px-6 tracking-widest text-xs uppercase transition-all duration-300 ${scrolled ? '' : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30'}`}
            >
              {t.nav.preBooking}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-stone-800"
            onClick={() => setMobileMenuOpen(true)}
            style={{ color: scrolled ? undefined : 'white' }}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-stone-100 flex flex-col items-center justify-center space-y-8"
          >
            <button 
              className="absolute top-6 right-6 text-stone-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <img src={logo} alt="Sakinati" className="h-20 mb-8 opacity-80" />

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-serif text-stone-800 hover:text-[#556B2F] transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="flex items-center space-x-6 pt-8">
              <button 
                onClick={() => { setLanguage('es'); }} 
                className={`text-lg ${language === 'es' ? 'font-bold text-stone-900' : 'text-stone-500'}`}
              >
                ES
              </button>
              <button 
                onClick={() => { setLanguage('en'); }} 
                className={`text-lg ${language === 'en' ? 'font-bold text-stone-900' : 'text-stone-500'}`}
              >
                EN
              </button>
            </div>

            <Button 
              onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
              className="mt-8 bg-[#556B2F] text-white px-8 py-6 text-lg rounded-none w-64"
            >
              {t.nav.preBooking}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
