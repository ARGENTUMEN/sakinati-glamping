import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../../assets/logo-dark.svg';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2C2C2C] text-stone-300 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left">
            <img src={logo} alt="Sakinati" className="h-20 grayscale opacity-90" />
            <p className="font-serif text-xl italic max-w-xs text-stone-400">
              "{t.footer.manifesto}"
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left text-sm tracking-widest uppercase">
            <div className="space-y-4">
                <a href="#" className="block hover:text-white transition-colors">{t.nav.location}</a>
                <a href="#" className="block hover:text-white transition-colors">Contact</a>
                <a href="#" className="block hover:text-white transition-colors">FAQ</a>
            </div>
            <div className="space-y-4">
                {t.footer.links.map(link => (
                    <a key={link} href="#" className="block hover:text-white transition-colors">{link}</a>
                ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-stone-800 text-center md:text-left text-xs text-stone-600 flex flex-col md:flex-row justify-between items-center">
          <p>{t.footer.copyright}</p>
          <p className="mt-2 md:mt-0">Designed for Sakinati</p>
        </div>
      </div>
    </footer>
  );
};
