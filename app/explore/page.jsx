"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-resort.jpg";

export default function Explore() {
  const attractions = [
    {
      name: "Lakkidi Viewpoint",
      distance: "1.6 km",
      duration: "10 min drive",
      description: "Breathtaking hilltop vistas offering panoramic views of the Western Ghats. Perfect spot for sunrise and sunset photography.",
      category: "Viewpoint",
      bestTime: "Early Morning, Evening",
      image: heroImage,
    },
    {
      name: "Pookode Lake",
      distance: "3 km",
      duration: "15 min walk",
      description: "Serene freshwater lake surrounded by lush forests. Enjoy boating, nature walks, and bird watching.",
      category: "Nature & Boating",
      bestTime: "All Day",
      image: heroImage,
    },
    {
      name: "Tea Museum",
      distance: "13 km",
      duration: "25 min drive",
      description: "Learn about tea cultivation and processing. Explore tea plantations and sample fresh Wayanad tea.",
      category: "Heritage",
      bestTime: "Morning",
      image: heroImage,
    },
    {
      name: "City Park",
      distance: "3 km",
      duration: "15 min walk",
      description: "Beautiful recreational park with walking trails, children's play area, and picnic spots amidst nature.",
      category: "Recreation",
      bestTime: "Evening",
      image: heroImage,
    },
    {
      name: "Banasura Sagar Dam",
      distance: "35 km",
      duration: "1 hour drive",
      description: "India's largest earthen dam with stunning reservoir views. Enjoy speed boating and trekking.",
      category: "Adventure",
      bestTime: "Morning",
      image: heroImage,
    },
    {
      name: "Edakkal Caves",
      distance: "25 km",
      duration: "45 min drive",
      description: "Ancient caves with prehistoric rock carvings. Moderate trek with rewarding historical and scenic experience.",
      category: "Heritage & Trekking",
      bestTime: "Morning",
      image: heroImage,
    },
    {
      name: "Soochipara Waterfalls",
      distance: "20 km",
      duration: "35 min drive",
      description: "Three-tiered waterfall cascading from 200m height. Trek through forest trails to reach this natural wonder.",
      category: "Waterfall & Trekking",
      bestTime: "Monsoon & Winter",
      image: heroImage,
    },
    {
      name: "Wayanad Wildlife Sanctuary",
      distance: "40 km",
      duration: "1 hour drive",
      description: "Home to elephants, tigers, and diverse wildlife. Safari tours available for wildlife enthusiasts.",
      category: "Wildlife",
      bestTime: "Early Morning",
      image: heroImage,
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Discover Wayanad
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Explore the natural wonders surrounding our resort
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-elegant h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3045822589777!2d76.0513!3d11.5167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMxJzAwLjEiTiA3NsKwMDMnMDQuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wayanad Attractions Map"
            />
          </div>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden`}
              >
                <div className="lg:w-2/5 h-80 lg:h-auto relative">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-center space-y-4">
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-2">{attraction.name}</h2>
                    <p className="text-brand font-medium">{attraction.category}</p>
                  </div>

                  <p className="text-muted-foreground text-lg">{attraction.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Distance</p>
                        <p className="font-semibold">{attraction.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Navigation className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Travel Time</p>
                        <p className="font-semibold">{attraction.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 sm:col-span-2">
                      <Clock className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                        <p className="font-semibold">{attraction.bestTime}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button variant="brand" size="default">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Tour Assistance</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our concierge team can help arrange guided tours, transportation, and provide detailed information
              about each attraction.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Guided Tours</h3>
                <p className="text-sm text-muted-foreground">Expert local guides available</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Transportation</h3>
                <p className="text-sm text-muted-foreground">Comfortable vehicles arranged</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Custom Itineraries</h3>
                <p className="text-sm text-muted-foreground">Personalized tour planning</p>
              </div>
            </div>
            <div className="mt-12">
              <Button variant="brand" size="lg">
                Contact Concierge
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
