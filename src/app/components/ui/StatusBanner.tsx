import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';

export const StatusBanner = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 inset-x-0 z-50 flex h-8 items-center justify-center bg-stone-900 px-4 text-center text-xs font-medium uppercase tracking-widest text-stone-200"
    >
      <span className="opacity-80">{t.status.text}</span>
    </motion.div>
  );
};
