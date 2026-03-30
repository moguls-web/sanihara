"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const locations = [
  { name: "Lakkidi, Wayanad", slug: "lakkidi" },
  { name: "Vythiri, Wayanad", slug: "vythiri" },
  { name: "Kalpetta, Wayanad", slug: "kalpetta" },
];

export const LocationSelector = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="hidden md:inline">Lakkidi</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {locations.map((location) => (
          <DropdownMenuItem key={location.slug} className="cursor-pointer">
            <MapPin className="h-4 w-4 mr-2" />
            {location.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

