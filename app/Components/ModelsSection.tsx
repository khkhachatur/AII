import { modelsData } from "../lib/data";
import Container from "./Container";
import ModelCard from "./ModelCard";


const ModelsSection = () => {
  return (
    <section id="models" className="w-full bg-white py-24 md:py-32">
      <Container className="px-4 md:px-8">
        
        <h2 className="text-black text-center font-black text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-12 md:mb-20">
          Explore Models
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {modelsData.map((model, index) => (
            <ModelCard 
              key={index}
              name={model.name}
              followers={model.followers}
              imagePath={model.imagePath}
              socialIcons={model.socialIcons}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ModelsSection;