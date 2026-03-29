"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
];

export const GlassNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-8 z-50 w-[95%] -translate-x-1/2 rounded-full transition-all duration-500 md:w-[85%]",
        isScrolled ? "glass py-5" : "bg-transparent py-8"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="/" className="relative flex items-center gap-4 group">
          <div className="absolute -inset-4 bg-accent-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image 
              src="/jaan logo.jpeg" 
              alt="Jaan Logo" 
              fill 
              className="object-cover brightness-110" 
              priority
            />
          </div>
          <span className="text-sm md:text-lg font-bold tracking-[0.2em] text-white font-outfit uppercase">
            Jaan <span className="text-accent-gold">Entertainment</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 transition-all duration-500 hover:text-accent-gold hover:tracking-[0.4em]"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="gold" className="px-7 py-2.5 text-[10px]">
              Inquire
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass absolute top-16 left-0 w-full animate-in fade-in slide-in-from-top-5 rounded-3xl p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
