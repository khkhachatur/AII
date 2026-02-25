import Container from "./Container";

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-white py-16 md:py-24">
      <Container className="px-4 md:px-8 flex flex-col gap-16 md:gap-20">

        <div className="flex flex-col gap-3 md:gap-4 max-w-5xl">
          <span className="text-black/50 text-[16px] md:text-2xl font-bold tracking-[0.2em] uppercase">
            Services
          </span>
          <h2 className="text-black font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
            The Roster
          </h2>
          <p className="text-black/80 font-semibold text-[10px] md:text-xs tracking-[0.15em] uppercase leading-relaxed max-w-3xl mt-2">
            We can either rent out one of our existing AI ambassadors or create a perfect digital twin to match your brand's aesthetic & goals.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 max-w-5xl">
          <span className="text-black/50 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Bespoke Creation
          </span>
          <h2 className="text-black font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
            Custom Digital Twins
          </h2>
          <p className="text-black/80 font-semibold text-[10px] md:text-xs tracking-[0.15em] uppercase leading-relaxed max-w-3xl mt-2">
            Commission a 100% unique virtual ambassador. We engineer bespoke avatars tailored specifically to your brand's demographic, voice, and visual identity.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 max-w-5xl">
          <span className="text-black/50 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Production
          </span>
          <h2 className="text-black font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight">
            Managed Content Gen<span className="md:hidden"><br/></span>eration
          </h2>
          <p className="text-black/80 font-semibold text-[10px] md:text-xs tracking-[0.15em] uppercase leading-relaxed max-w-3xl mt-2">
            Don't just hire a face, hire the production team. We deliver high-fidelity images, lip-sync video, and dynamic social content ready for your feed.
          </p>
        </div>

      </Container>
    </section>
  );
};

export default ServicesSection;