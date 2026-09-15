import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RoomCard from "@/components/RoomCard";
import { roomCategories, getRoomSlides } from "@/data/sanihara-rooms";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const freeImages = {
    hero: "/78562374.webp",
    introOne: "/ROYAL-CLASSIC-DOUBLE1-room-1.webp",
    introTwo: "/restorunt6-dine-2.webp",
    introThree: "/pool2-3.webp",
    bonfire: "/3271b747.webp",
    joggingTracks: "/JOGGING-TRACK.webp",
};

export const metadata = {
    title:
        "The Sanihara Hotel & Resort Wayanad | Luxury Resort in Lakkidi Kerala",
    description:
        "Stay at The Sanihara Hotel & Resort in Lakkidi, Wayanad — a premium rainforest retreat with elegant rooms, Sofy's Restaurant, pool, wellness facilities, and unforgettable Kerala hospitality.",
};

const highlights = [
    {
        title: "Swimming Pool",
        image: "/pool2-updated.webp",
        description:
            "Our well-maintained swimming pool provides the perfect setting to unwind and refresh. Surrounded by tropical gardens and open skies, it offers a serene space for relaxation and leisure throughout your stay.",
        bullets: [
            "Surrounded by lush tropical greenery",
            "Perfect for families and leisure swimmers",
            "Ideal for a refreshing retreat after a day of exploration", 
        ],
        },
    {
        title: "Ayurveda Treatment & Wellness Center",
        image: "/ayurveda-treatment-wellness-center-updated.webp",
        description:
            "Experience holistic rejuvenation through traditional Ayurvedic therapies designed to restore balance and well-being. Our wellness center offers a curated selection of treatments delivered by trained professionals in a calm and therapeutic environment.",
        bullets: [
            "Traditional Ayurvedic therapy menu",
            "Delivered by trained wellness professionals",
            "Calm and therapeutic setting",
        ],
    },
    {
        title: "Children's Playground",
        image: "/childrens-playground-updated.webp",
        description:
            "A dedicated outdoor play area ensures that younger guests have a safe, fun, and engaging space for recreational activities — making The Sanihara an ideal choice for families traveling with children.",
        bullets: [
            "Safe and well-maintained play equipment",
            "Surrounded by open, natural surroundings",
            "Ideal for family stays and group vacations",
        ],
    },
    {
        title: "Campfire with Music",
        image: freeImages.bonfire,
        description:
            "As evening descends over the hills of Wayanad, The Sanihara's campfire area transforms into a warm and inviting space for guests to unwind. Gather around the glow of the fire, share stories, and enjoy curated music in the serene cool air of the mountains.",
        bullets: [
            "Perfect for group gatherings and family evenings",
            "Curated music experience",
            "Cozy ambiance amidst natural surroundings",
        ],
        },
    {
        title: "Gymnasium",
        image: "/Gymnasium-updated.webp",
        description:
            "Our fully equipped gymnasium enables guests to maintain their fitness routine with ease throughout their stay. Designed for a range of workouts, the facility provides a comfortable and functional environment for active guests.",
        bullets: [
            "Well-equipped with modern fitness gear",
            "Suitable for all fitness levels",
            "Comfortable and functional setting",
        ],
    },
    {
        title: "Outdoor Games & Recreation",
        image: "/outdoor-games-recreation-updated.webp",
        description:
            "A spacious outdoor area caters to active guests and group experiences, with a variety of sports and recreational activities available on the property.",
        bullets: [
            "Basketball, football, cricket, and badminton",
            "Indoor games: table tennis, carrom, chess, and Ludo",
            "Jogging track and bicycling through the property",
            "Ideal for corporate groups, families, and leisure travelers",
        ],
    },
];

const introSlides = [
    freeImages.introOne,
    freeImages.introTwo,
    freeImages.introThree,
];

