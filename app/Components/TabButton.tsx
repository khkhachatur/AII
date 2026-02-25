"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

const TabButton = ({ isActive = false, children, className = '', ...props }: TabButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0); 

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });
  const springRadius = useSpring(radius, { stiffness: 400, damping: 30 });

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  useEffect(() => {
    if (isActive) {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        mouseX.set(rect.width / 2);
        mouseY.set(rect.height / 2);
      }
      radius.set(300); 
    } else {
      radius.set(0);
    }
  }, [isActive, mouseX, mouseY, radius]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isActive) return; 
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || isActive) return; 
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    radius.set(40); 
  };

  const handleMouseLeave = () => {
    if (isActive) return;
    radius.set(0); 
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden px-4 py-2 md:px-6 md:py-2 border border-black pointer-events-auto flex items-center justify-center focus:outline-none ${className}`}
      {...props}
    >
      <span className="text-black font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase z-10">
        {children}
      </span>

      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 z-20 bg-black flex justify-center items-center pointer-events-none"
      >
        <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">
          {children}
        </span>
      </motion.div>
    </button>
  );
};

export default TabButton;