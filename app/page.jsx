"use client";

import { motion } from "framer-motion";
import { CinematicHero } from "@/components/CinematicHero";
import { ParallaxSection } from "@/components/ParallaxSection";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Sparkles, Wine, Dumbbell, Wifi } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import suiteImage from "@/assets/suite-luxury.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import poolImage from "@/assets/pool-infinity.jpg";

export default function Home() {
  const rooms = [
    {
      id: "doubleNonAC",
      name: "Double - Non AC",
      subheading: "Elegant Simplicity for a Comfortable Stay",
      image: suiteImage,
      description:
        "Our Double Non-AC room provides a warm, cozy retreat with a spacious layout, offering a comfortable queen bed. Perfect for couples or solo travelers, this room ensures a restful and relaxing environment.",
      price: 5000,
      capacity: 2,
      size: 300,
      amenities: ["1 Queen Bed", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "twinNonAC",
      name: "Twin - Non AC",
      subheading: "The Perfect Space for Friends or Small Families",
      image: suiteImage,
      description:
        "Enjoy a comfortable and spacious stay in our Twin Non-AC room. With two super single beds, this room offers a relaxed environment for up to three guests. Whether you’re traveling with a friend or family.",
      price: 8500,
      capacity: 2,
      size: 500,
      amenities: ["2 Super Single Beds", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "tripleNonAC",
      name: "Triple – Non AC",
      subheading: "Ample Space for Families and Small Groups",
      image: suiteImage,
      description:
        "Our Triple Non-AC room is the perfect choice for families or small groups. With a queen bed and a super single bed, this spacious room comfortably accommodates up to four guests.",
      price: 10000,
      capacity: 4,
      size: 600,
      amenities: ["1 Queen Bed + 1 Super Single Bed", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "family4sharingNonAC",
      name: "Family 4-sharing – Non AC",
      subheading: "A Perfect Family Getaway",
      image: poolImage,
      description:
        "Designed with families in mind, our Family 4-sharing Non-AC room offers a queen bed and two super single beds to comfortably accommodate up to five guests.",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["1 Queen Bed + 2 Super Single Beds", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "largeFamily6sharingNonAC",
      name: "Large Family 6-sharing – Non AC",
      subheading: "The Ultimate Family Space for a Comfortable Stay",
      image: poolImage,
      description:
        "The Large Family 6-sharing Non-AC room is designed to comfortably accommodate larger families, with two queen beds and two super single beds, perfect for up to eight guests.",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["2 Queen Beds + 2 Super Single Beds", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "classicDoubleAC",
      name: "Classic Double – AC",
      subheading: "Sophisticated Comfort and Style",
      image: poolImage,
      description:
        "The Classic Double AC room offers a luxurious and comfortable setting, featuring a queen bed and an air-conditioned environment. Whether you’re here for business or leisure.",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["1 Queen Bed", "Air Conditioning", "Free WiFi", "Room Service", "Daily Housekeeping"],
    },
    {
      id: "classicTwinAC",
      name: "Classic Twin – AC",
      subheading: "Relaxing and Comfortable for Two",
      image: poolImage,
      description:
        "Our Classic Twin AC room offers two single beds, ideal for friends or colleagues looking for a comfortable and relaxing space. With the perfect balance of comfort and convenience.",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["2 Single Beds", "Air Conditioning", "Free WiFi", "Room Service", "Daily Housekeeping"],
    },
    {
      id: "classicDoubleGardenViewAC",
      name: "Classic Double Garden View – AC",
      subheading: "Serenity with a View",
      image: poolImage,
      description:
        "Enjoy the tranquil garden views in our Classic Double Garden View. Featuring a queen bed, this room is the perfect place for couples or solo travelers who wish to experience relaxation in a serene environment.",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["1 Queen Bed", "Garden View", "Air Conditioning", "Free WiFi", "Room Service"],
    },
    {
      id: "classicTwinGardenViewAC",
      name: "Classic Twin Garden View – AC",
      subheading: "Peaceful Comfort with Garden Views",
      image: poolImage,
      description:
        "The Classic Twin Garden View room offers a relaxing space with two single beds and a picturesque view of the lush gardens. Ideal for friends or small families, this room combines the beauty of nature with the luxury of modern amenities.",
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["1 Queen Bed", "Garden View", "Air Conditioning", "Free WiFi", "Room Service"],
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

          <Carousel
            opts={{ align: "start", loop: true }}
            autoScrollMs={3000}
            className="w-full"
          >
            <div className="flex justify-end gap-3 mb-6">
              <CarouselPrevious />
              <CarouselNext />
            </div>
            <CarouselContent className="items-center">
              {rooms.map((room, index) => (
                <CarouselItem key={room.name} className="basis-[85%] sm:basis-[60%] lg:basis-1/3">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUpVariants}
                  >
                    <RoomCard {...room} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            className="text-center mt-16"
          >
            <Button variant="outline" size="lg" className="group border-white text-white hover:bg-white hover:text-primary" asChild>
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

