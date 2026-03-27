"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <GlassNavbar />
      
      <div className="pt-32">
        <Section title="Get in Touch" subtitle="Contact Us" centered>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Have questions or want to host a private event? Reach out to our team 
            and we'll get back to you within 24 hours.
          </p>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mt-16">
            <GlassCard className="flex flex-col items-center text-center gap-6 border-white/5 group">
              <div className="h-14 w-14 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shadow-[0_0_20px_rgba(197,160,89,0.1)] group-hover:scale-110 transition-transform duration-500">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.4em] text-accent-gold">Direct Line</h3>
              <p className="text-lg font-light text-white/40 leading-relaxed">+91 98765 43210<br />+91 91234 56789</p>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center gap-6 border-white/5 group">
              <div className="h-14 w-14 rounded-full bg-accent-emerald/10 flex items-center justify-center text-accent-emerald shadow-[0_0_20px_rgba(0,255,136,0.1)] group-hover:scale-110 transition-transform duration-500">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.4em] text-accent-emerald">Privileged Mail</h3>
              <p className="text-lg font-light text-white/40 leading-relaxed">info@jaanentertainments.com<br />concierge@jaan.com</p>
            </GlassCard>

            <GlassCard className="flex flex-col items-center text-center gap-6 border-white/5 group">
              <div className="h-14 w-14 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shadow-[0_0_20px_rgba(197,160,89,0.1)] group-hover:scale-110 transition-transform duration-500">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-[10px] uppercase tracking-[0.4em] text-accent-gold">The Hubs</h3>
              <p className="text-lg font-light text-white/40 leading-relaxed">Vijayawada &<br />Eluru, Andhra Pradesh</p>
            </GlassCard>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 max-w-4xl mx-auto">
             <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold">Response Tiers</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-white/40 font-light">Direct Inquiries</span>
                    <span className="text-[10px] font-bold text-accent-gold">{"< 2 Hours"}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-white/40 font-light">Partnership Proposals</span>
                    <span className="text-[10px] font-bold text-accent-gold">24 Hours</span>
                  </div>
                </div>
             </div>
             <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald">Concierge Hours</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-white/40 font-light">Weekdays</span>
                    <span className="text-[10px] font-bold text-accent-emerald">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-white/40 font-light">Weekends</span>
                    <span className="text-[10px] font-bold text-accent-emerald">09:00 - 23:00</span>
                  </div>
                </div>
             </div>
          </div>
        </Section>
      </div>

      <Section className="py-0 mb-20">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-10 md:p-16 border-white/5 hover:border-accent-gold/10">
            <form className="space-y-12">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold">The Identity</label>
                  <input type="text" className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold bg-white/[0.01] text-sm" placeholder="Your Name" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold">Electronic Mail</label>
                  <input type="email" className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold bg-white/[0.01] text-sm" placeholder="email@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold">Subject of Interest</label>
                <input type="text" className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold bg-white/[0.01] text-sm" placeholder="How can we assist?" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold">Direct Message</label>
                <textarea rows={5} className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold bg-white/[0.01] text-sm" placeholder="Type your inquiry..."></textarea>
              </div>
              <Button variant="gold" className="w-full py-6 font-bold text-lg shadow-[0_20px_40px_rgba(197,160,89,0.15)]">Initialize Engagement</Button>
            </form>
          </GlassCard>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
