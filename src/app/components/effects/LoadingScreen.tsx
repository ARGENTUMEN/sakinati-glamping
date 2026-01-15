import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#556B2F] via-[#8A9A5B] to-[#C5A059] flex flex-col items-center justify-center"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-serif text-6xl md:text-8xl text-white tracking-widest">
              SAKINATI
            </h1>
            <p className="text-white/80 text-sm tracking-[0.3em] text-center mt-4 font-light">
              GLAMPING EXPERIENCE
            </p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-96 h-0.5 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-white/60 to-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-xs tracking-widest mt-8 uppercase"
          >
            Preparing your escape...
          </motion.p>

          {/* Animated olive branch */}
          <motion.svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="mt-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="30" cy="30" r="28" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
            <path
              d="M 30 15 Q 25 20, 30 25 Q 35 20, 30 15 M 30 25 Q 25 30, 30 35 Q 35 30, 30 25 M 30 35 Q 25 40, 30 45 Q 35 40, 30 35"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              opacity="0.6"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
