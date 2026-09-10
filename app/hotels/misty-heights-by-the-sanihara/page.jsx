import Image from "next/image";
import suiteImage from "@/assets/suite-luxury.jpg";
import poolImage from "@/assets/pool-infinity.jpg";
import diningImage from "@/assets/dining-restaurant.jpg";
import RoomCard from "@/components/RoomCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const freeImages = {
    hero: "/misty-banner.webp",
    introOne:
        "/mist-skyview-1.webp",
    introTwo:
        "/46578.webp",
    introThree: "/Bungalow-downstairs2.webp",



    gazebo: "/89456.jpg",
    pool: "/Swimming-pool.webp",
    deck: "/Panoramic-View-Deck.webp",
    kids: "/039ac7f6.webp",
    bonfire:
        "/3271b747.webp",
    badminton:
        "/Badminton.webp",
    nature:
        "/Environment.webp",
};

export const metadata = {
    title:
        "Resorts in Vythiri Wayanad Kerala | Misty Heights by The Sanihara | Pool & Heritage Stay",
    description:
        "Stay at Misty Heights, one of the best resorts in Vythiri Wayanad Kerala. Enjoy heritage rooms, mountain views, family stays & a serene Wayanad resort with pool. Book your peaceful escape today.",
};

const roomCategories = [
    {
        id: "heritageRoomNonAC",
        name: "Heritage (Non-Air-Conditioned)",
        subheading: "Traditional Charm in a Spacious Retreat",
        description:
            "Perfect for guests who appreciate simplicity and traditional charm, the Heritage Room offers a spacious and serene retreat within the bungalow setting. With a dedicated living area and classic interiors inspired by heritage architecture, this room ensures a peaceful and relaxing stay.",
        image: suiteImage,
        price: 8500,
        capacity: 2,
        size: 390,
        amenities: ["1 King-Size Bed", "Off View", "Attached Bathroom", "Heritage Bungalow"],
    },
    {
        id: "heritageGardenViewNonAC",
        name: "Heritage Garden View (Non Air-Conditioned)",
        subheading: "Elegant Comfort with Garden Views",
        description:
            "Blending elegance with comfort, the heritage garden view room features soothing interiors and a refreshing garden view. Designed for guests seeking a calm and cozy atmosphere, it also includes a comfortable living area within the room.",
        image: suiteImage,
        price: 9500,
        capacity: 2,
        size: 390,
        amenities: ["1 Queen-Size Bed", "Garden View", "Attached Bathroom", "Heritage Bungalow"],
    },
    {
        id: "superiorHeritageRoomNonAC",
        name: "Superior Heritage (Non-Air-Conditioned)",
        subheading: "Traditional Design with Lasting Comfort",
        description:
            "Is the Superior Heritage Room traditional design this room delivers both comfort and an unforgettable visual experience.",
        image: suiteImage,
        price: 11000,
        capacity: 2,
        size: 280,
        amenities: ["1 King-Size Bed", "Off View", "Attached Bathroom, Bath tub", "Heritage Bungalow"],
    },
    {
        id: "superiorHeritageMountainViewNonAC",
        name: "Superior Heritage Mountain View (Non Air-Conditioned)",
        subheading: "Scenic Views of Chembra Peak",
        description:
            "Offering one of the most scenic experiences on the property, the Superior Heritage Room combines traditional design with breathtaking views of Chembra Peak. Ideal for nature lovers, this room delivers both comfort and an unforgettable visual experience.",
        image: suiteImage,
        price: 15000,
        capacity: 2,
        size: 390,
        amenities: ["1 King-Size Bed", "Mountain View (Chembra Peak)", "Attached Bathroom, Bath tub", "Heritage Bungalow"],
    },
    {
        id: "familyRoom4SharingDetached",
        name: "Family Room - 4 Sharing Detached Bath (Non Air-Conditioned)",
        subheading: "Spacious Family Stay with Mountain Views",
        description:
            "Designed for families and small groups, this spacious room offers stunning direct views of Chembra Peak along with a private balcony. It provides a comfortable and budget-friendly option with a detached bathroom facility.",
        image: suiteImage,
        price: 16000,
        capacity: 4,
        size: 476,
        amenities: ["1 Queen Bed + 2 Super Single Beds", "Mountain View (Chembra Peak)", "Detached Bathroom", "Private Balcony", "Modern Building"],
    },
    {
        id: "familyRoom4SharingAttached",
        name: "Family Room - 4 Sharing (Non Air-Conditioned)",
        subheading: "Premium Family Comfort with Balcony",
        description:
            "A more premium family option, this category offers the same spacious layout with the added convenience of an attached bathroom. Guests can enjoy uninterrupted panoramic views of Chembra Peak right from the room and balcony.",
        image: suiteImage,
        price: 12000,
        capacity: 4,
        size: 476,
        amenities: ["1 Queen Bed + 2 Super Single Beds", "Mountain View (Chembra Peak)", "Attached Bathroom", "Private Balcony", "Modern Building"],
    },
    {
        id: "premiumDormitory12Sharing",
        name: "Premium Dormitory - 12 Sharing (Non-Air-Conditioned)",
        subheading: "Ideal for Groups and Corporate Retreats",
        description:
            "Ideal for larger groups, corporate retreats, and backpackers, the Premium Dormitory offers a spacious and budget-friendly accommodation option without compromising on comfort. Designed to accommodate group stays efficiently, it ensures a social and lively experience.",
        image: suiteImage,
        price: 12000,
        capacity: 12,
        size: 836,
        amenities: ["12 Single Beds", "Limited / Off View", "Attached Bathroom", "Modern Building"],
    },
];

