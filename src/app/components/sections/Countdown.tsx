import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'motion/react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

export const Countdown = () => {
  const { t } = useLanguage();
  const targetDate = new Date('2026-07-01T00:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        days: differenceInDays(targetDate, now),
        hours: differenceInHours(targetDate, now) % 24,
        minutes: differenceInMinutes(targetDate, now) % 60,
        seconds: differenceInSeconds(targetDate, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#FDFCF8] py-20 border-b border-stone-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#556B2F] text-xs uppercase tracking-[0.2em] mb-8 font-medium">
          {t.countdown.label}
        </p>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-16 text-[#2C2C2C]">
          <TimeBlock value={timeLeft.days} label={t.countdown.days} />
          <Separator />
          <TimeBlock value={timeLeft.hours} label={t.countdown.hours} />
          <Separator />
          <TimeBlock value={timeLeft.minutes} label={t.countdown.minutes} />
          <Separator className="hidden md:block" />
          <TimeBlock value={timeLeft.seconds} label={t.countdown.seconds} className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

const TimeBlock = ({ value, label, className = "" }: { value: number, label: string, className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <motion.span 
      key={value}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="text-4xl md:text-6xl font-serif text-[#2C2C2C]"
    >
      {String(value).padStart(2, '0')}
    </motion.span>
    <span className="text-[10px] uppercase tracking-widest mt-2 text-stone-400">{label}</span>
  </div>
);

const Separator = ({ className = "" }: { className?: string }) => (
  <div className={`text-2xl md:text-4xl font-serif text-stone-300 ${className}`}>:</div>
);
