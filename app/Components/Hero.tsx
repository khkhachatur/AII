import { Menu } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
   <section className="relative w-full min-h-[100vh] flex flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_center,_#C1F12A_0%,_#83CA16_100%)]">
        <nav className="w-full flex justify-between items-center px-8 py-8 z-30 absolute top-0">
          <button className="hover:opacity-70 transition-opacity">

            <div className="space-y-1.5">
              <div className="w-6 h-px bg-white"></div>
              <div className="w-6 h-px bg-white"></div>
            </div>
          </button>
          
          <div className="text-white font-bold text-xl tracking-[0.2em] ml-6">
            AII
          </div>
          
          <button className="text-white text-sm font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity">
            SUBSCRIBE
          </button>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full mt-24">

          <p className="text-white text-xs tracking-[0.2em] mb-4 z-20">
            AII - AI INFLUENCERS FOR HIRE
          </p>

          <div className="relative text-center font-black text-white text-[15vw] sm:text-[150px] md:text-[220px] leading-[0.8] z-10 flex flex-col">
             <span>POWER</span>
             <span>YOUR</span>
             <span>BRAND</span>
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[70%] max-w-[650px] z-20 pointer-events-none flex justify-center items-end h-[80%]">

             <div className="w-full h-full  flex items-center justify-center rounded-t-full">
             </div>
              <Image 
                   src="/images/nikka-hero.png" 
                   alt="AII Model" 
                   width={800} 
                   height={1000} 
                   className="w-full h-auto object-contain object-bottom drop-shadow-2xl" 
                   priority 
                 /> 

          </div>
        </div>

        <div className="absolute bottom-10 z-30 flex flex-col items-center text-center px-4 w-full">
            <p className="text-white text-[10px] md:text-xs font-medium tracking-[0.15em] max-w-xl mb-6 leading-relaxed uppercase">
              Hire digital talent or commission a custom AI ambassador designed for multi-platform dominance.
            </p>
            <button className="px-8 py-3 border border-white text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300">
              Explore Models
            </button>
        </div>
        
      </section>
  )
}

export default Hero