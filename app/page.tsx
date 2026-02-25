
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#C1F12A] selection:text-black">    
      <Hero/>
      <div className="h-screen bg-white"></div>
      
    </main>
  );
}