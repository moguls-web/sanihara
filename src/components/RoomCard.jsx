"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RoomCard = ({ id, name, subheading, description, image, slides, price, capacity, size, amenities }) => {
  const images = slides?.length ? slides : image ? [image] : [];

  return (
    <Card className="group h-full flex flex-col overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-64 shrink-0 overflow-hidden">
        {images.length > 1 ? (
          <Carousel opts={{ align: "start", loop: true }} autoScrollMs={3200} className="h-full">
            <CarouselContent className="ml-0 h-full">
              {images.map((slide, slideIndex) => (
                <CarouselItem key={`${name}-${slideIndex}`} className="pl-0 h-full">
                  <div className="relative h-64">
                    <Image
                      src={slide}
                      alt={`${name} image ${slideIndex + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-black/40 border-white/30 text-white hover:bg-black/60" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 bg-black/40 border-white/30 text-white hover:bg-black/60" />
          </Carousel>
        ) : images.length === 1 ? (
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : null}
        <div className="absolute top-4 right-4 z-10 bg-brand text-brand-foreground px-4 py-2 rounded-full font-semibold text-sm">
          ₹{price.toLocaleString()}/night
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-serif font-semibold mb-2">{name}</h3>
        {subheading && <p className="text-sm font-bold text-brand pb-5">{subheading}</p>}
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
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
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto flex space-x-3">
        <Button variant="outline" size="default" className="flex-1 text-white" asChild>
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

