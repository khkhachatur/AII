import Container from "./Container";
import InfiniteSlider from "./InfiniteSlider";
import { galleryRow1, galleryRow2 } from "../lib/data";

const GallerySection = () => {
  return (

    <section id="gallery" className="w-full bg-black py-24 md:py-32 overflow-hidden border-t border-white/10">
      
      <Container className="px-4 md:px-8 mb-16 md:mb-24 flex flex-col items-center text-center gap-4">
        <h2 className="text-white font-black text-5xl md:text-7xl lg:text-[100px] uppercase tracking-widest leading-none">
          Portfolio
        </h2>
        <p className="text-white/60 font-semibold text-[10px] md:text-xs tracking-[0.2em] uppercase">
          A showcase of our digital talent
        </p>
      </Container>

      <div className="flex flex-col gap-4 md:gap-6">
        <InfiniteSlider 
          images={galleryRow1} 
          duration={40} 
          direction="left" 
        />
 
        <InfiniteSlider 
          images={galleryRow2} 
          duration={45} 
          direction="right" 
        />
      </div>

    </section>
  );
};

export default GallerySection;