import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';

export const StatusBanner = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-stone-900 text-stone-200 text-xs tracking-widest py-2 px-4 text-center font-medium uppercase z-50 relative"
    >
      <span className="opacity-80">{t.status.text}</span>
    </motion.div>
  );
};
