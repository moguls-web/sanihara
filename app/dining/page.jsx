"use client";

import Image from "next/image";
import diningImage from "@/assets/dining-restaurant.jpg";

export default function Dining() {
  const diningSections = [
    {
      heading: "Sofy’s Restaurant – The Sanihara",
      paragraphs: [
        "Sofy’s Restaurant is The Sanihara’s signature all-day dining destination, offering a refined and diverse culinary experience. Whether you’re a resident guest or a discerning walk-in diner, Sofy’s seamlessly blends global flavors with local authenticity in an elegant setting.",
        "The restaurant boasts 60 indoor seats, providing a versatile dining environment perfect for families, corporate guests, and group travelers. Additionally, a spacious outdoor area accommodates 30 more guests, offering a relaxed atmosphere for intimate gatherings and curated dining experiences.",
        "Our menu features a curated selection of Indian, Continental, and international cuisines, with a strong focus on North Indian specialties. Each dish is crafted using authentic recipes, premium ingredients, and traditional cooking techniques, ensuring a memorable dining experience with every bite.",
        "Sofy’s Restaurant is the perfect choice for a wholesome breakfast, business lunch, or a leisurely dinner, where attentive service and a commitment to excellence come together to offer an unforgettable dining experience.",
        "Offering a diverse menu with a special focus on North Indian cuisine, the restaurant features 60 indoor dining covers along with outdoor seating for an additional 30 guests. It is an ideal setting for families, corporate gatherings, and groups, with a strong emphasis on quality, hygiene, and guest satisfaction.",
      ], 
    },
    {
      heading: "In-Room Dining – The Sanihara",
      paragraphs: [
        "Enjoy a premium dining experience in the comfort and privacy of your room with our In-Room Dining service. Whether you're unwinding after a long day or starting your morning in peace, our service ensures the finest hospitality right at your doorstep.",
        "Our curated menu includes a selection of Indian, Continental, and international dishes, including our signature North Indian specialties. Just like Sofy’s Restaurant, every meal is freshly prepared with premium ingredients to ensure consistency and quality.",
        "Available throughout the day, our In-Room Dining service offers everything from hearty breakfasts and light snacks to complete meals, all delivered promptly with personalized attention.",
        "In-Room Dining at The Sanihara brings a restaurant-quality experience to the tranquility of your room, combining luxury, comfort, and culinary excellence.",
        "Guests can enjoy a curated multi-cuisine menu in the comfort of their room, featuring signature North Indian dishes and freshly prepared meals with a strong focus on quality and hygiene. Prompt, efficient, and discreet service ensures a seamless dining experience, making it ideal for those seeking privacy, convenience, and comfort.",

      ], 
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 animate-fade-in-up">
            Culinary Delights
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
            Exquisite flavors in stunning settings
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-32 ">
            {diningSections.map((section, index) => (
              <div key={section.heading} className="grid lg:grid-cols-2 gap-8 items-start">
                <div
                  className={`relative min-h-[750px] rounded-2xl overflow-hidden shadow-hover group ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={diningImage}
                    alt={section.heading}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className={`space-y-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-4xl font-serif font-bold">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                   
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">Chef's Special</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our expert culinary team crafts exceptional dishes using the freshest local ingredients and authentic
              Kerala spices, combined with international flavors to create memorable dining experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Local Ingredients</h3>
                <p className="text-muted-foreground">Sourced from Wayanad's organic farms</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
                <p className="text-muted-foreground">Trained in international cuisine</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">Custom Menus</h3>
                <p className="text-muted-foreground">Tailored to your preferences</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
