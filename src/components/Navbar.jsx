"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationSelector } from "./LocationSelector";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    {
      name: "Our Hotels" , path: "/hotels", children: [ 
        { name: "The Sanihara Hotel & Resort", path: "/hotels/the-sanihara-hotel-resort" },
        { name: "Misty Heights By the Sanihara", path: "/hotels/misty-heights-by-the-sanihara" },
        { name: "Guest House 555 NKI", path: "/hotels/guest-house-555-nkl" },  
        { name: "555 Nangka Guest House", path: "/hotels/555-nangka-guest-house" } 
      ] },
    { name: "Dining", path: "/dining" },
    { name: "Events", path: "/events" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Explore", path: "/explore" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-light text-foreground hover:text-brand transition-colors tracking-wide">
            THE SANIHARA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">            
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.path}
                    className="text-sm font-light tracking-wide transition-colors text-foreground/80 hover:text-foreground inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.children.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.path}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-sm font-light tracking-wide transition-colors",
                    pathname === link.path
                      ? "text-brand"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))} 
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-light">+91-123-456-7890</span>
            </a>
            <Button variant="brand" size="default">
              Reserve
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-brand transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <LocationSelector />
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.name} className="px-4 py-3">
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-light text-foreground hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                  <div className="mt-2 ml-3 border-l border-border pl-3 space-y-1">
                    {link.children.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-sm font-light transition-colors",
                    pathname === link.path
                      ? "text-brand"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-2 px-4 py-2 text-foreground/80 hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-123-456-7890</span>
              </a>
              <Button variant="brand" size="default" className="w-full">
                Reserve
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

