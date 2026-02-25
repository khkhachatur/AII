import { whyAiData } from "../lib/data";
import Container from "./Container";
import FeatureCard from "./FeatureCard";


const WhyAiSection = () => {
  return (
    <section id="why-ai" className="w-full bg-black py-24 md:py-32 border-t border-white/10">
      <Container className="px-4 md:px-8">

        <div className="w-full flex justify-center mb-16 md:mb-24">
          <h2 className="text-white font-black text-5xl md:text-7xl lg:text-[100px] uppercase tracking-widest text-center leading-none">
            Why AI?
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {whyAiData.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              imagePath={feature.imagePath}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default WhyAiSection;