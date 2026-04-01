"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-resort.jpg";

export default function Explore() {
  const attractions = [
    {
      name: "Lakkidi View Point",
      distance: "1.6 km",
      duration: "10 min drive",
      description: "Breathtaking valley views",
      category: "Viewpoint",
      bestTime: "Early Morning, Evening",
      image: heroImage,
    },
    {
      name: "Pookode Lake",
      distance: "1.6 km",
      duration: "10 min drive",
      description: "Scenic freshwater lake with boating",
      category: "Viewpoint",
      bestTime: "Early Morning, Evening",
      image: heroImage,
    },
    {
      name: "Honey Museum",
      distance: "1.6 km",
      duration: "10 min drive",
      description: "Insight into beekeeping and honey production",
      category: "Viewpoint",
      bestTime: "Early Morning, Evening",
      image: heroImage,
    },
    {
      name: "Vythiri Farm ",
      distance: "1.6 km",
      duration: "10 min drive",
      description: "Plantation and nature walks",
      category: "Viewpoint",
      bestTime: "Early Morning, Evening",
      image: heroImage,
    },
  ];

  const adventureRecreation = [
    {
      name: "Wayanad Adventure Park",
      distance: "8.5 km",
      duration: "25 min drive",
      description: "Ziplining and outdoor activities",
      category: "Adventure Trekking",
      bestTime: "Early Morning",
      image: heroImage,
    }, 
    {
      name: "Mountain Race Go Karting",
      distance: "8.5 km",
      duration: "25 min drive",
      description: " Go-kart racing",
      category: "Adventure Trekking",
      bestTime: "Early Morning",
      image: heroImage,
    }, 
  ];

  const natureScenicExcursions = [
    {
      name: "Banasura Sagar Dam",
      distance: "9.4 km",
      duration: "28 min drive",
      description: "The largest earthen dam in India",
      category: "Waterfall",
      bestTime: "Monsoon, Post-Monsoon",
      image: heroImage,
    },
    {
      name: "Karalad Lake ",
      distance: "6.1 km",
      duration: "15 min drive",
      description: "Ideal for water activities",
      category: "Heritage & Scenic Spot",
      bestTime: "Morning, Evening",
      image: heroImage,
    },
    {
      name: "Meenmutty Waterfalls",
      distance: "7.8 km",
      duration: "22 min drive",
      description: "A stunning multi-tiered waterfall",
      category: "Plantation Experience",
      bestTime: "Early Morning",
      image: heroImage,
    }, 
  ];

  const heritageCulture = [
    {
      name: "Edakkal Caves",
      distance: "9.6 km",
      duration: "28 min drive",
      description: "Prehistoric carvings and history",
      category: "Heritage Site",
      bestTime: "Morning, Evening",
      image: heroImage,
    },
    {
      name: "Wayanad Heritage Museum",
      distance: "8.2 km",
      duration: "24 min drive",
      description: " Archaeological and cultural exhibits",
      category: "Museum",
      bestTime: "Morning to Afternoon",
      image: heroImage,
    }, 
  ];

  const spiritualLeisureExperiences = [
    {
      name: "Thirunelli Temple ",
      distance: "9.1 km",
      duration: "27 min drive",
      description: "A serene and sacred destination",
      category: "Spiritual Destination",
      bestTime: "Early Morning, Evening",
      image: heroImage,
    }, 
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
          Explore Wayanad from The Sanihara

          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">Located in the heart of Wayanad, The Sanihara offers guests effortless access to a wide range of sightseeing destinations and adventure experiences. Whether you seek nature, culture, or outdoor activities, our location serves as the perfect starting point to curate memorable travel itineraries.
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
          <div className="text-center mb-12 mx-auto max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Nearby Attractions (Within 5 km)</h2>
            <p className="text-lg text-muted-foreground mb-12">Enjoy quick and convenient access to some of Wayanad’s most popular spots</p>
          </div>
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

      {/* Adventure & Recreation Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mx-auto max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Adventure & Recreation (5–10 km)</h2>
            <p className="text-lg text-muted-foreground mb-12">For guests seeking active experiences</p>
          </div>
          <div className="grid gap-8">
            {adventureRecreation.map((attraction, index) => (
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

      {/* Nature & Scenic Excursions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mx-auto max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Nature &amp; Scenic Excursions</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Discover the natural beauty of Wayanad with these must-visit destinations
            </p>
          </div>
          <div className="grid gap-8">
            {natureScenicExcursions.map((attraction, index) => (
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
            
      {/* Heritage & Culture Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mx-auto max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Heritage &amp; Culture</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Explore the cultural richness and heritage landmarks around Wayanad
            </p>
          </div>
          <div className="grid gap-8">
            {heritageCulture.map((attraction, index) => (
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

      {/* Spiritual & Leisure Experiences Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 mx-auto max-w-2xl">
            <h2 className="text-4xl font-serif font-bold mb-6">Spiritual &amp; Leisure Experiences</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Rejuvenate with serene spiritual spots and peaceful leisure escapes around Wayanad
            </p>
          </div>
          <div className="grid gap-8">
            {spiritualLeisureExperiences.map((attraction, index) => (
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

      {/* Exploration Base Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="relative h-80 lg:h-full min-h-[320px]">
              <Image
                src={heroImage}
                alt="Your Perfect Base for Exploration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <h2 className="text-4xl font-serif font-bold mb-6">Your Perfect Base for Exploration</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With its prime location, The Sanihara allows guests to explore multiple destinations with ease, making
                it ideal for curated 2-4 day itineraries. From short visits to full-day excursions, every experience
                is within comfortable reach, ensuring a seamless and enriching stay in Wayanad.
              </p>
            </div>
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
