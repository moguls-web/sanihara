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
        title: "Heritage Room (Non Air-Conditioned)",
        description:
            "Perfect for guests who appreciate simplicity and traditional charm, this room offers a peaceful stay in one of the finest hotels in Vythiri Wayanad.",
        details: [
            "Size: 36 sq. m (390 sq. ft)",
            "Occupancy: 2 Adults (Maximum 4 Guests)",
            "Bed Type: 1 King Size Bed",
            "View: Limited / Off View",
            "Bathroom: Attached",
            "Location: Heritage Bungalow",
        ],
    },
    {
        title: "Deluxe Room (Non Air-Conditioned)",
        description:
            "Blending elegance with comfort, the Deluxe Room features soothing interiors and a refreshing garden view. it also includes a comfortable living area within the bungalow.",
        details: [
            "Size: 36 sq. m (390 sq. ft)",
            "Occupancy: 2 Adults (Maximum 4 Guests)",
            "Bed Type: 1 King Size Bed",
            "View: Garden View",
            "Bathroom: Attached",
            "Location: Heritage Bungalow",
        ],
    },
    {
        title: "Superior Heritage Room (Non Air-Conditioned)",
        description:
            "Offering one of the most scenic experiences on the property, the Superior Heritage Room combines traditional design with breathtaking views of Chembra Peak.",
        details: [
            "Size: 36 sq. m (390 sq. ft)",
            "Occupancy: 2 Adults (Maximum 4 Guests)",
            "Bed Type: 1 King Size Bed",
            "View: Mountain View (Chembra Peak)",
            "Bathroom: Attached",
            "Location: Heritage Bungalow",
        ],
    },
    {
        title: "Family Room - 4 Sharing (Detached Bathroom)",
        description:
            "Designed for families and small groups, this spacious room offers stunning direct views of Chembra Peak along with a private balcony and a detached bathroom facility.",
        details: [
            "Size: 44 sq. m (476 sq. ft)",
            "Occupancy: 4 Adults (Maximum 5 Guests)",
            "Bed Type: 1 Queen Bed + 2 Super Single Beds",
            "View: Mountain View (Chembra Peak)",
            "Bathroom: Detached",
            "Features: Private Balcony",
            "Location: Modern Building",
        ],
    },
    {
        title: "Family Room - 4 Sharing (Attached Bathroom)",
        description:
            "A more premium family option, this category offers the same spacious layout with the added convenience of an attached bathroom.",
        details: [
            "Size: 44 sq. m (476 sq. ft)",
            "Occupancy: 4 Adults (Maximum 5 Guests)",
            "Bed Type: 1 Queen Bed + 2 Super Single Beds",
            "View: Mountain View (Chembra Peak)",
            "Bathroom: Attached",
            "Features: Private Balcony",
            "Location: Modern Building",
        ],
    },
    {
        title: "Premium Dormitory - 12 Sharing (Non Air-Conditioned)",
        description:
            "deal for larger groups, corporate retreats, and backpackers, the Premium Dormitory offers a spacious and Wayanad budget resorts with pool and group-friendly accommodations option without compromising on comfort.",
        details: [
            "Occupancy: 12 Guests (Maximum 14 Guests)",
            "Size: 78 sq. m (836 sq. ft)",
            "Bed Type: 12 Single Beds",
            "View: Limited / Off View",
            "Bathroom: Attached",
            "Location: Modern Building",
        ],
    },
];

const highlights = [
    {
        title: "Swimming Pool",
        image: freeImages.pool,
        description:
            "Surrounded by the dense tropical greenery of Misty Heights, the swimming pool offers a serene escape where nature and relaxation come together effortlessly. Recognized as a preferred Wayanad resort with pool, the space is framed by lush landscapes and peaceful surroundings, creating the perfect setting for a refreshing swim or a quiet moment of calm.",
    },
    {
        title: "Panoramic View Deck",
        image: freeImages.deck,
        description:
            "Enjoy misty hill views at one of the most scenic hotels in Vythiri Kerala. Experience breathtaking views from our elevated open-air deck, crafted with traditional roofing and architectural elegance. Overlooking misty hills and swaying palm groves, this space is perfect for enjoying morning coffee, reading, or simply soaking in the calm of nature—especially during light rains or foggy evenings.",
    },
    {
        title: "Children's Play Area",
        image: freeImages.kids,
        description:
            "Perfect for families looking for Wayanad resorts for family with kid-friendly amenities. Families traveling with children will appreciate our thoughtfully arranged play zone. Set amidst bamboo groves and shaded greenery, the area features safe and colorful play equipment that encourages outdoor fun and exploration.",
        bullets: [
            "Slides, swings, and merry-go-round",
            "Safe, natural surroundings",
            "Ideal for family stays",
        ],
    },
    {
        title: "Bonfire Experience",
        image: freeImages.bonfire,
        description:
            "A memorable highlight for guests staying at one of the coziest resorts in Vythiri. As evening descends, the bonfire area transforms into a warm and inviting space for guests to unwind. Gather around the glowing fire, share stories, and enjoy the serene ambiance of Wayanad’s cool nights. It’s an ideal setting for families, friends, or couples seeking a relaxed and memorable outdoor experience.",
        bullets: ["Perfect for group gatherings", "Cozy atmosphere amidst nature"],
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

const roomSlidesByTitle = {
    "Heritage Room (Non Air-Conditioned)": superiorHeritageRoomSlides,
    "Superior Heritage Room (Non Air-Conditioned)": superiorHeritageRoomSlides,
    "Deluxe Room (Non Air-Conditioned)": deluxeRoomSlides,
    "Family Room - 4 Sharing (Attached Bathroom)": familyAttachedRoomSlides,
    "Family Room - 4 Sharing (Detached Bathroom)": familyDetachedRoomSlides,
    "Premium Dormitory - 12 Sharing (Non Air-Conditioned)": premiumDormitorySlides,
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
                        Welcome to the Misty Heights by The Sanihara <br />
                        <span className="text-2xl md:text-5xl font-serif font-semibold">One of the Best Resorts in Vythiri</span>

                    </h1>
                    <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                </div>
            </section>


            <section className="container mx-auto py-16 px-4 max-w-4xl text-center ">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 capitalize italic">
                    Relax and Enjoy your Holidays at one of the most peaceful resorts in Vythiri Wayanad
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
                                <p>
                                    Escape into the misty landscapes of Wayanad at Misty Heights by The Sanihara — a heritage retreat nestled in the heart of Old Vythiri. Surrounded by lush rainforests and serene hills, this premium stay blends timeless charm with modern comfort, making it one of the most peaceful places to stay in Vythiri.

                                </p>
                                <p>
                                    Featuring elegant heritage rooms, spacious mountain-view suites, and flexible group accommodations, Misty Heights is ideal for couples, families, and gatherings. With the option to reserve the entire property for up to 70 guests, it stands out among the best resorts in Wayanad for memorable vacations, celebrations, and group retreats.

                                </p>
                                <p>The stay experience is uniquely divided across two distinct spaces:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Heritage Bungalow:</strong> A 6-bedroom traditional structure featuring the Heritage Room, Deluxe Room, and Superior Heritage Room—ideal for guests seeking authentic Vythiri hotel rooms with timeless architecture inspired by Kerala’s heritage.

                                    </li>
                                    <li>
                                        <strong>Modern Wing:</strong> A contemporary building offering well-appointed Family Rooms and a Premium Dormitory—perfect for guests searching for budget friendly resorts in Wayanad for family and group stays.
                                    </li>
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
                            Discover the different room categories and stay experience at Misty Heights by The Sanihara
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {roomCategories.map((room, index) => (
                            <article
                                key={room.title}
                                className="bg-background border border-border rounded-xl overflow-hidden"
                            >
                                <div className="relative h-80">
                                    <Carousel
                                        opts={{ align: "start", loop: true }}
                                        autoScrollMs={3200}
                                        className="h-full"
                                    >
                                        <CarouselContent className="ml-0 h-full">
                                            {(roomSlidesByTitle[room.title] || roomSlides).map((slide, slideIndex) => (
                                                <CarouselItem key={`${room.title}-${slideIndex}`} className="pl-0 h-full">
                                                    <div className="relative h-80">
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
                                    Elevated Garden Gazebo Experience
                                </h2>
                                <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                    <p> Tucked amidst the misty greenery of Misty Heights by The Sanihara lies a charming elevated gazebo. A quiet little escape where time seems to slow down. As you walk up the gentle staircase, the soothing views of landscaped gardens, vibrant blooms, and swaying palms begin to unfold around you, welcoming you into a space designed for pure serenity.</p>
                                    <p>Crafted with the timeless beauty of traditional wooden architecture and the durability of modern construction, the gazebo carries a warm, rustic charm while offering complete comfort in every season. Mornings here begin with the aroma of fresh coffee and soft mountain air, afternoons invite moments of peaceful reflection, and evenings are best spent listening to the whisper of the breeze through the trees.</p>
                                    <p>More than just a viewpoint, this elevated retreat is where nature, comfort, and calm come together to create some of the most memorable moments of your stay in Wayanad.</p>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam delectus quas iusto repellat? Veritatis, libero.
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