import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button";

const Footer = () => {
  const socialIcons = [
    "instagram", "tiktok", "x", "telegram", "facebook", "youtube", "gmail", "whatsapp"
  ];

  return (
    <footer id="contact" className="w-full bg-black py-16 md:py-24">
      <Container className="px-4 md:px-8 flex flex-col">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 w-full">
          <h2 className="text-white font-black text-6xl md:text-[80px] lg:text-[100px] uppercase leading-[0.9] tracking-tighter max-w-4xl">
            READY TO<br />
            BUILD THE<br />
            FACE OF YOUR<br />
            BRAND?
          </h2>

          <div className="flex flex-col gap-6 max-w-sm pt-4">
            <p className="text-white font-medium text-sm md:text-base leading-snug uppercase tracking-wide">
              JOIN FORWARD-THINKING COMPANIES SCALING THEIR REACH WITH DIGITAL TALENT.
            </p>
           <a href="mailto:contact@aii-agency.com" className="w-fit relative z-30">
              <Button>Book A Call</Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-24 md:mt-32 w-full max-w-5xl">

          <div className="flex flex-col gap-3">
            <Link href="#models" className="text-white font-bold text-lg md:text-xl uppercase hover:opacity-70 transition-opacity">Explore Models</Link>
            <Link href="#why-ai" className="text-white font-bold text-lg md:text-xl uppercase hover:opacity-70 transition-opacity">Why AI?</Link>
            <Link href="#workflow" className="text-white font-bold text-lg md:text-xl uppercase hover:opacity-70 transition-opacity">How It Works</Link>
            <Link href="#contact" className="text-white font-bold text-lg md:text-xl uppercase hover:opacity-70 transition-opacity">Contacts</Link>
          </div>

          <div className="flex flex-col gap-2">
            <Link href="#gallery" className="text-white font-semibold text-sm md:text-base hover:opacity-70 transition-opacity">Gallery</Link>
            <Link href="#" className="text-white font-semibold text-sm md:text-base hover:opacity-70 transition-opacity">Terms And Conditions</Link>
            <Link href="#" className="text-white font-semibold text-sm md:text-base hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="text-white font-semibold text-sm md:text-base hover:opacity-70 transition-opacity">Cookies Policy</Link>
            <Link href="#" className="text-white font-semibold text-sm md:text-base hover:opacity-70 transition-opacity">Copyright Policy</Link>
            <Link href="#" className="text-white font-semibold text-sm md:text-base hover:opacity-70 transition-opacity">Product Information</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white font-bold text-sm md:text-base">Active Influencers:</span>
            <span className="text-[#C1F12A] font-black text-6xl md:text-[80px] leading-none tracking-tighter">
              34
            </span>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mt-24 md:mt-32 gap-12 lg:gap-0 w-full">

          <h1 className="text-white font-black text-6xl sm:text-7xl md:text-[90px] lg:text-[130px] uppercase tracking-tighter leading-none">
            AIINFLUENCERS
          </h1>

          <div className="flex flex-col gap-4 lg:pb-4">
            <span className="text-white font-bold text-sm md:text-base">See what's up</span>
            <div className="flex gap-4 items-center flex-wrap">
              {socialIcons.map((social) => (
              <Link href="#" key={social} className="opacity-100 hover:opacity-60 transition-opacity">
                <div className="relative w-6 h-6 md:w-8 md:h-8">
                  <Image
                    src={`/icons/${social}.svg`}
                    alt={`${social} icon`}
                    fill
                    className="social-icon object-contain" 
                  />
                </div>
              </Link>
            ))}
            </div>
          </div>

        </div>

      </Container>
    </footer>
  );
};

export default Footer;