"use client";

import { useState } from "react";
import RoomCard from "@/components/RoomCard";
import { roomCategories, getRoomSlides } from "@/data/sanihara-rooms";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Suites() {
  const [sortBy, setSortBy] = useState("featured");

  const sortedRooms = [...roomCategories].sort((a, b) => {
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
            Rooms
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedRooms.map((room) => (
              <RoomCard
                key={room.id}
                {...room}
                slides={getRoomSlides(room.id)}
              />
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
            Every room is thoughtfully appointed with premium amenities to ensure a relaxing stay, including complimentary Wi-Fi, dedicated housekeeping services, and Standard toiletries. For your convenience, our standard check-in time is 2:00 PM, and check-out is at 12:00 PM.

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

