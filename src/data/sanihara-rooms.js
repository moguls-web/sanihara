import suiteImage from "@/assets/suite-luxury.jpg";
import poolImage from "@/assets/pool-infinity.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";

export const roomSlides = [suiteImage, poolImage, diningImage];
export const acRoomSlides = [poolImage, suiteImage, diningImage];
export const gardenViewSlides = [suiteImage, diningImage, poolImage];

export const roomCategories = [
    {
        id: "twinNonAC",
        name: "Twin Room (Non Air-Conditioned)",
        subheading: "The Perfect Space for Friends or Small Families",
        description:
            "Ideal for friends, colleagues, and travelers who prefer separate sleeping arrangements. A comfortable and affordable stay surrounded by the natural beauty of Wayanad.",
        image: suiteImage,
        price: 8500,
        capacity: 2,
        size: 280,
        amenities: ["2 Large Single Beds", "Non Air-Conditioned"],
    },
    {
        id: "doubleNonAC",
        name: "Double Room (Non Air-Conditioned)",
        subheading: "Elegant Simplicity for a Comfortable Stay",
        description:
            "A comfortable and affordable choice for couples and solo travelers looking for a relaxing stay surrounded by nature.",
        image: suiteImage,
        price: 5000,
        capacity: 2,
        size: 280,
        amenities: ["1 Queen Bed", "Non Air-Conditioned"],
    },
    {
        id: "tripleNonAC",
        name: "Triple Room (Non Air-Conditioned)",
        subheading: "Ample Space for Families and Small Groups",
        description:
            "Perfect for small families, friends, colleagues, bikers, and hikers — offering comfortable accommodation for up to three guests.",
        image: suiteImage,
        price: 10000,
        capacity: 3,
        size: 280,
        amenities: ["1 Queen Bed + 1 Large Single Bed", "Non Air-Conditioned"],
    },
    {
        id: "family4sharingNonAC",
        name: "Family 4-Sharing Room (Non Air-Conditioned)",
        subheading: "A Perfect Family Getaway",
        description:
            "Designed for families and small groups, these spacious rooms offer the ideal balance of comfort and convenience for a memorable stay.",
        image: suiteImage,
        price: 25000,
        capacity: 4,
        size: 516,
        amenities: ["1 Queen Bed + 2 Large Single Beds", "Non Air-Conditioned"],
    },
    {
        id: "largeFamily6sharingNonAC",
        name: "Large Family 6-Sharing Room (Non Air-Conditioned)",
        subheading: "The Ultimate Family Space for a Comfortable Stay",
        description:
            "An excellent choice for larger families and groups wishing to stay together, offering generous space and comfort without compromise.",
        image: suiteImage,
        price: 25000,
        capacity: 6,
        size: 775,
        amenities: ["2 Queen Beds + 2 Large Single Beds", "Non Air-Conditioned"],
    },
    {
        id: "classicTwinAC",
        name: "Classic Twin Room (Air-Conditioned)",
        subheading: "Relaxing and Comfortable for Two",
        description:
            "A comfortable air-conditioned room featuring twin beds, ideal for friends, colleagues, or family members traveling together.",
        image: poolImage,
        price: 25000,
        capacity: 2,
        size: 269,
        amenities: ["2 Single Beds", "Air-Conditioned"],
    },
    {
        id: "classicDoubleAC",
        name: "Classic Double Room (Air-Conditioned)",
        subheading: "Sophisticated Comfort and Style",
        description:
            "Enjoy enhanced comfort with air-conditioning and modern amenities. Perfect for couples seeking a relaxing and refreshing stay in Wayanad.",
        image: poolImage,
        price: 25000,
        capacity: 2,
        size: 269,
        amenities: ["1 Queen Bed", "Air-Conditioned"],
    },
    {
        id: "classicTwinGardenViewAC",
        name: "Royal Classic Twin Room (Air-Conditioned)",
        subheading: "Peaceful Comfort with Garden Views",
        description:
            "Combining comfort, style, and convenience, this premium room category features twin bedding alongside serene views of The Sanihara's landscaped gardens.",
        image: suiteImage,
        price: 25000,
        capacity: 2,
        size: 269,
        amenities: ["2 Single Beds", "Garden View", "Air-Conditioned"],
    },
    {
        id: "classicDoubleGardenViewAC",
        name: "Royal Classic Double Room (Air-Conditioned)",
        subheading: "Serenity with a View",
        description:
            "Experience elevated comfort and elegance with beautiful views of The Sanihara's lush green gardens. Thoughtfully designed for a relaxing and memorable stay.",
        image: suiteImage,
        price: 25000,
        capacity: 2,
        size: 269,
        amenities: ["1 Queen Bed", "Garden View", "Air-Conditioned"],
    },
];

export const roomSlidesById = {
    twinNonAC: roomSlides,
    doubleNonAC: roomSlides,
    tripleNonAC: roomSlides,
    family4sharingNonAC: roomSlides,
    largeFamily6sharingNonAC: roomSlides,
    classicTwinAC: acRoomSlides,
    classicDoubleAC: acRoomSlides,
    classicTwinGardenViewAC: gardenViewSlides,
    classicDoubleGardenViewAC: gardenViewSlides,
};

export function getRoomSlides(id) {
    return roomSlidesById[id] || roomSlides;
}
