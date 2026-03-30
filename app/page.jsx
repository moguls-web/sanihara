"use client";

import { motion } from "framer-motion";
import { CinematicHero } from "@/components/CinematicHero";
import { ParallaxSection } from "@/components/ParallaxSection";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Wine, Dumbbell, Wifi } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import suiteImage from "@/assets/suite-luxury.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import poolImage from "@/assets/pool-infinity.jpg";

export default function Home() {
  const rooms = [
    {
      id: "presidential-villa",
      name: "Presidential Villa",
      image: suiteImage,
      description: "Ultimate luxury with private pool and panoramic views",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["Private Pool", "Panoramic Views", "Butler Service", "Premium Bar"],
    },
    {
      id: "royal-classic-suite",
      name: "Royal Classic Suite",
      image: suiteImage,
      description: "Spacious elegance with premium amenities",
      price: 8500,
      capacity: 2,
      size: 500,
      amenities: ["King Bed", "Premium View", "Mini Bar", "Balcony"],
    },
    {
      id: "family-villa",
      name: "Family Villa",
      image: suiteImage,
      description: "Perfect for families with garden access",
      price: 10000,
      capacity: 4,
      size: 600,
      amenities: ["Garden View", "2 Queen Beds", "Living Area", "Kitchenette"],
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <main className="min-h-screen">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Cinematic Hero */}
      <CinematicHero />

      {/* Suites Section */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
              Exclusive Residences
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Where architectural mastery meets natural splendor
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <ParallaxSection key={room.name} speed={0.2 * (index + 1)}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  transition={{ delay: index * 0.2 }}
                >
                  <RoomCard {...room} />
                </motion.div>
              </ParallaxSection>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mt-16"
          >
            <Button variant="outline" size="lg" className="group" asChild>
              <Link href="/suites">
                Discover All Suites
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Dining Experience */}
      <section className="relative py-32 bg-secondary/50">
        <ParallaxSection speed={-0.3}>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
              >
                <h2 className="text-6xl md:text-7xl font-display font-light mb-8 tracking-tight">
                  Culinary<br />Artistry
                </h2>
                <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
                  Embark on a gastronomic journey where every dish tells a story. 
                  Our chefs craft experiences that transcend mere dining, creating 
                  memories that linger long after the last bite.
                </p>
                <Button variant="brand" size="lg" className="group" asChild>
                  <Link href="/dining">
                    Explore Dining
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[600px] rounded-sm overflow-hidden shadow-cinematic"
              >
                <Image
                  src={diningImage}
                  alt="Fine Dining"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Facilities Grid */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
              Unparalleled Amenities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Spa & Wellness", desc: "Rejuvenate your senses" },
              { icon: Wine, title: "Fine Dining", desc: "Michelin-inspired cuisine" },
              { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art equipment" },
              { icon: Wifi, title: "High-Speed WiFi", desc: "Stay connected" },
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-card border border-border hover:border-brand transition-all duration-500 rounded-sm"
              >
                <facility.icon className="w-12 h-12 text-brand mb-6 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-display mb-3">{facility.title}</h3>
                <p className="text-muted-foreground font-light">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinity Pool Showcase */}
      <section className="relative h-screen">
        <ParallaxSection speed={0.4} className="h-full">
          <div className="relative h-full w-full">
            <Image
              src={poolImage}
              alt="Infinity Pool"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="absolute inset-0 z-20 flex items-center justify-center"
            >
              <div className="text-center px-4">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-light text-white tracking-tight drop-shadow-2xl">
                  Infinite Horizons
                </h2>
              </div>
            </motion.div>
          </div>
        </ParallaxSection>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-6xl md:text-7xl font-display font-light mb-8 tracking-tight">
              Begin Your Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto">
              Step into a world where luxury meets nature, and every moment becomes a memory.
            </p>
            <Button variant="brand" size="lg" className="text-lg px-12 py-6">
              Reserve Your Experience
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

