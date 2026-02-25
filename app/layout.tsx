import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", ], 
});

export const metadata: Metadata = {
  title: "AII - AI Influencers for Hire",
  description: "Power your brand with custom digital talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${instrumentSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}