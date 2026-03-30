"use client";

import { Users, Monitor, Sun, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-resort.jpg";

export default function Events() {
  const venues = [
    {
      name: "Grand Ballroom",
      area: "5,000 sq ft",
      capacities: {
        theatre: 500,
        banquet: 350,
        cocktail: 600,
      },
      features: [
        "Full AV Equipment",
        "Professional Stage",
        "Natural Daylight",
        "Climate Control",
        "Elegant Chandeliers",
      ],
      ideal: "Weddings, Conferences, Large Events",
      image: heroImage,
      icon: Building,
    },
    {
      name: "Executive Conference Hall",
      area: "2,000 sq ft",
      capacities: {
        theatre: 150,
        boardroom: 50,
        classroom: 80,
      },
      features: [
        "Video Conferencing",
        "High-Speed Internet",
        "Projector & Screen",
        "Whiteboard",
        "Conference Phones",
      ],
      ideal: "Corporate Meetings, Seminars, Training",
      image: heroImage,
      icon: Monitor,
    },
    {
      name: "Garden Lawn",
      area: "8,000 sq ft",
      capacities: {
        cocktail: 400,
        banquet: 200,
      },
      features: [
        "Open-Air Setting",
        "Gazebo Structure",
        "Evening Lighting",
        "Tropical Landscaping",
        "Mountain Backdrop",
      ],
      ideal: "Outdoor Weddings, Garden Parties",
      image: heroImage,
      icon: Sun,
    },
    {
      name: "Rooftop Terrace",
      area: "3,000 sq ft",
      capacities: {
        cocktail: 200,
        banquet: 120,
      },
      features: [
        "Panoramic Views",
        "Retractable Canopy",
        "Bar Setup",
        "Ambient Lighting",
        "DJ Console",
      ],
      ideal: "Cocktail Parties, Reception, Social Events",
      image: heroImage,
      icon: Users,
    },
    {
      name: "Private Board Room",
      area: "800 sq ft",
      capacities: {
        boardroom: 20,
      },
      features: [
        "Executive Setting",
        "Smart Board",
        "High-Speed Internet",
        "Video Conferencing",
        "Privacy",
      ],
      ideal: "Executive Meetings, Board Sessions",
      image: heroImage,
      icon: Monitor,
    },
  ];

  const services = [
    "Professional Catering Services",
    "Custom Event Decoration",
    "Advanced AV Equipment",
    "Dedicated Event Coordinator",
    "Valet Parking Service",
    "Accommodation Packages",
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Events & Celebrations
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Create unforgettable moments in stunning venues
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {venues.map((venue, index) => {
              const Icon = venue.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative h-80 lg:h-auto">
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-brand" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-3xl font-serif font-bold mb-2">{venue.name}</h2>
                          <p className="text-muted-foreground">{venue.area}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Capacity Configurations</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {Object.entries(venue.capacities).map(([type, capacity]) => (
                            <div key={type} className="bg-secondary/50 rounded-lg p-3 text-center">
                              <p className="text-2xl font-bold text-brand">{capacity}</p>
                              <p className="text-sm text-muted-foreground capitalize">{type}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">Features</h3>
                        <div className="flex flex-wrap gap-2">
                          {venue.features.map((feature, i) => (
                            <span
                              key={i}
                              className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Ideal For</h3>
                        <p className="text-muted-foreground">{venue.ideal}</p>
                      </div>

                      <Button variant="brand" size="lg">
                        Request Proposal
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Event Services</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our experienced event team ensures every detail is perfect, from planning to execution
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300"
                >
                  <p className="font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Plan Your Event with Us</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let our expert event planners help create an unforgettable experience for your special occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
              Download Brochure
            </Button>
            <Button variant="brand" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
