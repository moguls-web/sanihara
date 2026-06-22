"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const defaultContact = {
  address: "8/468A Lakkidi, Wayanad, Kerala 673576 – India",
  phone: "+91-1234567890",
  phoneHref: "tel:+911234567890",
  email: "info@thesanihara.com",
  workingHours: "24/7 Reception",
};

const hotelContacts = {
  "/hotels/guest-house-555-nkl": {
    address:
      "Jl. Merica, RT.1/RW.12, Banten, Kec. Pamulang, Kota Tangerang Selatan, Banten 15418, Indonesia",
    phone: "+62 812-1293-5550",
    phoneHref: "tel:+6281212935550",
    email: "guesthousemerica@gmail.com",
    workingHours: "24/7 Reception",
  },
  "/hotels/misty-heights-by-the-sanihara": {
    address: "Old Vythiri, Vythiri, Kerala 673576",
    phone: "+91 85472 96999",
    phoneHref: "tel:+918547296999",
    email: "reservations@thesanihara.com",
    workingHours: "24/7 Reception",
  },
  "/hotels/555-nangka-guest-house": {
    address: "Jl. Nangka IV No.21, RT.10/RW.2, Cipete Utara, Kec. Kebayoran Baru, Kota Jakarta Selatan, DKI Jakarta 12150, Indonesia",
    phone: "+62 813-6775-5515", 
    email: "555nangka@gmail.com",
    workingHours: "24/7 Reception",
  },
};

const Footer = () => {
  const pathname = usePathname();
  const contact = hotelContacts[pathname] ?? defaultContact;

  return (
    <footer className="bg-[#1a1a1a] text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">The Sanihara</h3>
            <p className="text-sm opacity-90">
              A sanctuary above the clouds. Experience luxury amidst the pristine rainforest of Wayanad, Kerala.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/suites" className="hover:text-brand transition-colors">
                  Suites & Villas
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-brand transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-brand transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-brand transition-colors">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>{contact.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href={contact.phoneHref} className="hover:text-brand transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-brand transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span>{contact.workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm opacity-90">
              Subscribe to receive exclusive offers and updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="brand" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © 2024 The Sanihara Hotel & Resort. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="hover:text-brand transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-brand transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

