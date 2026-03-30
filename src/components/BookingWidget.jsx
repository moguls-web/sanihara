"use client";

import { useState } from "react";
import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");

  const handleCheckAvailability = () => {
    if (!checkIn || !checkOut || !roomType) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Checking availability...", {
      description: "We'll redirect you to the booking page shortly.",
    });
  };

  return (
    <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-elegant p-6 md:p-8">
      <h3 className="text-xl font-serif font-semibold mb-6 text-center">Check Availability</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="relative">
          <label className="text-sm font-medium mb-2 block">Check-in</label>
          <div className="relative">
            <Input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-2 block">Check-out</label>
          <div className="relative">
            <Input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="pl-10"
            />
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="relative">
          <label className="text-sm font-medium mb-2 block">Guests</label>
          <div className="relative">
            <Input
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="pl-10"
            />
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Room Type</label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger>
              <SelectValue placeholder="Select room" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="premier">Premier Room</SelectItem>
              <SelectItem value="royal">Royal Classic Room</SelectItem>
              <SelectItem value="family">Family Villa</SelectItem>
              <SelectItem value="presidential">Presidential Villa</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button variant="brand" size="lg" className="w-full" onClick={handleCheckAvailability}>
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;

