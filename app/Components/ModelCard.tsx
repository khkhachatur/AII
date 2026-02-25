"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface ModelCardProps {
  name: string;
  followers: string;
  imagePath: string;
  socialIcons: string[]; 
}

const ModelCard = ({ name, followers, imagePath, socialIcons }: ModelCardProps) => {
  const router = useRouter();

  const handleLearnMore = () => {
    const modelParam = name.toUpperCase();
    router.push(`?model=${modelParam}#workflow`, { scroll: true });
  };

  return (
    <div 
      onClick={handleLearnMore}
      className="bg-black p-4 flex flex-col group cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden mb-4 bg-zinc-900">
        <Image 
          src={imagePath} 
          alt={`${name} - AII Model`} 
          fill
          quality={100} 
          unoptimized 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-[#C1F12A] font-bold text-sm tracking-[0.15em] uppercase">
            {name}
          </h3>
          <button className="text-white text-[9px] font-medium tracking-[0.1em] uppercase relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            Learn More
          </button>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-white/70 text-[9px] font-medium tracking-[0.1em] uppercase">
            Followers - {followers}
          </p>
          <div className="flex items-center gap-2">
            {socialIcons.map((icon) => (
              <div key={icon} className="relative w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <Image 
                  src={`/icons/${icon}.svg`} 
                  alt={`${icon} icon`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModelCard;