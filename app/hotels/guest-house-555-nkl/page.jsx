import Image from "next/image";
import suiteImage from "@/assets/suite-luxury.jpg";
import poolImage from "@/assets/pool-infinity.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const freeImages = {
    hero: "/misty-banner.webp",
    introOne: "/mist-skyview-1.webp",
    introTwo: "/46578.webp",
    introThree: "/Bungalow-downstairs2.webp",
    gazebo: "/89456.jpg",
    pool: "/Swimming-pool.webp",
    deck: "/Panoramic-View-Deck.webp",
    kids: "/039ac7f6.webp",
    bonfire: "/3271b747.webp",
    badminton: "/Badminton.webp",
    nature: "/Environment.webp",
    blobCoffeeBar: "/blob-coffee-bar.webp",
    inRoomDining: "/In-Room-Dining.webp",
    gymnasium: "/gymnasium.webp",
    joggingTracks: "/JOGGING-TRACK.webp",
    dailyHousekeeping: "/daily-housekeeping.webp",
    Mushola: "/Mushola.webp",

};

export const metadata = {
    title:
        "Guest House 555 NKI | The Sanihara | Comfortable Stay for Business & Leisure",
    description:
        "Stay at Guest House 555 NKI — a warm and practical stay option with smart amenities for business and leisure travelers. Book your stay with The Sanihara today.",
};

const roomCategories = [
    {
        title: "Superior Room ( Modern Comforts, Aesthetic Design )",
        description:
            "Enjoy the lush green views from our spacious Superior Room, which pairs twin beds with a cozy design. Relax with modern essentials like a smart TV, air conditioning, and seamless Wi-Fi.",
        details: [
            "Occupancy: 2 Adults",
            "Size: 16 m²",
            "Bed Type: 2 Twin Beds",
            "Mini Fridge",
            "Water Heater",
            "Room Service",
            "Bottled Water",
            "Workstation",
            "Wardrobe",
        ],
    },
    {
        title: "Executive Duplex Room ( Mezzanine Living, Redefined )",
        description:
            "Our Executive Duplex offers a modern, split-level layout that gives you separate areas for relaxing, sleeping, and working. Designed for four, it provides ample storage and split bathroom facilities for convenient, simultaneous use.",
        details: [
            "Occupancy: 4 Adults",
            "Size: 26 m²",
            "Bed Type: 2 Twin Beds",
            "2 Sofa Beds",
            "Free Wifi",
            "Air conditioning",
            "Smart TV",
            "Mini Fridge",
            "Water Heater",
            "Room Service",
            "Bottled Water",
            "Workstation",
            "Wardrobe",
        ],
    },
];

const highlights = [
    {
        title: "Blob Coffee Bar",
        subtitle: "Your open-air hangout at the Guest House.",
        image: freeImages.blobCoffeeBar,
        description:
            "Blob Coffee Bar is all about that easy-going, al fresco life. Located right in the heart of the Guest House, it's a wall-free sanctuary where you can catch the breeze and watch the world go by. Whether you need a 6:00 AM caffeine kickstart or a 10:30 PM wind-down, we're open from 6:00 AM to 11:00 PM to keep the good times (and the coffee) flowing.",
        headingBullets: "The Lowdown:",
        bullets: [
            { label: "Al Fresco Chill", text: "Relaxed outdoor seating with a tropical, open-air vibe." },
            { label: "Coffee & More", text: "Expertly brewed coffee, refreshing teas, and chilled drinks." },
            { label: "All-Day Fix", text: "Serving you from 6:00 AM to 11:00 PM daily." },
        ],
    },
    {
        title: "In-Room Dining",
        subtitle: "The best of the cafe, delivered to your door.",
        image: freeImages.inRoomDining, 
        description:
            "Sometimes you just want to stay in your own bubble. Our In-Room Dining service brings the casual flavors of the Guest House straight to your room. No need to dress up or head out-we’ll bring the food to you so you can enjoy your meal in total peace.",
        headingBullets: "Why Order In? ",
        bullets: [
            { label: "Ultimate Comfort", text: "Great food in the privacy of your own space." },
            { label: "Early to Late", text: "Available every day from 6:00 AM to 11:00 PM." },
            { label: "Diverse Menu", text: "Choose from our full range of snacks, mains, and those healthy 'Chef's Specials' like our red rice dishes." },
        ],
    },
    {
        title: "Gymnasium", 
        image: freeImages.gymnasium, 
        description: "Stay on track with your fitness routine in our fully equipped gymnasium. Designed to accommodate a wide range of workouts, it provides a comfortable and functional space for all your fitness needs.",
        
    },
    {
        title: "Jogging Tracks", 
        image: freeImages.joggingTracks,
        description: "Immerse yourself in nature along our scenic path. You can enjoy an energizing run around the guest house, fully surrounded by a lush, green environment designed for your outdoor wellness.",
         
    },
    {
        title: "Daily Housekeeping Service", 
        image: freeImages.dailyHousekeeping,
        description: "Enjoy the luxury of a fresh space every day. While we offer the charm of a guest house, we provide premium hotel facilities, including professional daily housekeeping for your comfort.",
        
    },
    {
        title: "Mushola ( Muslim Prayer Room )",
         
        image: freeImages.Mushola,
        description: "Experience a moment of quiet reflection in our glass-walled Mushola. This serene space offers a peaceful city view, providing a calm and beautiful setting for your daily prayers.",
         
    }, 

];

