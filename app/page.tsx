"use client";
import HeroSection from "@/components/HeroSection/HeroSection";
import TitlesSection from "@/components/TitlesSection/TitlesSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import PressSection from "@/components/PressSection/PressSection";
import Footer from "@/components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
export default function Home() {
  return (
    <ParallaxProvider>
      <HeroSection />
      <TitlesSection />
      <AboutSection />
      <PressSection />
      <Footer />
    </ParallaxProvider>
  );
}