const highlights = [
    {
        title: "Swimming Pool",
        image: freeImages.pool,
        description:
            "Set in the heart of dense tropical foliage, our elegantly designed swimming pool offers a serene escape. Surrounded by natural greenery, the pool area provides both privacy and tranquility, making it ideal for a refreshing dip or quiet relaxation. The stone-paved deck enhances the aesthetic while ensuring comfort and safety.",
    },
    {
        title: "Panoramic View Deck",
        image: freeImages.deck,
        description:
            "Experience breathtaking views from our elevated open-air deck, crafted with traditional roofing and architectural elegance. Overlooking misty hills and swaying palm groves, this space is perfect for enjoying a morning coffee, reading, or simply soaking in the calm of nature — especially during light rains or foggy evenings.",
    },
    {
        title: "Children's Play Area",
        image: freeImages.kids,
        description:
            "Families traveling with children will appreciate our thoughtfully arranged play zone. Set amidst bamboo groves and shaded greenery, the area features safe and colorful play equipment that encourages outdoor fun and exploration.",
        bullets: [
            "Slides, swings, and a merry-go-round",
            "Safe, natural surroundings",
            "Ideal for family stays",
        ],
    },
    {
        title: "Bonfire Experience",
        image: freeImages.bonfire,
        description:
            "As evening descends, the bonfire area transforms into a warm and inviting space where guests can unwind. Gather around the glowing fire, share stories, and enjoy the serene ambiance of Wayanad's cool nights. An ideal setting for families, friends, or couples seeking a relaxed and memorable outdoor experience.",
        bullets: [
            "Perfect for group gatherings",
            "Cozy atmosphere amidst nature",
        ],
    },
    {
        title: "Badminton Court",
        image: freeImages.badminton,
        description:
            "For guests seeking light recreation, our outdoor badminton court offers a refreshing way to stay active. Set within a natural landscape, it provides a casual yet engaging space for friendly matches and leisure play.",
        bullets: [
            "Well-defined court setup",
            "Suitable for all age groups",
            "Ideal for casual games and family fun",
        ],
    },
    {
        title: "Open Nature-Integrated Environment",
        image: freeImages.nature,
        description:
            "The entire outdoor space is thoughtfully designed to blend seamlessly with its natural surroundings. Surrounded by lush greenery and open skies, it creates a tranquil setting where guests can relax, breathe fresh air, and connect with nature.",
        bullets: [
            "Expansive open layout",
            "Surrounded by greenery and bamboo groves",
            "Peaceful and rejuvenating ambiance",
        ],
    },
];

const roomImages = [
    suiteImage,
    poolImage,
    diningImage,
    suiteImage,
    poolImage,
    diningImage,
];

