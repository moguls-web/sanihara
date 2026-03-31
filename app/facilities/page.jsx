"use client";

import { Waves, Sparkles, Dumbbell, Baby, Briefcase, Car, Wifi, Coffee, Heart, Plane } from "lucide-react";
import Image from "next/image";
import poolImage from "@/assets/pool-infinity.jpg";

export default function Facilities() {
  const facilities = [
    {
      icon: Sparkles,
      name: "Recreation & Wellness – The Sanihara",
      description:
        "At The Sanihara, we offer a thoughtfully curated selection of recreational and wellness facilities, ensuring a well-balanced stay that combines relaxation, fitness, and leisure for guests of all ages.",
      details: ["Curated Leisure Facilities", "Wellness Experiences", "Family-Friendly Spaces", "Balanced Stay"],
      hours: "All Day",
      charge: "Included for Guests",
      image: poolImage,
    },
    {
      icon: Sparkles,
      name: "Ayurveda Treatment & Wellness Center",
      description:
        "Indulge in holistic rejuvenation with traditional Ayurvedic therapies designed to restore balance and enhance well-being. Our wellness center provides a variety of treatments performed by trained professionals in a serene and therapeutic environment.",
      details: ["Traditional Ayurvedic Therapies", "Professional Therapists", "Holistic Rejuvenation", "Serene Ambience"],
      hours: "9:00 AM - 9:00 PM",
      charge: "Charges Apply",
      image: poolImage,
    },
    {
      icon: Waves,
      name: "Swimming Pool",
      description:
        "Our pristine swimming pool offers the perfect space to relax and unwind. Whether you’re looking to refresh or simply enjoy some leisure time, this tranquil setting is ideal for all guests.",
      details: ["Pristine Pool Area", "Leisure & Relaxation", "Guest-Friendly Setting", "Family Enjoyment"],
      hours: "6:00 AM - 10:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Dumbbell,
      name: "Gymnasium",
      description:
        "Stay on track with your fitness routine in our fully equipped gymnasium. Designed to accommodate a wide range of workouts, it provides a comfortable and functional space for all your fitness needs.",
      details: ["Fully Equipped Gym", "Workout Flexibility", "Functional Fitness Space", "Comfortable Environment"],
      hours: "6:00 AM - 10:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Baby,
      name: "Children’s Playground",
      description:
        "Our dedicated outdoor play area offers younger guests a safe and engaging space to enjoy recreational activities, making it the perfect spot for families to spend time together.",
      details: ["Safe Outdoor Play Area", "Family-Friendly Zone", "Engaging Activities", "Ideal for Kids"],
      hours: "8:00 AM - 8:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Briefcase,
      name: "Indoor Recreational Center",
      description:
        "Enjoy a variety of indoor games such as table tennis, carrom, chess, and Ludo. This space is designed for relaxation and friendly competition, perfect for families and groups.",
      details: ["Table Tennis", "Carrom & Chess", "Ludo", "Family & Group Fun"],
      hours: "9:00 AM - 9:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Car,
      name: "Outdoor Games Area",
      description:
        "Our expansive outdoor sports area offers plenty of space for group activities, including basketball, football, cricket, and badminton, ensuring fun and active experiences for all.",
      details: ["Basketball & Football", "Cricket & Badminton", "Group Activities", "Active Experiences"],
      hours: "6:00 AM - 7:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Heart,
      name: "Jogging Track",
      description:
        "Our well-defined jogging track provides a peaceful environment for your morning or evening walks, surrounded by the natural beauty of our property.",
      details: ["Dedicated Track", "Morning & Evening Use", "Nature-Facing Route", "Relaxing Ambience"],
      hours: "6:00 AM - 8:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Wifi,
      name: "Bicycling",
      description:
        "Explore the scenic surroundings of The Sanihara with our bicycling facilities, offering a refreshing and active way to experience the property.",
      details: ["Scenic Cycling Routes", "Active Exploration", "Leisure Riding", "Guest-Friendly Access"],
      hours: "6:00 AM - 6:00 PM",
      charge: "Complimentary",
      image: poolImage,
    },
    {
      icon: Coffee,
      name: "Campfire with Music",
      description:
        "As the evening sets in, enjoy a curated campfire experience, complete with music, creating the perfect atmosphere for a relaxed and memorable social gathering.",
      details: ["Curated Campfire Setup", "Music Experience", "Evening Social Ambience", "Memorable Gatherings"],
      hours: "Evenings",
      charge: "Charges Apply",
      image: poolImage,
    },
    {
      icon: Heart,
      name: "Candlelight Dinner",
      description:
        "For special occasions or intimate celebrations, indulge in a customized candlelight dinner that promises an unforgettable and private dining experience.",
      details: ["Customized Setup", "Private Dining Experience", "Ideal for Celebrations", "Romantic Ambience"],
      hours: "On Request",
      charge: "Charges Apply",
      image: poolImage,
    },
    {
      icon: Plane,
      name: "Large Outdoor Garden",
      description:
        "Our expansive, well-maintained garden provides a beautiful and serene space for relaxation, leisurely walks, and outdoor gatherings.",
      details: ["Expansive Green Space", "Leisure Walks", "Outdoor Gatherings", "Serene Environment"],
      hours: "All Day",
      charge: "Complimentary",
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
            <p className="text-center text-muted-foreground"> At The Sanihara, each facility is thoughtfully designed to enhance comfort and engagement, ensuring your stay is well-rounded, rejuvenating, and memorable. </p>
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
