import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const FeatureCard = ({ title, description, imagePath }: FeatureCardProps) => {
  return (
    <div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer z-[50] group">
      
      <Image 
        src={imagePath} 
        alt={title} 
        fill
        quality={100} 
        unoptimized 
        className="hide-in-mask object-cover opacity-50 group-hover:opacity-90 transition-all duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col gap-3 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-[#C1F12A] font-bold text-lg md:text-xl tracking-[0.15em] uppercase">
          {title}
        </h3>
        <p className="text-white/80 text-[10px] md:text-xs font-medium tracking-[0.1em] leading-relaxed uppercase">
          {description}
        </p>
      </div>

    </div>
  );
};

export default FeatureCard;