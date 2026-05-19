import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import HeroScene from "@/components/HeroScene";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import OurProcess from "@/components/OurProcess";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        
      </div>
      <Hero />
      <About />
      <WhatWeDo />
      <OurProcess />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
