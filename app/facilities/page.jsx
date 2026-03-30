"use client";

import { Waves, Sparkles, Dumbbell, Baby, Briefcase, Car, Wifi, Coffee, Heart, Plane } from "lucide-react";
import Image from "next/image";
import poolImage from "@/assets/pool-infinity.jpg";

export default function Facilities() {
  const facilities = [
    {
      icon: Waves,
      name: "Swimming Pool",
      description: "Olympic-size heated infinity pool with stunning mountain views",
      details: ["Heated Water", "Poolside Bar", "Loungers & Cabanas", "Pool Towels"],
      hours: "6:00 AM - 10:00 PM",
      charge: "Complimentary for Guests",
      image: poolImage,
    },
    {
      icon: Sparkles,
      name: "Spa & Wellness",
      description: "Rejuvenate with traditional Ayurvedic treatments and modern therapies",
      details: ["Ayurvedic Massage", "Steam & Sauna", "Yoga Studio", "Meditation Garden"],
      hours: "9:00 AM - 9:00 PM",
      charge: "Charges Apply",
      image: poolImage,
    },
    {
      icon: Dumbbell,
      name: "Fitness Centre",
      description: "State-of-the-art equipment and personal training services",
      details: ["Modern Equipment", "Personal Trainer", "Yoga Classes", "Cardio Zone"],
      hours: "24/7",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Baby,
      name: "Kids Play Area",
      description: "Safe and supervised play zone for children aged 3-12 years",
      details: ["Indoor Games", "Outdoor Playground", "Kids Pool", "Supervised Activity"],
      hours: "8:00 AM - 8:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Briefcase,
      name: "Business Centre",
      description: "Fully-equipped workspace with high-speed internet and printing",
      details: ["Workstations", "Printing Services", "Meeting Rooms", "Video Conferencing"],
      hours: "24/7",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Car,
      name: "Parking & Valet",
      description: "Spacious parking with complimentary valet service",
      details: ["100+ Spaces", "Valet Service", "Self-Parking", "EV Charging"],
      hours: "24/7",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Wifi,
      name: "Free WiFi",
      description: "High-speed internet access throughout the property",
      details: ["All Areas", "Unlimited", "High Speed", "Secure Connection"],
      hours: "24/7",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Coffee,
      name: "24/7 Room Service",
      description: "Round-the-clock in-room dining and concierge services",
      details: ["Full Menu", "Quick Service", "Special Requests", "Concierge"],
      hours: "24/7",
      charge: "Menu Prices",
      image: poolImage,
    },
    {
      icon: Heart,
      name: "Concierge Services",
      description: "Personalized assistance for all your needs during your stay",
      details: ["Tour Booking", "Transportation", "Restaurant Reservations", "Special Arrangements"],
      hours: "24/7",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Plane,
      name: "Airport Transfer",
      description: "Premium vehicles for comfortable airport pickup and drop-off",
      details: ["Luxury Vehicles", "Professional Drivers", "Meet & Greet", "Luggage Assistance"],
      hours: "On Request",
      charge: "Charges Apply",
      image: poolImage,
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Amenities & Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Everything you need for a perfect stay
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 bg-card rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden`}
                >
                  <div className="lg:w-2/5 h-80 lg:h-auto relative">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:w-3/5 p-8 flex flex-col justify-center space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8 text-brand" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-serif font-bold mb-2">{facility.name}</h2>
                        <p className="text-muted-foreground text-lg">{facility.description}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {facility.details.map((detail, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-brand" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Hours</p>
                        <p className="font-semibold">{facility.hours}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Access</p>
                        <p className="font-semibold text-brand">{facility.charge}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Additional Services</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We go above and beyond to ensure your comfort and convenience
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Laundry & Dry Cleaning</h3>
                <p className="text-sm text-muted-foreground">Same-day service available</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Currency Exchange</h3>
                <p className="text-sm text-muted-foreground">Competitive rates</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Doctor on Call</h3>
                <p className="text-sm text-muted-foreground">24/7 medical assistance</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-semibold mb-2">Pet Friendly</h3>
                <p className="text-sm text-muted-foreground">Designated pet rooms</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
