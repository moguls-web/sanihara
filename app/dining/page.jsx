"use client";

import { Clock, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import diningImage from "@/assets/dining-restaurant.jpg";

export default function Dining() {
  const restaurants = [
    {
      name: "Sofy's Multi-Cuisine",
      description: "Fine dining experience featuring Continental and Indian delicacies in an elegant setting",
      cuisine: "Continental & Indian",
      seating: 50,
      timing: "7:00 PM - 11:00 PM",
      image: diningImage,
      specialties: ["Malabar Fish Curry", "Tenderloin Steak", "Wood-Fired Pizza"],
      dietaryOptions: ["Vegetarian", "Vegan", "Gluten-Free"],
    },
    {
      name: "All-Day Café",
      description: "Casual multi-cuisine dining with a relaxed ambiance, perfect for any time of day",
      cuisine: "Multi-Cuisine",
      seating: 80,
      timing: "7:00 AM - 11:00 PM",
      image: diningImage,
      specialties: ["Breakfast Buffet", "Club Sandwiches", "Kerala Thali"],
      dietaryOptions: ["Vegetarian", "Jain"],
    },
    {
      name: "Rooftop Lounge",
      description: "Evening cocktails and grills with breathtaking panoramic mountain views",
      cuisine: "Bar & Grill",
      seating: 60,
      timing: "6:00 PM - 1:00 AM",
      image: diningImage,
      specialties: ["Signature Cocktails", "BBQ Platter", "Live Music Weekends"],
      dietaryOptions: ["Vegetarian"],
    },
    {
      name: "Poolside Café",
      description: "Light bites and refreshing beverages in a relaxed outdoor setting",
      cuisine: "Light Bites & Beverages",
      seating: 40,
      timing: "10:00 AM - 7:00 PM",
      image: diningImage,
      specialties: ["Fresh Juices", "Grilled Sandwiches", "Ice Cream"],
      dietaryOptions: ["Vegetarian", "Vegan"],
    },
    {
      name: "In-Room Dining",
      description: "24-hour service with full menu available in the comfort of your suite or villa",
      cuisine: "All Cuisines",
      seating: 0,
      timing: "24/7",
      image: diningImage,
      specialties: ["Breakfast in Bed", "Private Dining", "Custom Menus"],
      dietaryOptions: ["All Available"],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Culinary Delights
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Exquisite flavors in stunning settings
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-hover group">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-4xl font-serif font-bold mb-3">{restaurant.name}</h2>
                    <p className="text-lg text-muted-foreground">{restaurant.description}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Utensils className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Cuisine</p>
                        <p className="font-semibold">{restaurant.cuisine}</p>
                      </div>
                    </div>

                    {restaurant.seating > 0 && (
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                          <Users className="h-6 w-6 text-brand" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Seating</p>
                          <p className="font-semibold">{restaurant.seating} Seats</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-3 sm:col-span-2">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-brand" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Timings</p>
                        <p className="font-semibold">{restaurant.timing}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, i) => (
                        <Badge key={i} variant="secondary" className="px-3 py-1">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Dietary Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.dietaryOptions.map((option, i) => (
                        <Badge key={i} className="bg-brand/10 text-brand px-3 py-1">
                          {option}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="brand" size="lg">
                    Reserve Table
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Chef's Special</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our expert culinary team crafts exceptional dishes using the freshest local ingredients and authentic
              Kerala spices, combined with international flavors to create memorable dining experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Local Ingredients</h3>
                <p className="text-muted-foreground">Sourced from Wayanad's organic farms</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
                <p className="text-muted-foreground">Trained in international cuisine</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Custom Menus</h3>
                <p className="text-muted-foreground">Tailored to your preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
