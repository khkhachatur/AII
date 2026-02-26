"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function SectionSpotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });
  const springRadius = useSpring(radius, { stiffness: 400, damping: 30 });

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (

    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => radius.set(250)} 
      onMouseLeave={() => radius.set(0)}
      className="relative w-full" 
    >
      <div className="w-full">
        {children}
      </div>

      <motion.div
        style={{ clipPath }}
        className="absolute top-0 left-0 w-full h-full z-20 bg-[#C1F12A] pointer-events-none"
        aria-hidden="true"
      >

        <div className="w-full h-full [&_*]:!text-black [&_*]:!bg-transparent [&_*]:!from-transparent [&_*]:!via-transparent [&_*]:!to-transparent [&_*]:!z-auto [&_.hide-in-mask]:!opacity-0 [&_.social-icon]:!invert">
          {children}
        </div>
      </motion.div>
    </div>
  );
}