const roomSlides = [suiteImage, poolImage, diningImage];
const superiorHeritageRoomSlides = [
    "/rooms/Superior-Heritage-room-non-ac/1.jpg",
    "/rooms/Superior-Heritage-room-non-ac/2.jpg",
    "/rooms/Superior-Heritage-room-non-ac/3.JPG",
    "/rooms/Superior-Heritage-room-non-ac/4.JPG",
    "/rooms/Superior-Heritage-room-non-ac/5.jpg",
    "/rooms/Superior-Heritage-room-non-ac/6.jpg",
    "/rooms/Superior-Heritage-room-non-ac/7.jpg",
    "/rooms/Superior-Heritage-room-non-ac/8.jpg",
];
const deluxeRoomSlides = [
    "/rooms/Deluxe-non-ac/1.jpg",
    "/rooms/Superior-Heritage-room-non-ac/3.JPG",
    "/rooms/Superior-Heritage-room-non-ac/4.JPG",
    "/rooms/Superior-Heritage-room-non-ac/7.jpg",
    "/rooms/Superior-Heritage-room-non-ac/8.jpg"
];
const familyAttachedRoomSlides = [
    "/rooms/Family-Room-four-Sharing-Attached-Bathroom/1.jpg",
    "/rooms/Family-Room-four-Sharing-Attached-Bathroom/2.JPG",
    "/rooms/Family-Room-four-Sharing-Attached-Bathroom/3.JPG",
    "/rooms/Family-Room-four-Sharing-Attached-Bathroom/4.JPG",
    "/rooms/Family-Room-four-Sharing-Attached-Bathroom/5.JPG",
];
const familyDetachedRoomSlides = [
    "/rooms/Family-Room-four-Sharing-Detached-Bathroom/1.jpg",
    "/rooms/Family-Room-four-Sharing-Detached-Bathroom/2.JPG",
    "/rooms/Family-Room-four-Sharing-Detached-Bathroom/3.JPG",
    "/rooms/Family-Room-four-Sharing-Detached-Bathroom/4.JPG"
];
const premiumDormitorySlides = [
    "/rooms/Premium-Dormitory/1.JPG",
    "/rooms/Premium-Dormitory/2.JPG",
    "/rooms/Premium-Dormitory/3.JPG",
    "/rooms/Premium-Dormitory/4.JPG",
    "/rooms/Premium-Dormitory/5.JPG",
    "/rooms/Premium-Dormitory/6.JPG",
];

const roomSlidesById = {
    heritageRoomNonAC: superiorHeritageRoomSlides,
    superiorHeritageRoomNonAC: superiorHeritageRoomSlides,
    superiorHeritageMountainViewNonAC: superiorHeritageRoomSlides,
    heritageGardenViewNonAC: deluxeRoomSlides,
    deluxeRoomNonAC: deluxeRoomSlides,
    familyRoom4SharingAttached: familyAttachedRoomSlides,
    familyRoom4SharingDetached: familyDetachedRoomSlides,
    premiumDormitory12Sharing: premiumDormitorySlides,
};

const introSlides = [
    freeImages.introOne,
    freeImages.introTwo,
    freeImages.introThree,
];

