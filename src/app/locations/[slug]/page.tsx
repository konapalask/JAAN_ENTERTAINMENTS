"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Section } from "@/components/Section";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { LOCATIONS } from "@/constants/locations";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, IndianRupee, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { use } from "react";

export default function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <GlassNavbar />

      {/* Luxury Hero Header */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={location.image}
          alt={location.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-7xl w-full"
            >
              { (location.name.includes("E3") || location.name.includes("E4")) && (
                <div className="relative h-20 w-20 mb-8 rounded-[2rem] overflow-hidden glass border-white/10 p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                   <Image 
                     src={location.name.includes("E3") ? "/LOGO.jpeg" : "/E4LOGO.jpeg"} 
                     alt={`${location.name} Logo`} 
                     fill 
                     className="object-contain" 
                   />
                </div>
              )}
              <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-accent-gold text-glow-gold mb-6 block">
                {location.city} Destination
              </span>
              <h1 className="font-outfit text-6xl font-bold md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter">
                {location.name}
              </h1>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <span className="flex items-center gap-3 glass px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border-accent-gold/20 text-accent-gold border-glow-gold">
                  <IndianRupee size={12} /> Starts {location.pricing}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">{location.features[0]} Inclusive</span>
              </div>
            </motion.div>
        </div>
      </div>

      <Section className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-20">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8 font-outfit">The Experience</h2>
            <p className="text-2xl font-light text-white/50 leading-relaxed max-w-3xl mb-10">
              {location.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
               <div className="glass p-6 border-white/5 rounded-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold block mb-3">Sensory Profile</span>
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.1em] leading-relaxed">
                    Haptic Feedback: Full Body Immersion <br />
                    Visual Fidelity: 4K+ Per Eye <br />
                    Audio Tech: 3D Spatial Systems
                  </p>
               </div>
               <div className="glass p-6 border-white/5 rounded-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald block mb-3">Operational Integrity</span>
                  <p className="text-[10px] text-white/20 uppercase tracking-[0.1em] leading-relaxed">
                    Maintenance: Daily Structural Audit <br />
                    Sanitization: UV-C Real-time Cleaning <br />
                    Staff Ratio: 1 Concierge per 4 Slots
                  </p>
               </div>
            </div>
          </motion.div>

          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-12 font-outfit">Exclusive Highlights</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {location.activities.map((act, i) => (
                <motion.div 
                  key={act.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="h-full flex flex-col gap-4 border-white/5 hover:border-accent-emerald/20 relative group">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 size={16} className="text-accent-emerald" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">{act.name}</h3>
                    <p className="text-sm font-light text-white/30 leading-relaxed line-clamp-3">{act.desc}</p>
                    <div className="mt-auto pt-4">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald">Elite Access</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="border-accent-gold/20 bg-accent-gold/[0.01] p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <h3 className="text-3xl font-bold mb-10 font-outfit tracking-tighter">Reserve Access</h3>
              <div className="space-y-7 mb-12">
                {location.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-5 text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(197,160,89,1)]" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link href="/booking" className="block">
                <Button variant="gold" className="w-full py-6 font-bold text-lg shadow-[0_20px_40px_rgba(197,160,89,0.1)]">
                  Confirm Booking
                </Button>
              </Link>
              <p className="mt-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">Architecture of Fun</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-12 border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold mb-8 font-outfit">Position Hub</h3>
              <div className="aspect-square rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <MapPin size={48} className="text-accent-gold opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
