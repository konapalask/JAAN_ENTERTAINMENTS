"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
            <h1 className="font-outfit text-5xl md:text-6xl font-bold mt-4 tracking-tighter">Privacy Policy</h1>
            <p className="mt-6 text-white/30 font-light text-sm italic">Last Updated: May 7, 2026</p>

            <div className="mt-16 space-y-12 text-white/60 font-light leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. Introduction</h2>
                <p>
                  Jaan Entertainment Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or our entertainment hubs (E3, E4, and Rajiv Gandhi Park).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, email address, and phone number when you fill out an enquiry form or make a booking. We also collect anonymous usage data to improve our website experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. How We Use Your Information</h2>
                <p>
                  Your information is used to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Process your enquiries and bookings.</li>
                  <li>Send you updates about our services and events.</li>
                  <li>Improve our facilities and customer service.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at <span className="text-accent-gold">jay@jaanentertainment.in</span>.
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