const eventVenues = [
    {
        title: "Conference Hall",
        image: "/confrence-hall-01-updated.webp",
        description:
            "Ideal for corporate meetings, seminars, training sessions, and mid-scale events, the Conference Hall offers a professional setting with adaptable layouts.",
        details: [
            "Capacity: Up to 150 Guests",
            "Suitable For: Meetings, conferences, seminars, and training sessions",
            "Layout: Flexible seating arrangements available",
        ],
    },
    {
        title: "Mini Conference Hall",
        image: "/mini-confrence-hall-02-updated.webp",
        description:
            "A perfect setting for smaller meetings, workshops, and private business discussions — offering a focused and efficient environment for intimate corporate engagements.",
        details: [
            "Capacity: Up to 75 Guests",
            "Suitable For: Small meetings, workshops, and private business sessions",
            "Layout: Functional and well-organized",
        ],
    },
    {
        title: "Open Wedding & Event Space",
        image: "/open-wedding-event-space-03.webp",
        description:
            "An expansive open-air venue designed for grand celebrations — providing a versatile setting for weddings, receptions, and large social events with full flexibility for customized décor, stage setups, and catering.",
        details: [
            "Capacity: Up to 1,000 Guests",
            "Suitable For: Weddings, receptions, and large-scale social events",
            "Layout: Open-air, fully customizable",
        ],
    },
];

const exploreCategories = [
    {
        title: "Nearby Attractions (Within 5 km)",
        image: "/nearby-attractions-updated.webp",
        attractions: [
            { name: "Lakkidi View Point", description: "Breathtaking valley views" },
            { name: "Chain Tree", description: "A landmark steeped in local legend" },
            { name: "Pookode Lake", description: "Scenic freshwater lake with boating" },
            { name: "En Ooru Tribal Heritage Village", description: "Cultural and heritage experience" },
            { name: "Honey Museum", description: "Insight into beekeeping and honey production" },
            { name: "Vythiri Farm", description: "Plantation and nature walks" },
        ],
    },
    {
        title: "Adventure & Recreation (5–10 km)",
        image: "/adventure-recreation-updated.webp",
        attractions: [
            { name: "Wayanad Adventure Park", description: "Ziplining and outdoor activities" },
            { name: "Mountain Race Go Karting", description: "Go-kart racing" },
            { name: "Lala Land Adventure Park & Field of Lights", description: "Unique themed attraction" },
        ],
    },
    {
        title: "Nature & Scenic Excursions",
        image: "/naturescenicexcursions.webp",
        attractions: [
            { name: "Banasura Sagar Dam", description: "The largest earthen dam in India" },
            { name: "Banasura Hill", description: "Ideal for trekking" },
            { name: "Karalad Lake", description: "Water activities and leisure" },
            { name: "Meenmutty Waterfalls", description: "A stunning multi-tiered waterfall" },
            { name: "Kanthanpara Waterfalls", description: "Less crowded and peaceful" },
        ],
    },
    {
        title: "Trekking & Outdoor Experiences",
        image: "/trekking-outdoor-experiences.webp",
        attractions: [
            { name: "Chembra Peak", description: "Trekking with a heart-shaped lake" },
            { name: "Soochipara Waterfalls", description: "Popular trekking and waterfall spot" },
            { name: "900 Kandi", description: "Off-road adventure and viewpoints" },
            { name: "Kurumbalakotta", description: "Sunrise trekking experience" },
        ],
    },
    {
        title: "Heritage & Culture",
        image: "/heritage-culture.webp",
        attractions: [
            { name: "Edakkal Caves", description: "Prehistoric carvings and history" },
            { name: "Wayanad Heritage Museum", description: "Archaeological and cultural exhibits" },
            { name: "Ancient Jain Temple Bathery", description: "Historic architectural site" },
        ],
    },
    {
        title: "Wildlife & Eco Tourism",
        image: "/wayanad-wildlife-sanctuary.webp",
        attractions: [
            { name: "Wayanad Wildlife Sanctuary", description: "Rich biodiversity and safari experiences" },
            { name: "Kuruva Island", description: "Unique river island ecosystem" },
            { name: "Tholpetty Wildlife Sanctuary", description: "Ideal for wildlife spotting" },
        ],
    },
    {
        title: "Spiritual Destinations",
        image: "/spiritual-destinations-updated.webp",
        attractions: [
            { name: "Thirunelli Temple", description: "A serene and sacred destination" },
        ],
    },
];

