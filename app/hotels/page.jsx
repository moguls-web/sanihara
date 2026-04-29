import Image from "next/image";
import Link from "next/link";
import { MapPin, Train } from "lucide-react";
import hotelOne from "@/assets/suite-luxury.jpg";
import hotelTwo from "@/assets/pool-infinity.jpg";
import hotelThree from "@/assets/dining-restaurant.jpg";

const hotels = [
  {
    id: "the-sanihara-hotel-resort",
    name: "The Sanihara Hotel & Resort",
    image: hotelOne,
    description:
      "A premium city-side destination designed for comfort, convenience, and memorable stays.",
    airportDistance: "9 km",
    railDistance: "7 km",
  },
  {
    id: "misty-heights-by-the-sanihara",
    name: "Misty Heights By the Sanihara",
    image: hotelTwo,
    description:
      "A scenic retreat with peaceful surroundings, ideal for nature lovers and family holidays.",
    airportDistance: "27 km",
    railDistance: "12 km",
  },
  {
    id: "guest-house-555-nkl",
    name: "Guest House 555 NKI",
    image: hotelThree,
    description:
      "A warm and practical stay option with smart amenities for business and leisure travelers.",
    airportDistance: "12 km",
    railDistance: "11 km",
  },
  {
    id: "555-nangka-guest-house",
    name: "555 Nangka Guest House",
    image: hotelOne,
    description:
      "A cozy guest house experience offering value, hospitality, and easy local access.",
    airportDistance: "10 km",
    railDistance: "8 km",
  },
];

export default function HotelsPage() {
  return (
    <main className="min-h-screen pt-20">
        <section className="bg-primary text-primary-foreground py-20">
            <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            All Our Properties
            </h1>
            <div className="h-[3px] w-20 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
            <p className="text-xl md:text-2xl opacity-90 animate-fade-in mt-2">
            Elevated stays amidst the rainforest of Wayanad
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4"> 

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
            {hotels.map((hotel) => (
              <article
                key={hotel.id}
                className="bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-96 w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#2c2c2c] mb-3">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {hotel.description}
                  </p>

                  <div className="space-y-2 mb-6 text-sm text-neutral-700">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#b43a3a]" />
                        Airport:
                      </span>
                      <span>{hotel.airportDistance}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2">
                        <Train className="h-4 w-4 text-[#b43a3a]" />
                        Railway Station:
                      </span>
                      <span>{hotel.railDistance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={`/hotels/${hotel.id}`}
                      className="text-[#b43a3a] font-medium hover:underline underline-offset-4"
                    >
                      Explore Property →
                    </Link>
                    <button
                      type="button"
                      className="px-5 py-2 rounded-full bg-[#f58220] text-white text-sm font-medium hover:bg-[#df741a] transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}