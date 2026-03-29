"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Button } from "./Button";
import Link from "next/link";

interface LocationCardProps {
  name: string;
  city: string;
  image: string;
  description: string;
  href: string;
  bookingUrl?: string;
}

export const LocationCard = ({ name, city, image, description, href, bookingUrl }: LocationCardProps) => {
  const hasImage = !!image;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <GlassCard className="group overflow-hidden rounded-3xl p-0">
        {/* Image or No-Image placeholder */}
        <div className="relative h-64 w-full overflow-hidden">
          {hasImage ? (
            <>
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </>
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-white/[0.03] via-accent-gold/5 to-black/20 flex flex-col items-center justify-center gap-4">
              <div className="h-20 w-20 rounded-[2rem] overflow-hidden glass border-white/10 p-3 relative">
                <Image
                  src="/E4LOGO.jpeg"
                  alt={`${name} Logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/20">
                Coming Soon
              </span>
            </div>
          )}

          {hasImage && name.includes("E3") && (
            <div className="absolute top-6 left-6 h-12 w-12 rounded-2xl overflow-hidden glass border-white/10 z-10">
              <Image
                src="/LOGO.jpeg"
                alt={`${name} Logo`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-accent-gold border border-accent-gold/20 backdrop-blur-xl border-glow-gold">
            <MapPin size={10} className="text-accent-gold" />
            {city}
          </div>
        </div>

        <div className="p-10">
          <h3 className="font-outfit text-3xl font-bold tracking-tighter">{name}</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/30 font-light line-clamp-2">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-between gap-4">
            {bookingUrl ? (
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  variant="gold"
                  className="w-full px-7 py-3 text-[10px] font-bold flex items-center justify-center gap-2"
                >
                  Book Now <ExternalLink size={12} />
                </Button>
              </a>
            ) : (
              <Link href={href} className="flex-1">
                <Button variant="glass" className="w-full px-7 py-3 text-[10px] font-bold group-hover:bg-accent-emerald/10 group-hover:text-accent-emerald group-hover:border-accent-emerald/20">
                  Explore Hub
                </Button>
              </Link>
            )}
            <ArrowRight size={24} className="text-accent-emerald opacity-0 -translate-x-4 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 group-hover:drop-shadow-[0_0_15px_rgba(0,255,136,0.6)] shrink-0" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
