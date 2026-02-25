"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface InfiniteSliderProps {
  images: string[];
  duration?: number; 
  direction?: "left" | "right";
}

const InfiniteSlider = ({ 
  images, 
  duration = 30, 
  direction = "left" 
}: InfiniteSliderProps) => {
  const doubledImages = [...images, ...images];

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4">
      <div className="flex w-fit">
        <motion.div
          className="flex gap-4 md:gap-6 pr-4 md:pr-6"
          animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: duration,
              ease: "linear",
            },
          }}
        >
          {doubledImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-[280px] md:w-[450px] aspect-[3/4] shrink-0 bg-zinc-100"
            >
              <Image
                src={src}
                alt={`Slider Image ${idx}`}
                fill
                quality={100}
                unoptimized
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteSlider;