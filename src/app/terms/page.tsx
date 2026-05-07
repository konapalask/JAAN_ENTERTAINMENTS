"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export default function TermsOfServicePage() {
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
            <h1 className="font-outfit text-5xl md:text-6xl font-bold mt-4 tracking-tighter">Terms of Service</h1>
            <p className="mt-6 text-white/30 font-light text-sm italic">Last Updated: May 7, 2026</p>

            <div className="mt-16 space-y-12 text-white/60 font-light leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using our services, website, or physical locations (E3, E4, and Rajiv Gandhi Park), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. Use of Services</h2>
                <p>
                  Our entertainment facilities are provided for your personal enjoyment. You agree to follow all safety guidelines and staff instructions while on our premises. We reserve the right to refuse service to anyone who violates our safety policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. Intellectual Property</h2>
                <p>
                  All content on this website, including logos, text, and images, is the property of Jaan Entertainment Pvt Ltd and is protected by intellectual property laws. You may not use our content without explicit written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Limitation of Liability</h2>
                <p>
                  Jaan Entertainment Pvt Ltd is not liable for any personal injury or loss of property incurred at our facilities, except where required by law. Users participate in high-thrill activities at their own risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">5. Governing Law</h2>
                <p>
                  These terms are governed by the laws of India and the state of Andhra Pradesh. Any disputes shall be subject to the exclusive jurisdiction of the courts in Vijayawada.
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