const roomSlides = [suiteImage, poolImage, diningImage];
const superiorRoomSlides = [
    "/rooms/nki/Superior-Room/Superior-Room-nki-1.webp",
    "/rooms/nki/Superior-Room/Superior-Room-nki-2.webp",
    "/rooms/nki/Superior-Room/Superior-Room-nki-3.webp",
    "/rooms/nki/Superior-Room/Superior-Room-nki-4.webp",
];
const executiveDuplexRoomSlides = [
    "/rooms/nki/Executive-Duplex-Room/Executive-Duplex-Room-nki-1.webp",
    "/rooms/nki/Executive-Duplex-Room/Executive-Duplex-Room-nki-2.webp",
    "/rooms/nki/Executive-Duplex-Room/Executive-Duplex-Room-nki-3.webp",
    "/rooms/nki/Executive-Duplex-Room/Executive-Duplex-Room-nki-4.webp",
];

const roomSlidesByTitle = {
    "Superior Room ( Modern Comforts, Aesthetic Design )": superiorRoomSlides,
    "Executive Duplex Room ( Mezzanine Living, Redefined )": executiveDuplexRoomSlides,
};

const introSlides = [
    freeImages.introOne,
    freeImages.introTwo,
    freeImages.introThree,
];

export default function GuestHouse555NklPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="relative text-primary-foreground py-24 md:py-48 overflow-hidden ">
                <Image
                    src={freeImages.hero}
                    alt="Guest House 555 NKI by The Sanihara"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Welcome to Guest House 555 NKI by The Sanihara <br />
                        <span className="text-2xl md:text-5xl font-serif font-semibold">
                            A Cozy and Lush Hotel Experience in South Tangerang
                        </span>
                    </h1>
                    <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                </div>
            </section>

            <section className="container mx-auto py-16 px-4 max-w-4xl text-center ">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 capitalize italic">
                    Relax and enjoy your stay at Guest House 555 NKI
                </h2>
                <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                Your peaceful retreat, ideally located just 30 minutes from <br /> Soekarno-Hatta International Airport
                </p>
            </section>

            <section className="py-14 md:py-16 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-12xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div>
                            <div className="text-left mb-12">
                                <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                                A Tropical Retreat in the Heart of the City
                                </h2>
                                <div className="h-[3px] w-24 bg-[#b43a3a]  mt-5 rounded-full" />
                            </div>
                            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                <p>
                                Guest House 555 NKI was designed to be a breath of fresh air. With a relaxing Balinese vibe and lush greenery, our space helps you forget the hustle and bustle of Greater Jakarta from the moment you arrive.
                                
                                </p>
                                <p>
                                We believe that a great stay should be both comfortable and affordable. Whether you are a business traveler on a long trip or a large family on vacation, our spacious rooms offer the perfect balance of rest and utility. Each room is fully air-conditioned and equipped with high-speed Wi-Fi and a Smart TV to keep you connected.
                                
                                </p>
                                <p>During your stay, you can keep up with your routine in our fitness center, enjoy the convenience of free private parking, and rely on our 24-hour reception team for anything you need. At 555 NKI, we provide a top-tier experience that feels like a home away from home.</p>
                            </div>
                        </div>

                        <div className="relative">
                            <Carousel
                                opts={{ align: "start", loop: true }}
                                autoScrollMs={3500}
                                className="w-full px-4 md:px-6"
                            >
                                <CarouselContent className="ml-0">
                                    {introSlides.map((slide, index) => (
                                        <CarouselItem key={`${slide}-${index}`} className="pl-0">
                                            <div className="relative h-[30rem] md:h-[50rem] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                                                <Image
                                                    src={slide}
                                                    alt={`Guest House 555 NKI view ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                                <div className="absolute left-5 bottom-5 text-white">
                                                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-90">
                                                        Guest House 555 NKI
                                                    </p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/40 border-white/40 text-white hover:bg-black/60" />
                                <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/40 border-white/40 text-white hover:bg-black/60" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 ">
                <div className="container mx-auto px-4 max-w-[92rem]">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                            Room Categories &amp; Stay Experience
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                            Discover the different room categories and stay experience at Guest House 555 NKI by The Sanihara
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                        {roomCategories.map((room) => (
                            <article
                                key={room.title}
                                className="bg-background border border-border rounded-xl overflow-hidden"
                            >
                                <div className="relative h-96">
                                    <Carousel
                                        opts={{ align: "start", loop: true }}
                                        autoScrollMs={3200}
                                        className="h-full"
                                    >
                                        <CarouselContent className="ml-0 h-full">
                                            {(roomSlidesByTitle[room.title] || roomSlides).map((slide, slideIndex) => (
                                                <CarouselItem key={`${room.title}-${slideIndex}`} className="pl-0 h-full">
                                                    <div className="relative h-96">
                                                        <Image
                                                            src={slide}
                                                            alt={`${room.title} image ${slideIndex + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                                            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/40 border-white/30 text-white hover:bg-black/60" />
                                            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/40 border-white/30 text-white hover:bg-black/60" />
                                        </div>
                                    </Carousel>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-3">{room.title}</h3>
                                    <p className="text-foreground/85 leading-relaxed mb-3">{room.description}</p>
                                    <ul className="list-disc pl-6 text-foreground/85 space-y-1">
                                        {room.details.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                    <button
                                        type="button"
                                        className="mt-5 px-5 py-2 rounded-full bg-[#f58220] text-white text-sm font-medium hover:bg-[#df741a] transition-colors"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-[92rem]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <div>
                            <div className="text-left mb-12">
                                <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                                Best Long Stay Hotel In Greater Jakarta
                                </h2>
                                <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                    <p>Nestled in Pondok Cabe, Indonesia, Guest House 555 NKI offers affordable luxury, conveniently located only 200m from University Terbuka and 6 km from Lebak Bulus Metro Station. Situated just 11.4 km from the vibrant Pondok Indah Mall, the guest house also offers close proximity to key toll gates like Toll Cinere-Serpong, and long-distance bus services across Java.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative md:h-[60rem] rounded-xl overflow-hidden">
                            <Image
                                src={freeImages.gazebo}
                                alt="Elevated gazebo at Guest House 555 NKI"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto px-4 max-w-[92rem]">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                            Highlights of Guest House 555 NKI by The Sanihara
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {highlights.map((item) => (
                            <article key={item.title} className="bg-background rounded-xl p-3 border border-border">
                                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                                    <Image src={item.image} alt={item.title} fill className="object-cover rounded-2xl" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                {item.subtitle ? (
                                    <h4 className="text-xl font-semibold mb-3">{item.subtitle}</h4>
                                ) : null}
                                <p className="text-foreground/85 leading-relaxed">{item.description}</p>
                                {item.headingBullets ? (
                                    <p className="text-foreground/85 leading-relaxed font-semibold mt-3">
                                        {item.headingBullets}
                                    </p>
                                ) : null}
                                {item.bullets ? (
                                    <ul className="list-disc pl-6 mt-3 text-foreground/85 space-y-1">
                                        {item.bullets.map((bullet) => (
                                            <li key={typeof bullet === "string" ? bullet : bullet.label}>
                                                {typeof bullet === "string" ? (
                                                    bullet
                                                ) : (
                                                    <>
                                                        <span className="font-semibold">{bullet.label}:</span>{" "}
                                                        {bullet.text}
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
