import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";
import Container from "./Container";


const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_#C1F12A_0%,_#83CA16_100%)]">
        
        <h1 className="sr-only">POWER YOUR BRAND - AII AI Influencers for Hire</h1>

        <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

      <Container className="relative z-10 h-full flex flex-col items-center">

            <Navbar />

            <div className="absolute top-[15vh] md:top-[18vh] w-full text-center z-40 px-4">
                <p className="text-white text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                    AII - AI Influencers for Hire
                </p>
            </div>

            <div className="absolute bottom-0 w-full h-[75vh] md:h-[82vh] flex justify-center items-end pointer-events-none z-20">
                <Image 
                    src="/images/hero-composition.png" 
                    alt="AII Model Power Your Brand" 
                    width={1600} 
                    height={1200} 
                    quality={100} 
                    unoptimized 
                    className="w-auto h-full max-w-[95%] lg:max-w-[85%] object-contain object-bottom drop-shadow-2xl" 
                    priority 
                /> 
            </div>

            <div className="absolute bottom-8 md:bottom-12 w-full flex flex-col items-center text-center px-4 z-40 pointer-events-auto">
                <p className="text-white text-[10px] md:text-xs font-semibold tracking-[0.15em] max-w-xl mb-6 leading-relaxed uppercase">
                  Hire digital talent or commission a custom AI ambassador designed for multi-platform dominance.
                </p>

                <Button>Explore Models</Button>
            </div>

      </Container>
      </section>
  )
}

export default Hero;