export default function TheSaniharaHotelResortPage() {
    return (
        <main className="min-h-screen pt-20">
            <section className="relative text-primary-foreground py-24 md:py-48 overflow-hidden ">
                <Image
                    src={freeImages.hero}
                    alt="The Sanihara Hotel & Resort"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                        Welcome to The Sanihara Hotel & Resort <br />
                        <span className="text-2xl md:text-5xl font-serif font-semibold">
                        One of the Best Resorts in Wayanad, Lakkidi, Kerala
                        </span>
                    </h1>
                    <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                </div>
            </section>

            <section className="container mx-auto py-16 px-4 max-w-4xl text-center ">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 capitalize italic">
                    Relax and Enjoy your Holidays at One of the Most Peaceful Resorts in Lakkidi, Wayanad
                </h2>
                <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                Experiences at The Sanihara
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
                                A Perfect Environment to Relax and Unwind
                                </h2>
                                <div className="h-[3px] w-24 bg-[#b43a3a]  mt-5 rounded-full" />
                            </div>
                            <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                <p>
                                Escape your everyday life and join us at The Sanihara Hotel & Resort — surrounded by lush rainforests and majestic hilltops of Wayanad in Northern Kerala. Located in the heart of Lakkidi, the entry point of Wayanad, our resort sits within easy reach of Vythiri and all of Wayanad's sightseeing attractions.
                                </p>
                                <p>
                                "The Sanihara" — a Sanskrit word meaning "covered with mist or fog" — perfectly describes the year-round weather of Lakkidi, the part of Wayanad district known for its finest climate.
Our hotel features well-furnished rooms designed for couples, families, groups, and solo travelers alike. Rooms are equipped with contemporary amenities, stunning mountain views, and tropical garden outlooks — crafted to deliver comfort that surpasses other resorts in Wayanad.

                                </p>
                                <p> At The Sanihara, we curate experiences that cater to relaxation, fitness, and fun. Guests can choose from a diverse selection of Hotel rooms while enjoying access to a rich array of resort amenities. Whether you prefer a refreshing dip in the pool, an active morning at the gym, or lively indoor and outdoor games - such as cricket, football, badminton, carrom, and Ludo - there is never a dull moment. Beyond recreation, The Sanihara offers unique experiential touches, including evening campfires with music, curate romantic candlelight dinners, authentic dining at our restaurant, and hassle-free local sightseeing tours to complete your ideal holiday.
                                </p>
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
                                                    alt={`The Sanihara view ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                                                <div className="absolute left-5 bottom-5 text-white">
                                                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-90">
                                                        The Sanihara
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
                            Discover the different room categories and stay experience at The Sanihara Hotel &amp; Resort
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {roomCategories.map((room) => (
                            <RoomCard
                                key={room.id}
                                {...room}
                                slides={getRoomSlides(room.id)}
                            />
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
                                Sofy's Restaurant — A Dining Experience Like No Other
                                </h2>
                                <div className="space-y-4 text-base md:text-lg text-foreground/85 leading-relaxed">
                                    <p>
                                    Tucked within the lush greenery of The Sanihara, Sofy's Restaurant is more than a dining venue — it is a destination in itself. As the signature all-day dining destination of the resort, Sofy's seamlessly blends global culinary influences with the authentic flavors of regional cuisine, all served in an elegant and inviting ambiance that reflects the character of Wayanad.
                                    </p>
                                    <p>The restaurant offers 60 well-appointed indoor covers and an additional open-air seating area for 30 guests — a versatile setting for everything from a wholesome family breakfast to an intimate dinner and a relaxed corporate lunch. Whether you are a resident guest or a discerning walk-in diner, every visit to Sofy's is an unhurried, memorable experience.
                                    </p>
                                    <p>From classic North Indian curries to signature tandoor preparations and multi-cuisine favourites, every dish is crafted with premium ingredients, traditional techniques, and a consistent focus on quality, hygiene, and presentation. At Sofy's, dining is not just about food — it is about savoring every moment of your Wayanad stay.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative md:h-[60rem] rounded-xl overflow-hidden">
                            <Image
                                src="/restorunt2.webp"
                                alt="Sofy's Restaurant at The Sanihara"
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
                            Highlights of The Sanihara Hotel &amp; Resort
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed">
                        A thoughtfully curated range of recreational, wellness, and leisure facilities ensures a balanced and memorable stay experience for every guest.
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

            <section className="py-14 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-[92rem]">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                            Meetings &amp; Events at The Sanihara
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed max-w-4xl mx-auto">
                            The Sanihara offers versatile event spaces designed to host corporate functions, social
                            gatherings, and large-scale celebrations with efficiency and elegance. Each venue is
                            supported by professional service, flexible seating arrangements, and essential event
                            infrastructure.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {eventVenues.map((venue) => (
                            <article
                                key={venue.title}
                                className="bg-background border border-border rounded-xl overflow-hidden"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={venue.image}
                                        alt={venue.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl md:text-2xl font-semibold mb-3">{venue.title}</h3>
                                    <p className="text-foreground/85 leading-relaxed mb-3">{venue.description}</p>
                                    <ul className="list-disc pl-6 text-foreground/85 space-y-1">
                                        {venue.details.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14">
                <div className="container mx-auto px-4 max-w-[92rem]">
                    <div className="text-center mb-12">
                        <h2 className="text-6xl md:text-7xl font-display font-light mb-6 tracking-tight">
                            Explore Wayanad from The Sanihara
                        </h2>
                        <div className="h-[3px] w-24 bg-[#b43a3a] mx-auto mt-5 rounded-full" />
                        <p className="text-base md:text-xl mt-2 text-foreground/85 leading-relaxed max-w-4xl mx-auto">
                            Ideally located in the heart of Wayanad, The Sanihara offers guests effortless access to a
                            range of sightseeing destinations and adventure experiences. Whether you seek nature, culture,
                            or outdoor activities, our location serves as the perfect base for curated 2–4 day itineraries.
                        </p>
                    </div>
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        autoScrollMs={4000}
                        className="w-full relative px-12 md:px-14"
                    >
                        <CarouselContent>
                            {exploreCategories.map((category) => (
                                <CarouselItem
                                    key={category.title}
                                    className="basis-full md:basis-1/2"
                                >
                                    <article className="bg-background border border-border rounded-xl overflow-hidden h-full">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                                            <div className="relative min-h-56 sm:min-h-full">
                                                <Image
                                                    src={category.image}
                                                    alt={category.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="explore-content p-6 flex flex-col justify-center">
                                                <h3 className="text-3xl md:text-4xl font-semibold mb-4">{category.title}</h3>
                                                <ul className="space-y-3 text-foreground/85">
                                                    {category.attractions.map((attraction) => (
                                                        <li key={attraction.name} className="leading-relaxed">
                                                            <span className="font-semibold">{attraction.name}</span>
                                                            {" – "}
                                                            {attraction.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 border-white/40 text-white hover:bg-black/60 hover:text-white z-10"
                            aria-label="Previous slide"
                        >
                            <ArrowLeft className="h-5 w-5 text-white" />
                        </CarouselPrevious>
                        <CarouselNext
                            className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 border-white/40 text-white hover:bg-black/60 hover:text-white z-10"
                            aria-label="Next slide"
                        >
                            <ArrowRight className="h-5 w-5 text-white" />
                        </CarouselNext>
                    </Carousel>
                </div>
            </section>

        </main>
    );
}
