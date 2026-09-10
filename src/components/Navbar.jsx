"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationSelector } from "./LocationSelector";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const FlagIcon = ({ country, className }) => {
  if (country === "IN") {
    return (
      <svg
        viewBox="0 0 24 16"
        className={cn("h-4 w-6 rounded-[2px] shrink-0 overflow-hidden", className)}
        aria-hidden
      >
        <rect width="24" height="5.33" y="0" fill="#FF9933" />
        <rect width="24" height="5.34" y="5.33" fill="#FFFFFF" />
        <rect width="24" height="5.33" y="10.67" fill="#138808" />
        <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.7" />
        <circle cx="12" cy="8" r="0.45" fill="#000080" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 16"
      className={cn("h-4 w-6 rounded-[2px] shrink-0 overflow-hidden", className)}
      aria-hidden
    >
      <rect width="24" height="8" y="0" fill="#CE1126" />
      <rect width="24" height="8" y="8" fill="#FFFFFF" />
    </svg>
  );
};

const callContacts = [
  {
    country: "India",
    phone: "+918547296999",
    phoneHref: "tel:+918547296999",
    flagCode: "IN",
  },
  {
    country: "Indonesia",
    phone: "+62 812-1293-5550",
    phoneHref: "tel:+6281212935550",
    flagCode: "ID",
  },
];

const CallUsDropdown = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors",
            className
          )}
          aria-label="Call us"
        >
          <Phone className="h-4 w-4" />
          <span className="text-sm font-light">Call us</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        sideOffset={10}
        className="w-[min(100vw-2rem,20rem)] p-0 bg-[#1a1a1a] border-border text-foreground shadow-lg relative"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1a1a1a] border-l border-t border-border" />
        <div className="relative z-10 divide-y divide-border/60">
          {callContacts.map((contact) => (
            <a
              key={contact.country}
              href={contact.phoneHref}
              className="flex items-center gap-3 px-4 py-3.5 hover:bg-secondary/40 transition-colors"
            >
              <FlagIcon country={contact.flagCode} />
              <span className="flex-1 text-sm font-light">
                <span className="text-foreground">{contact.country}:</span>{" "}
                <span className="text-foreground/85">{contact.phone}</span>
              </span>
              <Phone className="h-4 w-4 text-brand shrink-0" />
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

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
            <div className="h-5 w-px bg-border" />
            <CallUsDropdown />
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
            <div className="pt-4 space-y-3 px-4">
              <p className="text-sm font-medium text-foreground/70">Call us</p>
              <div className="rounded-lg border border-border bg-[#1a1a1a] divide-y divide-border/60 overflow-hidden">
                {callContacts.map((contact) => (
                  <a
                    key={contact.country}
                    href={contact.phoneHref}
                    className="flex items-center gap-3 px-4 py-3.5 hover:bg-secondary/40 transition-colors"
                  >
                    <FlagIcon country={contact.flagCode} />
                    <span className="flex-1 text-sm font-light">
                      <span className="text-foreground">{contact.country}:</span>{" "}
                      <span className="text-foreground/85">{contact.phone}</span>
                    </span>
                    <Phone className="h-4 w-4 text-brand shrink-0" />
                  </a>
                ))}
              </div>
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
