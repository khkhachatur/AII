"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0); 

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });
  const springRadius = useSpring(radius, { stiffness: 400, damping: 30 });

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    radius.set(45); 
  };

  const handleMouseLeave = () => {
    radius.set(0); 
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden px-8 py-3 border border-white pointer-events-auto flex items-center justify-center ${className}`}
      {...props}
    >

      <span className="text-white font-semibold text-xs tracking-[0.2em] uppercase z-10">
        {children}
      </span>

      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 z-20 bg-white flex justify-center items-center pointer-events-none"
      >
        <span className="text-black font-semibold text-xs tracking-[0.2em] uppercase">
          {children}
        </span>
      </motion.div>
    </button>
  );
};

export default Button;