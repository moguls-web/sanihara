"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const RoomCard = ({ id, name, description, image, price, capacity, size, amenities }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-brand text-brand-foreground px-4 py-2 rounded-full font-semibold">
          ₹{price.toLocaleString()}/night
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{capacity} Guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="h-4 w-4" />
            <span>{size} sq ft</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
          {amenities.length > 3 && (
            <span className="text-xs text-muted-foreground px-3 py-1">
              +{amenities.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex space-x-3">
        <Button variant="outline" size="default" className="flex-1" asChild>
          <Link href={`/suites/${id}`}>View Details</Link>
        </Button>
        <Button variant="brand" size="default" className="flex-1">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;