export default function MistyHeightsPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="relative text-primary-foreground py-24 md:py-48 overflow-hidden ">
                <Image
                    src={freeImages.hero}
                    alt="Misty Heights By the Sanihara"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Welcome to Misty Heights by The Sanihara <br />
                        <span className="text-2xl md:text-5xl font-serif font-semibold">One of the Best Resorts in Vythiri, Wayanad, Kerala</span>

                    </h1>
                    <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                </div>
            </section>

            <section className="container mx-auto py-16 px-4 max-w-4xl text-center ">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 capitalize italic">
                    Relax and Enjoy Your Holidays at One of the Most Peaceful Resorts in Vythiri, Wayanad
                </h2>
                <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                    Experiences at Misty Heights
                    <br />
                    Where Nature, Comfort, and Leisure Come Together
                </p>
            </section>

            <section className="py-14 md:py-16 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-12xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div>
                            <div className="text-left mb-12">
                                <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">A Peaceful Escape in the Heart of Wayanad</h2>
                                <div className="h-[3px] w-24 bg-[#b43a3a]  mt-5 rounded-full" />
                            </div>
                            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                <p>Escape into the misty landscapes of Wayanad at Misty Heights by The Sanihara a heritage retreat nestled in the heart of Old Vythiri. Surrounded by lush rainforests and serene hills, this premium stay blends timeless charm with modern comfort, making it one of the most peaceful places to stay in Vythiri.</p>
                                <p>Thoughtfully designed for couples, families, and groups, Misty Heights offers a blend of heritage charm and modern comfort. The property features a beautifully restored heritage bungalow with six spacious and elegantly appointed rooms, alongside expansive mountain-view family rooms and shared accommodations perfect for larger gatherings. For private events and group stays, the entire property can be exclusively reserved, accommodating up to 70 guests.</p>
                                {/* <p>The stay experience is uniquely divided across two distinct spaces:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Heritage Bungalow:</strong> A six-bedroom traditional structure featuring the Heritage Room, Heritage Garden View Room, Superior Heritage Room, and Superior Heritage Mountain View Room — each showcasing timeless architecture and distinctive interiors inspired by Kerala's rich heritage.</li>
                                    <li><strong>Modern Wing:</strong> A contemporary building offering well-appointed Family Rooms and a Premium Dormitory, thoughtfully designed for comfort, convenience, and group stays.</li>
                                </ul> */}
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
                                                    alt={`Misty heights view ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                                <div className="absolute left-5 bottom-5 text-white">
                                                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-90">
                                                        Misty Heights
                                                    </p>
                                                    <p className="text-lg md:text-2xl font-serif">

                                                    </p>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 border-white/40 text-white hover:bg-black/60" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 border-white/40 text-white hover:bg-black/60" />
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
                            Discover the different room categories and stay experience at Misty Heights by The Sanihara
                        </p>
                    </div>
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        autoScrollMs={4000}
                        className="w-full relative px-12 md:px-14"
                    >
                        <CarouselContent className="-ml-4 items-stretch">
                            {roomCategories.map((room) => (
                                <CarouselItem
                                    key={room.id}
                                    className="pl-4 basis-full md:basis-1/2 xl:basis-1/3 h-auto"
                                >
                                    <div className="h-full">
                                        <RoomCard
                                            {...room}
                                            slides={roomSlidesById[room.id] || roomSlides}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/40 border-white/40 text-white hover:bg-black/60 hover:text-white" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-black/40 border-white/40 text-white hover:bg-black/60 hover:text-white" />
                    </Carousel>
                </div>
            </section>

            <section className="py-14 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-[92rem]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                        <div>
                            <div className="text-left mb-12">
                                <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                                    Elevated Garden Gazebo Experience
                                </h2>
                                <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                    <p>Set amidst the lush greenery of Wayanad, the elevated garden gazebo at Misty Heights by The Sanihara offers a serene retreat thoughtfully designed for relaxation and scenic enjoyment. While the structure showcases the timeless charm of traditional wooden architecture, it is, in fact, constructed using durable concrete — expertly finished to replicate the warmth and elegance of wood.</p>
                                    <p>Accessed via a gently rising staircase, the gazebo features a spacious covered deck supported by solid pillars and detailed railings, all crafted to reflect classic wooden aesthetics. This thoughtful design ensures both visual appeal and long-lasting strength, making it ideal for all weather conditions.</p>
                                    <p>From this elevated vantage point, guests can take in sweeping views of the landscaped gardens, vibrant blooms, and swaying palms that define the tranquil surroundings. Whether enjoying a quiet morning coffee, a leisurely afternoon, or a peaceful evening breeze, the gazebo provides a private and refreshing escape.</p>
                                    <p>At Misty Heights, every element is curated to harmonize comfort with nature, and this gazebo beautifully embodies that balance — offering the charm of wood with the reliability of modern construction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative md:h-[60rem] rounded-xl overflow-hidden">
                            <Image
                                src={freeImages.gazebo}
                                alt="Elevated gazebo at misty heights"
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
                            Highlights of Misty Heights by The Sanihara
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                            Discover the experiences and facilities that make Misty Heights one of the most sought-after retreats in Vythiri, Wayanad.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {highlights.map((item) => (
                            <article key={item.title} className="bg-background rounded-xl p-3 border border-border">
                                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                                    <Image src={item.image} alt={item.title} fill className="object-cover rounded-2xl" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-foreground/85 leading-relaxed">{item.description}</p>
                                {item.bullets ? (
                                    <ul className="list-disc pl-6 mt-3 text-foreground/85 space-y-1">
                                        {item.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
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