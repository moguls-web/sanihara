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
    hero: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
    introOne:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1400&q=80",
    introTwo:
        "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80",
    gazebo:
        "/89456.jpg",
    pool: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80",
    deck: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    kids: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80",
    bonfire:
        "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80",
    badminton:
        "https://images.pexels.com/photos/5739122/pexels-photo-5739122.jpeg?auto=compress&cs=tinysrgb&w=1400",
    nature:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
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
            "Blending elegance with comfort, the Deluxe Room features soothing interiors and a refreshing garden view. Designed for guests seeking a calm and cozy atmosphere, it also includes a comfortable living area within the bungalow.",
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
            "Offering one of the most scenic experiences on the property, the Superior Heritage Room combines traditional design with breathtaking views of Chembra Peak. Ideal for nature lovers, this room delivers both comfort and an unforgettable visual experience.",
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
            "Designed for families and small groups, this spacious room offers stunning direct views of Chembra Peak along with a private balcony. It provides a comfortable and budget-friendly option with a detached bathroom facility.",
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
            "A more premium family option, this category offers the same spacious layout with the added convenience of an attached bathroom. Guests can enjoy uninterrupted, panoramic views of Chembra Peak right from the room and balcony.",
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
            "Ideal for larger groups, corporate retreats, and backpackers, the Premium Dormitory offers spacious, group-friendly accommodation without compromising on comfort.",
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
            "Set in dense tropical greenery, our pool offers a peaceful escape, making Misty Heights a preferred Wayanad resort with pool for travelers seeking relaxation. Surrounded by natural greenery, the pool area provides both privacy and tranquility, making it ideal for a refreshing dip or quiet relaxation. The stone-paved deck enhances the aesthetic while ensuring comfort and safety.",
    },
    {
        title: "Panoramic View Deck",
        image: freeImages.deck,
        description:
            "Enjoy misty hill views at one of the most scenic hotels in Vythiri Kerala. Experience breathtaking views from our elevated open-air deck, crafted with traditional roofing and architectural elegance. Overlooking misty hills and swaying palm groves, this space is perfect for enjoying morning coffee, reading, or simply soaking in the calm of nature, especially during light rains or foggy evenings.",
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
            "A memorable highlight for guests staying at one of the coziest resorts in Vythiri. As evening descends, the bonfire area transforms into a warm and inviting space for guests to unwind. Gather around the glowing fire, share stories, and enjoy the serene ambiance of Wayanad's cool nights.",
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
    freeImages.gazebo,
];

export default function MistyHeightsPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="relative text-primary-foreground py-24 md:py-28 overflow-hidden ">
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
                        Welcome to the Misty Heights by The Sanihara <br /> <span className="text-2xl md:text-5xl font-serif font-semibold">One of the Best Resorts in Vythiri</span>
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
                                <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                                    Discover Home in Misty Heights Heritage - A Premium Hotel in Vythiri
                                </h2>
                                <div className="h-[3px] w-24 bg-[#b43a3a]  mt-5 rounded-full" />
                                <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam delectus quas iusto repellat? Veritatis, libero.
                                </p>
                            </div>
                            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                <p>
                                    Leave the ordinary behind and step into the serene charm of Misty Heights by The Sanihara, a heritage bungalow and holiday retreat nestled in the lush rainforests and mist-covered hills of Wayanad, North Kerala. Recognized among the most peaceful places to stay in Vythiri, our property is ideal for travelers searching for hotels in Vythiri Kerala that combine nature and comfort.
                                </p>
                                <p>
                                    Located in the historic heart of Old Vythiri, the gateway to Wayanad, this hotel in Vythiri enjoys a prime setting close to major attractions while offering complete tranquility amidst nature. If you are searching for hotels in Wayanad Vythiri that offer both accessibility and privacy, Misty Heights is an ideal choice.
                                </p>
                                <p>
                                    Thoughtfully designed for couples, families, and groups, Misty Heights stands among the Wayanad best resorts, offering a blend of heritage charm and modern comfort. The property features a beautifully restored heritage bungalow with six spacious and elegantly appointed rooms, alongside two expansive mountain-view suites and shared accommodations, perfect for larger gatherings.
                                </p>
                                <p>
                                    For private events and group stays, the entire property can be exclusively reserved, making it one of the most flexible Wayanad resorts for family and group bookings, accommodating up to 70 guests.
                                </p>
                                <p>The stay experience is uniquely divided across two distinct spaces:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>
                                        <strong>Heritage Bungalow:</strong> A 6-bedroom traditional structure featuring the Heritage Room, Deluxe Room, and Superior Heritage Room, ideal for guests seeking authentic Vythiri hotel rooms with timeless architecture inspired by Kerala heritage.
                                    </li>
                                    <li>
                                        <strong>Modern Wing:</strong> A contemporary building offering well-appointed Family Rooms and a Premium Dormitory, perfect for guests searching for budget friendly resorts in Wayanad for family and group stays.
                                    </li>
                                </ul>
                                <p>
                                    At Misty Heights, every detail is curated to offer a peaceful escape, making it one of the most preferred resorts in Vythiri for travelers looking for a balance of comfort, affordability, and nature.
                                </p>
                            </div>
                        </div>

                        <div className="relative min-h-[960px]">
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
                                                        Scenic View {index + 1}
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
                                <div className="h-[3px] w-24 bg-[#b43a3a]  mt-5 rounded-full" />
                                <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam delectus quas iusto repellat? Veritatis, libero.
                                </p>
                            </div>
                            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                <p>
                                    A serene highlight of one of the most nature-rich resorts in Vythiri, offering relaxation with scenic views and traditional aesthetics.
                                </p>
                                <p>
                                    Set amidst the lush greenery of Wayanad, the elevated garden gazebo at Misty Heights by The Sanihara offers a serene retreat thoughtfully designed for relaxation and scenic enjoyment. While the structure showcases the timeless charm of traditional wooden architecture, it is in fact constructed using durable concrete, expertly finished to replicate the warmth and elegance of wood.
                                </p>
                                <p>
                                    Accessed via a gently rising staircase, the gazebo features a spacious, covered deck supported by solid pillars and detailed railings, all crafted to reflect classic wooden aesthetics. This thoughtful design ensures both visual appeal and long-lasting strength, making it ideal for all weather conditions.
                                </p>
                                <p>
                                    From this elevated vantage point, guests can take in sweeping views of the landscaped gardens, vibrant blooms, and swaying palms that define the tranquil surroundings. Whether enjoying a quiet morning coffee, a leisurely afternoon, or a peaceful evening breeze, the gazebo provides a private and refreshing escape.
                                </p>
                                <p>
                                    At Misty Heights, every element is curated to harmonize comfort with nature, and this gazebo beautifully embodies that balance, offering the charm of wood with the reliability of modern construction.
                                </p>
                            </div>
                        </div>
                        <div className="relative  md:h-[60rem] rounded-xl overflow-hidden">
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
                            <article key={item.title} className="bg-background rounded-xl p-6 border border-border">
                                <div className="relative h-52 rounded-lg overflow-hidden mb-4">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
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