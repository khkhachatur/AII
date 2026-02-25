import Image from "next/image";
import Link from "next/link";

interface ModelCardProps {
  name: string;
  followers: string;
  imagePath: string;
  socialIcons: string[]; // e.g., ['instagram', 'tiktok']
}

const ModelCard = ({ name, followers, imagePath, socialIcons }: ModelCardProps) => {
  return (
    <div className="bg-black p-4 flex flex-col group cursor-pointer">
      
      {/* --- IMAGE CONTAINER --- */}
      {/* overflow-hidden keeps the zoom effect inside the box */}
      <div className="relative w-full aspect-[3/4] overflow-hidden mb-4 bg-zinc-900">
        <Image 
          src={imagePath} 
          alt={`${name} - AII Model`} 
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="flex flex-col gap-2">
        
        {/* Row 1: Name and Learn More */}
        <div className="flex justify-between items-center">
          <h3 className="text-[#C1F12A] font-bold text-sm tracking-[0.15em] uppercase">
            {name}
          </h3>
          <span className="text-white text-[9px] font-medium tracking-[0.1em] uppercase relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            Learn More
          </span>
        </div>

        {/* Row 2: Followers and Social Icons */}
        <div className="flex justify-between items-center">
          <p className="text-white/70 text-[9px] font-medium tracking-[0.1em] uppercase">
            Followers - {followers}
          </p>
          <div className="flex items-center gap-2">
            {socialIcons.map((icon) => (
              <div key={icon} className="relative w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity">
                {/* Assuming your icons are named exactly like 'instagram.svg' in public/icons/ */}
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