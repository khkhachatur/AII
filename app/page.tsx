import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import WhyAiSection from "./Components/WhyAiSection";
import ModelsSection from "./Components/ModelsSection";
import GallerySection from "./Components/GallerySection";
import WorkflowSection from "./Components/WorkflowSection";
import ServicesSection from "./Components/ServicesSection";
import SectionSpotlight from "./Components/SectionSpotlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#C1F12A] selection:text-black">    
      <Hero/>
      <ModelsSection/>
      <ServicesSection/>
      <WhyAiSection/>
      <WorkflowSection/>
      <SectionSpotlight>
        <GallerySection />
        <Footer />
      </SectionSpotlight>
    </main>
  );
}