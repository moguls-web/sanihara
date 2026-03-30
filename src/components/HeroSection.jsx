"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import BookingWidget from "./BookingWidget";
import heroImage from "@/assets/hero-resort.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="The Sanihara Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-balance">
            A Sanctuary Above the Clouds
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            Experience luxury amidst nature in the heart of Wayanad's rainforest
          </p>
        </div>

        {/* Booking Widget */}
        <div className="max-w-6xl mx-auto animate-fade-in">
          <BookingWidget />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-float"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default HeroSection;

