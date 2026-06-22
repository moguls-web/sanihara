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
    hero: "/Jakarta-hero.webp",
    introOne: "/ARW04498.jpg",
    introTwo: "/ARW04498.jpg",
    introThree: "/ARW04498.jpg",
    gazebo: "/ARW04692.jpg",
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
    reception: "/24-Hour-Reception.JPEG",
    wifi: "/Free-Wi-FiThroughout.JPEG",
    parking: "/Free-Parking-1.jpg",
    hajiNawiMRT: "/MRT.jpg",
};

export const metadata = {
    title:
        "555 Nangka Guest House | The Sanihara | Budget-Friendly Stay in South Jakarta",
    description:
        "Stay at 555 Nangka Guest House — a cozy, wallet-friendly lodging in Kemang, South Jakarta with free Wi-Fi, parking, and 24-hour reception. Book your stay with The Sanihara today.",
};

const roomCategories = [
    {
        title: "Suite",
        description:
            "Our most spacious and premium offering, the Suite is ideal for couples or small families looking for extra room and a city view. Featuring a King-sized bed, private en-suite bathroom, a sofa, and a dedicated work desk, it delivers a relaxed and complete stay experience without the luxury price tag.",
        details: [
            "Occupancy: 2 Adults + 1 Child (Maximum 3 Guests)",
            "Size: 25 m²",
            "Bed Type: 1 King Bed",
            "View: City View",
            "Bathroom: Private (En-Suite)",             
        ],
    },
    {
        title: "Deluxe",
        description:
            "Thoughtfully designed for both comfort and productivity, the Deluxe Room features a Queen-sized bed, private en-suite bathroom, and a dedicated work desk — making it an excellent choice for business travelers or couples who want a well-appointed private space. A sofa and reading light complete the experience.",
        details: [
            "Occupancy: 2 Adults + 1 Child (Maximum 3 Guests)",
            "Size: 17 m²",
            "Bed Type: 1 Queen Bed",
            "Bathroom: Private (En-Suite)",
        ],
    },
    {
        title: "Superior Double",
        description:
            "Freshly renovated and ready to impress, the Superior Double combines a clean, updated aesthetic with all the essentials for a comfortable stay. Featuring a Double bed, private en-suite bathroom, and modern interiors throughout, it's a great value pick for couples seeking fresh, well-maintained surroundings.",
        details: [
            "Occupancy: 2 Adults + 1 Child (Maximum 3 Guests)",
            "Size: 15 m²",
            "Bed Type: 1 Double Bed",
            "Bathroom: Private (En-Suite)", 
        ],
    },
    {
        title: "Superior Single",
        description:
            "Compact and practical, the Superior Single is purpose-built for solo travelers who want their own well-equipped space. Featuring air conditioning, a flat-screen TV, a mini fridge, and free Wi-Fi, it delivers everything you need for a comfortable single-occupancy stay at excellent value.",
        details: [
            "Occupancy: 1 Adult Only",
            "Size: 10 m²",
            "Bed Type: 1 Single Bed",
            "Bathroom: Shared", 
        ],
    },
    {
        title: "Standard Single",
        description:
            "Our most affordable option, the Standard Single covers all the essentials for a smart solo stay. Clean, comfortable, and fully equipped with air conditioning, free Wi-Fi, a TV, and a mini fridge - it's the ideal choice for budget-conscious travelers who need a reliable base in South Jakarta.",
        details: [
            "Occupancy: 1 Adult Only",
            "Size: 8 m²",
            "Bed Type: 1 Single Bed",
            "Bathroom: Shared", 
        ],
    },
];

