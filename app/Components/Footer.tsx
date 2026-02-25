import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "./Button"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-black py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
      <Container className="px-4 md:px-8 flex flex-col items-center">

        <div className="flex flex-col items-center text-center max-w-4xl mb-24 md:mb-32 gap-8 md:gap-12">
          <h2 className="text-white font-black text-4xl md:text-5xl lg:text-7xl uppercase tracking-widest leading-tight">
            Ready to deploy your next <span className="text-[#C1F12A]">digital ambassador?</span>
          </h2>
          <p className="text-white/60 font-semibold text-[10px] md:text-xs tracking-[0.2em] uppercase leading-relaxed max-w-2xl">
            Hire existing digital talent or commission a custom AI ambassador designed for multi-platform dominance.
          </p>

          <a href="mailto:contact@aii-agency.com" className="mt-4 inline-block">
            <Button>
              Start A Project
            </Button>
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 border-t border-white/10 pt-8 md:pt-12">

          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-white font-bold text-2xl tracking-[0.2em]">AII</span>
            <span className="text-white/50 text-[9px] md:text-[10px] font-medium tracking-[0.1em] uppercase">
              © {currentYear} AII Agency. All rights reserved.
            </span>
          </div>

          <div className="flex gap-6 items-center">
            {["instagram", "tiktok", "telegram"].map((social) => (
              <Link href="#" key={social} className="opacity-50 hover:opacity-100 transition-opacity">
                <div className="relative w-5 h-5">
                  <Image
                    src={`/icons/${social}.svg`}
                    alt={`${social} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-6 text-[9px] md:text-[10px] font-medium tracking-[0.1em] text-white/50 uppercase">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;