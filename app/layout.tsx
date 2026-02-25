import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AII - AI Influencer Agency",
  description: "Hire digital talent or commission a custom AI ambassador designed for multi-platform dominance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
        <Footer /> {/* 2. Add it here! */}
      </body>
    </html>
  );
}