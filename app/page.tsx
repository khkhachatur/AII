
import GallerySection from "./Components/GallerySection";
import Hero from "./Components/Hero";
import ModelsSection from "./Components/ModelsSection";
import ServicesSection from "./Components/ServicesSection";
import WhyAiSection from "./Components/WhyAiSection";
import WorkflowSection from "./Components/WorkflowSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#C1F12A] selection:text-black">    
      <Hero/>
      <ModelsSection/>
      <ServicesSection/>
      <WhyAiSection/>
      <WorkflowSection/>
      <GallerySection/>
    </main>
  );
}