"use client";

import { Award, Heart, Users, Leaf } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/hero-resort.jpg";

export default function About() {
  const stats = [
    { value: "80+", label: "Rooms & Villas" },
    { value: "10+", label: "Years of Hospitality" },
    { value: "50,000+", label: "Happy Guests" },
    { value: "20+", label: "Awards & Recognitions" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Exceptional Service",
      description: "Our dedicated team ensures every guest receives personalized attention and care.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "We're committed to preserving Wayanad's natural beauty for future generations.",
    },
    {
      icon: Users,
      title: "Family & Luxury Friendly",
      description: "Perfect for families seeking adventure and couples desiring romantic escapes.",
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Recognized for outstanding hospitality and commitment to guest satisfaction.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image src={heroImage} alt="The Sanihara Resort" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">About The Sanihara</h1>
          <p className="text-xl animate-fade-in">Your haven in Wayanad's hills</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Nestled in the pristine rainforests of Lakkidi, Wayanad, The Sanihara Hotel & Resort stands as a
                testament to luxury harmonized with nature. Established with a vision to create an unparalleled
                hospitality experience, we have evolved into one of Kerala's most sought-after destinations.
              </p>
              <p>
                Our journey began with a simple mission: to provide travelers with a serene sanctuary where modern
                comfort meets natural splendor. Over the years, we've welcomed thousands of guests from around the
                world, each discovering their own piece of paradise in the Western Ghats.
              </p>
              <p>
                From the moment you arrive at our doorstep, you become part of The Sanihara family. Our commitment to
                excellence, sustainable tourism, and authentic Kerala hospitality has earned us numerous accolades and,
                more importantly, the trust and love of our guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-serif font-bold mb-2">{stat.value}</p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To provide serene luxury amidst nature, creating unforgettable experiences that rejuvenate the mind,
                body, and soul. We strive to be the preferred choice for discerning travelers seeking authentic Kerala
                hospitality combined with world-class amenities.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-3xl font-serif font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To establish The Sanihara as India's premier eco-luxury resort, setting benchmarks in sustainable
                tourism while preserving the natural heritage of Wayanad. We envision a future where every guest leaves
                with cherished memories and a deeper connection to nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Choose The Sanihara</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Awards & Recognitions</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our commitment to excellence has been recognized by leading hospitality organizations and travel
              publications. We're proud to have received numerous awards for our service quality, sustainable practices,
              and guest satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-card rounded-xl shadow-card">
                <Award className="h-12 w-12 mx-auto mb-3 text-brand" />
                <p className="font-semibold">Best Resort 2023</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-card">
                <Award className="h-12 w-12 mx-auto mb-3 text-brand" />
                <p className="font-semibold">Eco-Friendly Award</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-card">
                <Award className="h-12 w-12 mx-auto mb-3 text-brand" />
                <p className="font-semibold">Excellence in Service</p>
              </div>
              <div className="p-6 bg-card rounded-xl shadow-card">
                <Award className="h-12 w-12 mx-auto mb-3 text-brand" />
                <p className="font-semibold">5-Star Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
