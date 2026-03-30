"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/assets/hero-resort.jpg";
import suiteImage from "@/assets/suite-luxury.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import poolImage from "@/assets/pool-infinity.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");

  const images = [
    { url: heroImage, category: "exterior", title: "Resort Exterior" },
    { url: suiteImage, category: "rooms", title: "Luxury Suite" },
    { url: diningImage, category: "dining", title: "Fine Dining" },
    { url: poolImage, category: "facilities", title: "Infinity Pool" },
    { url: heroImage, category: "events", title: "Grand Ballroom" },
    { url: suiteImage, category: "rooms", title: "Presidential Villa" },
    { url: diningImage, category: "dining", title: "Rooftop Lounge" },
    { url: poolImage, category: "facilities", title: "Pool at Sunset" },
    { url: heroImage, category: "surroundings", title: "Rainforest View" },
    { url: suiteImage, category: "rooms", title: "Royal Classic Room" },
    { url: diningImage, category: "dining", title: "Poolside Café" },
    { url: poolImage, category: "facilities", title: "Spa & Wellness" },
    { url: heroImage, category: "events", title: "Garden Lawn Wedding" },
    { url: suiteImage, category: "events", title: "Conference Hall" },
    { url: diningImage, category: "exterior", title: "Hilltop View" },
    { url: poolImage, category: "surroundings", title: "Mountain Vista" },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "rooms", label: "Rooms" },
    { id: "dining", label: "Dining" },
    { id: "facilities", label: "Facilities" },
    { id: "events", label: "Events" },
    { id: "exterior", label: "Exterior" },
    { id: "surroundings", label: "Surroundings" },
  ];

  const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">Our Gallery</h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Explore the beauty of The Sanihara
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "brand" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-hover transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.title}</p>
                    <p className="text-white/80 text-sm capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-full max-h-full">
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
