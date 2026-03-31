"use client";

import { Users, Monitor, Sun, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-resort.jpg";

export default function Events() {
  const venues = [
    {
      name: "Conference Hall",
      area: "5,000 sq ft",
      description: "The Conference Hall, with a seating capacity of up to 150 guests, is ideal for corporate meetings, seminars, training sessions, and mid-scale events. Its adaptable layout provides a professional environment, prioritizing both comfort and productivity.",
      capacities: {
        theatre: 500,
        banquet: 350,
        cocktail: 600,
      },
      features: [
        "Capacity: Up to 150 guests",
        "Perfect for meetings, conferences, and seminars",
        "Flexible seating arrangements",
        "Dedicated service support", 
      ],
      ideal: "Weddings, Conferences, Large Events",
      image: heroImage,
      icon: Building,
    }, 


    {
      name: "Mini Conference Hall",
      area: "5,000 sq ft",
      description: "Designed for smaller gatherings, the Mini Conference Hall accommodates up to 75 guests. It’s the perfect choice for intimate meetings, workshops, and private business discussions, offering a focused and efficient space for your corporate needs.",
      capacities: {
        theatre: 500,
        banquet: 350,
        cocktail: 600,
      },
      features: [
        "Capacity: Up to 75 guests",
        "Ideal for small meetings and workshops",
        "Organized and functional layout",
        "Personalized service support", 
      ],
      ideal: "Weddings, Conferences, Large Events",
      image: heroImage,
      icon: Building,
    }, 

    {
      name: "Open Wedding & Event Space",
      area: "5,000 sq ft",
      description: "Our expansive open-air venue offers the perfect setting for grand events, with a capacity to host up to 1,000 guests. Whether it’s a wedding, reception, or large social gathering, this space provides flexibility for customized décor, stage setups, and catering arrangements.",
      capacities: {
        theatre: 500,
        banquet: 350,
        cocktail: 600,
      },
      features: [
        "Capacity: Up to 1,000 guests",
        "Perfect for weddings, receptions, and large events",
        "Spacious and flexible layout",
        "Ideal for customized themes and setups", 
      ],
      ideal: "Weddings, Conferences, Large Events",
      image: heroImage,
      icon: Building,
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
          Meetings & Events – The Sanihara
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
          At The Sanihara, we offer versatile event spaces designed to host corporate functions, social
              gatherings, and grand celebrations with efficiency and elegance. Our venues are equipped with
              professional service, flexible seating options, and essential event infrastructure, ensuring a flawless
              experience every time.
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
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={`p-8 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
                        <h3 className="font-bold tracking-wider mb-3 text-xl uppercase">Capacity Configurations</h3>
                        <p className="text-muted-foreground pb-10">{venue.description}</p>
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
