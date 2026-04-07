"use client";

import { useState } from "react";
import RoomCard from "@/components/RoomCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import suiteImage from "@/assets/suite-luxury.jpg";
import poolImage from "@/assets/pool-infinity.jpg";

export default function Suites() {
  const [sortBy, setSortBy] = useState("featured");

  const rooms = [
    {
      id: "doubleNonAC",
      name: "Double - Non AC",   
      subheading: "Elegant Simplicity for a Comfortable Stay",
      description: "Our Double Non-AC room provides a warm, cozy retreat with a spacious layout, offering a comfortable queen bed. Perfect for couples or solo travelers, this room ensures a restful and relaxing environment.",
      image: suiteImage,
      price: 5000,
      capacity: 2,
      size: 300,
      amenities: ["1 Queen Bed", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV" ],
    },
    {
      id: "twinNonAC",
      name: "Twin - Non AC",
      subheading: "The Perfect Space for Friends or Small Families",
      description: "Enjoy a comfortable and spacious stay in our Twin Non-AC room. With two super single beds, this room offers a relaxed environment for up to three guests. Whether you’re traveling with a friend or family.",
      image: suiteImage,
      price: 8500,
      capacity: 2,
      size: 500,
      amenities: ["2 Super Single Beds", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "tripleNonAC",
      name: "Triple – Non AC",
      subheading: "Ample Space for Families and Small Groups",
      description: "Our Triple Non-AC room is the perfect choice for families or small groups. With a queen bed and a super single bed, this spacious room comfortably accommodates up to four guests.",
      image: suiteImage,
      price: 10000,
      capacity: 4,
      size: 600,
      amenities: ["1 Queen Bed + 1 Super Single Bed", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },
    {
      id: "family4sharingNonAC",
      name: "Family 4-sharing – Non AC",
      subheading: "A Perfect Family Getaway",
      description: "Designed with families in mind, our Family 4-sharing Non-AC room offers a queen bed and two super single beds to comfortably accommodate up to five guests.",
      image: poolImage,
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["1 Queen Bed + 2 Super Single Beds", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },


    {
      id: "largeFamily6sharingNonAC",
      name: "Large Family 6-sharing – Non AC",
      subheading: "The Ultimate Family Space for a Comfortable Stay",
      description: "The Large Family 6-sharing Non-AC room is designed to comfortably accommodate larger families, with two queen beds and two super single beds, perfect for up to eight guests.",
      image: poolImage,
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["2 Queen Beds + 2 Super Single Beds", "Free WiFi", "Room Service", "Daily Housekeeping", "Cable TV"],
    },

    {
      id: "classicDoubleAC",
      name: "Classic Double – AC",
      subheading: "Sophisticated Comfort and Style",
      description: "The Classic Double AC room offers a luxurious and comfortable setting, featuring a queen bed and an air-conditioned environment. Whether you’re here for business or leisure.",
      image: poolImage,
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["1 Queen Bed", "Air Conditioning", "Free WiFi", "Room Service", "Daily Housekeeping"],
    },

    {
      id: "classicTwinAC",
      name: "Classic Twin – AC",
      subheading: "Relaxing and Comfortable for Two ",
      description: "Our Classic Twin AC room offers two single beds, ideal for friends or colleagues looking for a comfortable and relaxing space. With the perfect balance of comfort and convenience.",
      image: poolImage,
      price: 25000,
      capacity: 4,
      size: 1200,
      amenities: ["2 Single Beds", "Air Conditioning", "Free WiFi", "Room Service", "Daily Housekeeping"],
    },

    {
      id: "classicDoubleGardenViewAC",
      name: "Classic Double Garden View – AC",
      subheading: "Serenity with a View ",
      description: "Enjoy the tranquil garden views in our Classic Double Garden View. Featuring a queen bed, this room is the perfect place for couples or solo travelers who wish to experience relaxation in a serene environment.",
      image: poolImage,
      price: 25000,
      capacity: 4,
      size: 1200,      
      amenities: ["1 Queen Bed", "Garden View", "Air Conditioning", "Free WiFi", "Room Service"],
    },

    {
      id: "classicTwinGardenViewAC",
      name: "Classic Twin Garden View – AC",
      subheading: "Peaceful Comfort with Garden Views",
      description: "The Classic Twin Garden View room offers a relaxing space with two single beds and a picturesque view of the lush gardens. Ideal for friends or small families, this room combines the beauty of nature with the luxury of modern amenities.",
      image: poolImage,
      price: 25000,
      capacity: 4,
      size: 1200,      
      amenities: ["1 Queen Bed", "Garden View", "Air Conditioning", "Free WiFi", "Room Service"],
    },

  ];

  const sortedRooms = [...rooms].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "capacity") return b.capacity - a.capacity;
    return 0;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Suites & Villas
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Elevated stays amidst the rainforest of Wayanad
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-background border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">Showing {sortedRooms.length} suites & villas</p>
            <div className="flex items-center space-x-3">
              <label className="text-sm font-medium">Sort by:</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="capacity">Capacity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Your Perfect Stay Awaits</h2>
            <p className="text-muted-foreground mb-8">
              All our suites and villas feature premium amenities including complimentary WiFi, 24-hour room service,
              luxury toiletries, and breathtaking views of the surrounding rainforest. Check-in time is 2:00 PM and
              check-out is 12:00 PM.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl font-serif font-bold text-brand mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Room Service</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-brand mb-2">Free</p>
                <p className="text-sm text-muted-foreground">WiFi</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-brand mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-brand mb-2">5★</p>
                <p className="text-sm text-muted-foreground">Rated</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

