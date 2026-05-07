"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen">
      <GlassNavbar />
      
      <div className="pt-40 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-gold">Legal</span>
            <h1 className="font-outfit text-5xl md:text-6xl font-bold mt-4 tracking-tighter">Cookie Policy</h1>
            <p className="mt-6 text-white/30 font-light text-sm italic">Last Updated: May 7, 2026</p>

            <div className="mt-16 space-y-12 text-white/60 font-light leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help us remember your preferences and improve your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. How We Use Cookies</h2>
                <p>
                  We use cookies to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Understand how you use our website (Analytics).</li>
                  <li>Remember your preferences (Functional).</li>
                  <li>Ensure the website functions correctly (Necessary).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. Types of Cookies We Use</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-bold text-white/80">Necessary Cookies:</p>
                    <p>Required for basic site functionality.</p>
                  </div>
                  <div>
                    <p className="font-bold text-white/80">Analytical Cookies:</p>
                    <p>Used to track visitor behavior and site performance.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Managing Cookies</h2>
                <p>
                  You can choose to disable cookies through your browser settings. However, doing so may affect the functionality of our website.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
