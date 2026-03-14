import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Spotlight } from "@/components/layout/Spotlight";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guilherme Passarinho | Frontend Developer",
  description: "Frontend engineer building accessible, high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-brand-dark text-brand-ice antialiased selection:bg-brand-mint selection:text-brand-dark font-sans leading-relaxed`}
      >
        <Spotlight />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
