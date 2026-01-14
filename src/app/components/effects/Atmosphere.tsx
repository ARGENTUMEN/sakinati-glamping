import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const TimeOfDayOverlay = () => {
  const { scrollYProgress } = useScroll();
  
  // Mapping scroll progress to light changes
  // 0% (Hero): Clear/Neutral
  // 30% - 70%: Golden Hour / Afternoon Warmth
  // 100%: Evening / Dusk (Cooler, slightly darker)
  
  const bg = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [
      "rgba(255, 255, 255, 0)",      // Start
      "rgba(255, 200, 100, 0.08)",   // Golden hour peak
      "rgba(200, 150, 100, 0.05)",   // Fading warmth
      "rgba(20, 30, 60, 0.15)"       // Evening cool
    ]
  );

  return (
    <motion.div 
      style={{ backgroundColor: bg }}
      className="fixed inset-0 pointer-events-none z-30 mix-blend-overlay transition-colors duration-1000"
    />
  );
};

export const FloatingLeaves = () => {
  // A few distinct leaf instances with different parameters
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden h-screen w-screen">
      {[...Array(5)].map((_, i) => (
        <Leaf key={i} index={i} />
      ))}
    </div>
  );
};

const Leaf = ({ index }: { index: number }) => {
  // Pseudo-random generation based on index to ensure consistent server/client rendering if needed,
  // but here it's fine.
  const randomDelay = index * 5;
  const randomDuration = 20 + index * 3;
  const startX = 10 + (index * 20); // Distributed across width
  
  return (
    <motion.div
      initial={{ y: -50, x: `${startX}vw`, opacity: 0, rotate: 0 }}
      animate={{ 
        y: '110vh', 
        x: [`${startX}vw`, `${startX + 10}vw`, `${startX - 5}vw`, `${startX + 5}vw`],
        opacity: [0, 0.4, 0.6, 0.4, 0],
        rotate: [0, 90, 180, 270, 360]
      }}
      transition={{ 
        duration: randomDuration, 
        repeat: Infinity, 
        delay: randomDelay, 
        ease: "linear",
        times: [0, 1]
      }}
      className="absolute top-0 w-6 h-6 md:w-8 md:h-8 text-[#556B2F]/10 blur-[1px]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M21.16,11.23c-0.19-1.37-0.96-2.5-1.95-3.37c-1.46-1.28-3.32-1.74-5.2-1.29c-0.89,0.21-1.72,0.61-2.45,1.15 C10.66,8.39,9.88,9.2,9.24,10.13c-0.53,0.78-0.95,1.64-1.24,2.54c-0.29,0.91-0.42,1.86-0.38,2.81c0.04,1,0.26,1.98,0.66,2.89 c0.07,0.16,0.26,0.23,0.42,0.16c0.16-0.07,0.23-0.26,0.16-0.42c-0.37-0.85-0.58-1.76-0.61-2.69c-0.04-0.89,0.08-1.78,0.36-2.63 c0.27-0.85,0.66-1.65,1.16-2.38c0.6-0.88,1.33-1.63,2.18-2.22c0.69-0.5,1.47-0.88,2.3-1.07c1.77-0.42,3.52,0.01,4.9,1.21 c0.94,0.82,1.66,1.89,1.84,3.19c0.18,1.34-0.18,2.69-1,3.82c-1.02,1.4-2.52,2.36-4.17,2.83c-0.88,0.25-1.78,0.34-2.69,0.28 c-0.17-0.01-0.32,0.11-0.34,0.29c-0.01,0.17,0.11,0.32,0.29,0.34c0.97,0.06,1.93-0.03,2.86-0.3c1.76-0.5,3.35-1.52,4.44-3.02 C21.34,14.1,21.73,12.67,21.16,11.23z M11.5,17.5c-0.15-0.08-0.21-0.27-0.13-0.42c0.35-0.66,0.8-1.25,1.33-1.78 c1.05-1.05,2.36-1.81,3.79-2.2c0.17-0.05,0.34,0.05,0.39,0.22c0.05,0.17-0.05,0.34-0.22,0.39c-1.34,0.36-2.57,1.08-3.55,2.06 c-0.5,0.49-0.92,1.05-1.25,1.66C11.81,17.6,11.66,17.58,11.5,17.5z" />
      </svg>
    </motion.div>
  );
}
