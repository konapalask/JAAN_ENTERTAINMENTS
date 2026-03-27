"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-40">
      {/* Multi-Color Luxury Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[70%] w-[70%] rounded-full bg-accent-emerald/5 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] h-[60%] w-[60%] rounded-full bg-accent-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-[50%] w-[80%] rounded-full bg-accent-navy/40 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 inline-block rounded-full border border-accent-gold/20 bg-accent-gold/5 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.6em] text-accent-gold backdrop-blur-xl border-glow-gold"
        >
          The Zenith of Entertainment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-outfit text-6xl font-bold leading-[1.05] tracking-tighter md:text-8xl lg:text-[10rem]"
        >
          The Home of <br />
          <span className="text-accent-gold text-glow-gold italic">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mx-auto mt-12 max-w-3xl text-lg font-light leading-relaxed text-white/40 md:text-xl lg:text-2xl"
        >
          Where world-class architecture meets the thrill of the future. 
          Step into a multidimensional realm of luxury and fun.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center gap-8 sm:flex-row"
        >
          <Button variant="gold" showIcon className="w-full sm:w-auto min-w-[220px]">
            Begin Journey
          </Button>
          <Button variant="glass" className="w-full sm:w-auto min-w-[220px]">
            Explore Hubs
          </Button>
        </motion.div>

        {/* Stats / Floating elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-32"
        >
          <GlassCard className="flex flex-col items-center gap-2 py-8">
            <span className="text-4xl font-bold text-accent-emerald tracking-tighter">3+</span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Premium Locations</span>
          </GlassCard>
          <GlassCard className="flex flex-col items-center gap-2 py-8">
            <span className="text-4xl font-bold text-accent-emerald tracking-tighter">50k+</span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Happy Visitors</span>
          </GlassCard>
          <GlassCard className="flex flex-col items-center gap-2 py-8">
            <span className="text-4xl font-bold text-accent-emerald tracking-tighter">50+</span>
            <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">Thrill Activities</span>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
