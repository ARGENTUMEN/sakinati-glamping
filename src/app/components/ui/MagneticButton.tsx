import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative overflow-hidden group transition-all duration-300';
  const variants = {
    primary: 'bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E8C968] hover:to-[#D4AF37] text-white shadow-gold',
    secondary: 'bg-[#556B2F] hover:bg-[#6B7A3E] text-white',
    outline: 'border-2 border-[#556B2F] text-[#556B2F] hover:bg-[#556B2F] hover:text-white',
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
