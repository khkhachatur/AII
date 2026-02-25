"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- SPOTLIGHT MASK LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const radius = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40 });
  const springRadius = useSpring(radius, { stiffness: 400, damping: 30 });

  const clipPath = useMotionTemplate`circle(${springRadius}px at ${springX}px ${springY}px)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = Math.max(window.innerHeight, 700);
      if (window.scrollY > heroHeight - 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Models", href: "#models" },
    { name: "Services", href: "#services" },
    { name: "Workflow", href: "#workflow" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const renderHeader = (isMask: boolean) => (
    <div className="absolute top-0 left-0 w-full py-8">
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center px-8 relative">
        

        <div className="relative">
          <button 
            onClick={() => !isMask && setIsOpen(false)}
            className={`transition-opacity relative focus:outline-none ${isMask ? 'pointer-events-none' : 'hover:opacity-70 pointer-events-auto'}`}
          >
            <div className="flex flex-col items-start space-y-1.5">
              <div className={`h-px transition-colors duration-300 w-6 rotate-45 translate-y-[7px] ${isMask ? 'bg-black' : 'bg-white'}`}></div>
              <div className={`h-px transition-colors duration-300 w-6 -rotate-45 ${isMask ? 'bg-black' : 'bg-white'}`}></div>
            </div>
          </button>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          {!isMask ? (
            <Link 
              href="/" 
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsOpen(false); 
              }}
              className="text-white font-semibold text-xl tracking-[0.2em] hover:opacity-70 transition-opacity pointer-events-auto"
            >
              AII
            </Link>
          ) : (
            <span className="text-black font-semibold text-xl tracking-[0.2em] pointer-events-none">
              AII
            </span>
          )}
        </div>

        <button className={`${isMask ? 'text-black' : 'text-white'} text-sm font-semibold tracking-[0.1em] hidden sm:block pointer-events-none uppercase`}>
          SUBSCRIBE
        </button>

      </div>
    </div>
  );

  const renderLinks = (isMask: boolean) => (
    <div className="flex flex-col items-center gap-6 md:gap-10">
      {menuItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: "easeOut" }}
        >
          {isMask ? (
            <span className="text-black text-4xl md:text-6xl font-black uppercase tracking-widest pointer-events-none">
              {item.name}
            </span>
          ) : (
            <Link 
              href={item.href}
              onClick={() => setIsOpen(false)} 
              className="text-white text-4xl md:text-6xl font-black uppercase tracking-widest hover:text-white/70 transition-colors pointer-events-auto"
            >
              {item.name}
            </Link>
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            className="fixed inset-0 w-full h-screen z-[120]"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => radius.set(150)} 
            onMouseLeave={() => radius.set(0)}   
          >
            
            <div className="absolute inset-0 bg-black flex flex-col justify-center items-center pointer-events-none">
              {renderHeader(false)}
              <div className="pointer-events-auto z-10 flex flex-col items-center">
                  {renderLinks(false)}
              </div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-10 text-white/50 text-xs tracking-[0.2em] uppercase"
              >
                Contact@AII-Agency.com
              </motion.div>
            </div>

            <motion.div
              style={{ clipPath }}
              className="absolute inset-0 bg-[#C1F12A] flex flex-col justify-center items-center pointer-events-none z-20"
            >
              {renderHeader(true)}
              {renderLinks(true)}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-10 text-black/60 font-bold text-xs tracking-[0.2em] uppercase"
              >
                Contact@AII-Agency.com
              </motion.div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      <nav 
        className={`w-full fixed top-0 left-0 z-[110] transition-all duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : scrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg opacity-100" : "bg-transparent py-8 opacity-100"
        }`}
      >
        <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center px-8 relative">
          
          <div className="relative">
            <button 
              onClick={toggleMenu}
              className="hover:opacity-70 transition-opacity pointer-events-auto relative focus:outline-none"
            >
              <div className="flex flex-col items-start space-y-1.5">
                <div className="h-px bg-white w-8"></div>
                <div className="h-px bg-white w-5"></div>
              </div>
            </button>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-white font-semibold text-xl tracking-[0.2em] hover:opacity-70 transition-opacity pointer-events-auto"
            >
              AII
            </Link>
          </div>
          
          <button className="text-white text-sm font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity pointer-events-auto hidden sm:block">
            SUBSCRIBE
          </button>

        </div>
      </nav>
    </>
  );
};

export default Navbar;