const highlights = [
    {
        title: "24-Hour Reception",         
        image: freeImages.reception,
        description:
            "Our front desk team is available around the clock, every day of the year. Whether you're arriving late at night, checking out at the crack of dawn, or simply need a local recommendation mid-afternoon, we're always here and ready to help.",
         
    },
    {
        title: "Free Wi-Fi Throughout", 
        image: freeImages.wifi,
        description:
            "Stay connected from the moment you check in. High-speed Wi-Fi is available in all rooms and common areas, making 555 Nangka an ideal choice for remote workers, long-stay guests, and anyone who needs to stay online while traveling.",
        
        bullets: [
            { label: "", text: "Available in all rooms and common areas" },
            { label: "", text: "High-speed and reliable connection" },
            { label: "", text: "Ideal for business travelers and extended stays" },
        ],
    },
    {
        title: "Free Parking",
        image: freeImages.parking,
        description:
            "Traveling by car? Park with ease. 555 Nangka Guest House offers complimentary on-site parking for guests - one less thing to think about when planning your stay.",
            bullets: [
            { label: "", text: "Complimentary for all guests" },
            { label: "", text: "Secure on-site parking" },
            { label: "", text: "No booking required" },
        ],
    },
    {
        title: "Walk to Haji Nawi MRT",
        image: freeImages.hajiNawiMRT,
        description:
            "One of the guest house's greatest conveniences is its walkable proximity to Haji Nawi MRT Station. From here, Jakarta's key business districts, malls, and cultural landmarks are all within easy reach — letting you explore the city on your schedule, without ever sitting in traffic.",
            bullets: [
            { label: "", text: "Walking distance to Haji Nawi MRT Station" },
            { label: "", text: "Direct links to Jakarta's CBD and beyond" },
            { label: "", text: "Easy connections to Soekarno-Hatta International Airport" },
        ],
    }, 
];

const roomSlides = [suiteImage, poolImage, diningImage];
const SuiteSlides = [
    "/rooms/nangka/Suite-Room/1.JPEG",
    "/rooms/nangka/Suite-Room/2.JPEG",
    "/rooms/nangka/Suite-Room/3.JPEG",
    "/rooms/nangka/Suite-Room/4.JPEG",
];
const DeluxeSlides = [
    "/rooms/nangka/Deluxe-Room/1.JPEG",
    "/rooms/nangka/Deluxe-Room/2.JPEG",
    "/rooms/nangka/Deluxe-Room/3.JPEG",
    "/rooms/nangka/Deluxe-Room/4.JPEG",
];
const SuperiorSingleSlides = [
    "/rooms/nangka/Superior-Single-Room/1.JPEG",
    "/rooms/nangka/Superior-Single-Room/2.JPEG",
    "/rooms/nangka/Superior-Single-Room/3.JPEG",
    "/rooms/nangka/Superior-Single-Room/4.JPEG",
];
const StandardSingleSlides = [
    "/rooms/nangka/Standard-Single-Room/1.JPEG",
    "/rooms/nangka/Standard-Single-Room/2.JPEG",
    "/rooms/nangka/Standard-Single-Room/3.JPEG",
    "/rooms/nangka/Standard-Single-Room/4.JPEG",
];
const SuperiorDoubleRoomSlides = [
    "/rooms/nangka/Superior-Double-Room/1.JPEG",
    "/rooms/nangka/Superior-Double-Room/2.JPEG",
    "/rooms/nangka/Superior-Double-Room/3.JPEG",
    "/rooms/nangka/Superior-Double-Room/4.JPEG",
];

const roomSlidesByTitle = {
    "Suite": SuiteSlides,
    "Deluxe": DeluxeSlides,
    "Superior Double": SuperiorDoubleRoomSlides,
    "Superior Single": SuperiorSingleSlides,
    "Standard Single": StandardSingleSlides,
};

const introSlides = [
    freeImages.introOne,
    freeImages.introTwo,
    freeImages.introThree,
];

