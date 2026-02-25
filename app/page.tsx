
import Hero from "./Components/Hero";
import ModelsSection from "./Components/ModelsSection";
import ServicesSection from "./Components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#C1F12A] selection:text-black">    
      <Hero/>
      <ModelsSection/>
      <ServicesSection/>
    </main>
  );
}