export default function NangkaGuestHousePage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="relative text-primary-foreground py-24 md:py-48 overflow-hidden ">
                <Image
                    src={freeImages.hero}
                    alt="555 Nangka Guest House by The Sanihara"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                    Welcome to 555 Nangka Guest House <br />
                        <span className="text-2xl md:text-5xl font-serif font-semibold">
                        Your Home in the Heart of South Jakarta
                        </span>
                    </h1>
                    <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                </div>
            </section>

            <section className="container mx-auto py-16 px-4 max-w-4xl text-center ">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 capitalize italic">
                Relax and Enjoy Your Stay at 555 Nangka Guest House
                </h2>
                <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                Experiences at 555 Nangka Where Comfort, Convenience and Affordability Meet
                </p>
            </section>

            <section className="py-14 md:py-16 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-12xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div>
                            <div className="text-left mb-12">
                                <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                                A Budget-Friendly Stay in the Heart of Cipete
                                </h2>
                                <div className="h-[3px] w-24 bg-[#b43a3a]  mt-5 rounded-full" />
                            </div>
                            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                <p>
                                Conveniently located just a short walk from Haji Nawi MRT Station, 555 Nangka Guest House offers a warm and practical base for both business and leisure travelers in South Jakarta. Nestled in the peaceful residential neighborhood of Cipete Utara, Kebayoran Baru, this cozy guesthouse blends easy city access with a relaxed, unhurried atmosphere - making it a smart and comfortable choice for every type of traveler.
                                </p>
                                <p>
                                Whether you're visiting Jakarta for work or leisure, the guest house places you within reach of the city's most vibrant destinations. Kemang - a popular hub for expats, dining, and nightlife — is just moments away, while premier shopping destinations including ITC Fatmawati, One Belpark Mall, Pondok Indah Mall, and Blok M Plaza are all close by. Reliable public transport links also make it easy to reach Soekarno-Hatta International Airport without the stress of Jakarta's traffic.
                                </p>
                                <p>
                                With five distinct room categories to suit different needs and budgets, the guest house is divided into two types of stay experience:
                                </p>
                                <ul>
                                    <li><b>En-Suite Rooms (Private Bathroom):</b> The Suite, Deluxe Room, and Superior Double (Newly Renovated) - ideal for guests who value privacy and comfort, each featuring a dedicated en-suite bathroom, air conditioning, free Wi-Fi, and a thoughtful range of in-room amenities.</li>
                                    <li><b>Budget-Smart Rooms (Shared Bathroom):</b> The Superior Single and Standard Single - practical and affordable options for solo travelers who want a clean, well-equipped private space without overspending.</li>
                                </ul>
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
                                                    alt={`555 Nangka Guest House view ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                                <div className="absolute left-5 bottom-5 text-white">
                                                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-90">
                                                        555 Nangka Guest House
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
                        Room Categories & Stay ExperienceRoom Cate
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                        Discover the different room categories and stay experience at 555 Nagka Guest House
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
                                Staying in Cipete - Where the City Slows Down
                                </h2>
                                <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                    <p>
                                    Tucked within the leafy streets of Cipete Utara, 555 Nangka Guest House sits in one of South Jakarta's most quietly charming residential pockets. Despite being central and well-connected, the neighbourhood around Jalan Nangka carries a calm, unhurried pace that feels refreshingly removed from the noise of Jakarta's busiest corridors. Mornings here are quiet, local warungs open early, and there's a gentle rhythm to the streets that makes it easy to feel at home from the very first day.

                                    </p>
                                    <p>Step outside and you're already connected to everything the city has to offer. Haji Nawi MRT Station is just a short walk from the guest house, putting you directly on Jakarta's expanding transit network. Whether you're heading to a business meeting in the CBD, exploring the creative energy of Kemang, or simply making your way around the city, the MRT eliminates the need to deal with Jakarta's notorious traffic - putting more of your day back in your hands.
                                    </p>
                                    <p>For those who love to shop, eat, and explore, it gets even better. Kemang's vibrant café and restaurant scene, the retail buzz of Blok M Plaza, the convenience of ITC Fatmawati, and the premium offerings at Pondok Indah Mall are all just minutes away. Guests traveling through Soekarno-Hatta International Airport will find the connections straightforward in both directions. At 555 Nangka, you're not just choosing a room - you're choosing a base that makes the entire Jakarta experience easier.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative md:h-[60rem] rounded-xl overflow-hidden">
                            <Image
                                src={freeImages.gazebo}
                                alt="555 Nangka Guest House in Kemang, South Jakarta"
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
                        Highlights of 555 Nangka Guest House by The Sanihara
                        </h2>
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                        Everything you need for a comfortable and connected stay in South Jakarta, all in one place.

                        </p>
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
                                                        <span className="font-semibold">{bullet.label}</span>{" "}
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
