"use client";

import { useState } from "react";
import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import { LOCATIONS } from "@/constants/locations";
import { Calendar, ChevronDown, User, Smartphone, MapPin } from "lucide-react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    date: "",
  });

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, location, date } = formData;
    const message = `Hello Jaan Entertainment! I would like to book a visit.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Location:* ${location}%0A*Date:* ${date}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="relative min-h-screen">
      <GlassNavbar />
      
      <div className="pt-32">
        <Section title="Reserved Fun" subtitle="Book Your Slot" centered>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Fill out the form below and our team will coordinate with you via WhatsApp 
            to confirm your booking and handle payments safely.
          </p>

          <div className="max-w-2xl mx-auto mt-16 pb-20">
            <GlassCard className="p-8 md:p-12 relative overflow-hidden border-white/5">
               {/* Decorative background glow */}
               <div className="absolute top-0 right-0 h-48 w-48 bg-accent-gold/5 blur-[120px] -z-10" />
               <div className="absolute bottom-0 left-0 h-48 w-48 bg-accent-emerald/5 blur-[120px] -z-10" />

               <form onSubmit={handleWhatsAppBooking} className="space-y-10">
                  <div className="space-y-8">
                    {/* Name */}
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold flex items-center gap-2">
                          <User size={12} /> Elite Name
                       </label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={(e) => setFormData({...formData, name: e.target.value})}
                         className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold placeholder:text-white/10 text-sm" 
                         placeholder="e.g. Rahul Verma" 
                       />
                    </div>

                    {/* Phone */}
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold flex items-center gap-2">
                          <Smartphone size={12} /> Communication Line
                       </label>
                       <input 
                         required
                         type="tel" 
                         value={formData.phone}
                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
                         className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold placeholder:text-white/10 text-sm" 
                         placeholder="+91 00000 00000" 
                       />
                    </div>

                    {/* Location Selection */}
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold flex items-center gap-2">
                          <MapPin size={12} /> Preferred Hub
                       </label>
                       <div className="relative">
                         <select 
                           required
                           value={formData.location}
                           onChange={(e) => setFormData({...formData, location: e.target.value})}
                           className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold appearance-none text-sm"
                         >
                            <option value="" disabled className="bg-black">Select Destination</option>
                            {LOCATIONS.map(l => (
                              <option key={l.slug} value={l.name} className="bg-black">{l.name} ({l.city})</option>
                            ))}
                         </select>
                         <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/30" size={18} />
                       </div>
                    </div>

                    {/* Date */}
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold flex items-center gap-2">
                          <Calendar size={12} /> Booking Date
                       </label>
                       <input 
                         required
                         type="date" 
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         className="w-full glass rounded-3xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold [color-scheme:dark] text-sm" 
                       />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-6 font-bold text-lg shadow-[0_20px_40px_rgba(0,255,136,0.15)]">
                    Confirm Experience
                  </Button>
                  
                  <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold">
                    Direct Concierge Redirect
                  </p>
               </form>
            </GlassCard>

            <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold">Elite Access Benefits</h3>
                <ul className="space-y-6">
                  {[
                    "Priority Queue Management",
                    "Dedicated Personal Concierge",
                    "Exclusive Lounge Access",
                    "Complimentary Signature Refreshments"
                  ].map(benefit => (
                    <li key={benefit} className="flex items-center gap-4 text-xs font-light text-white/40">
                      <div className="h-1 w-1 rounded-full bg-accent-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-emerald">Reservation Policy</h3>
                <p className="text-xs text-white/20 leading-relaxed font-light">
                  Bookings are finalized via WhatsApp to ensure personalized service. 
                  Please arrive 15 minutes prior to your allocated slot for the 
                  Premium Orientation session.
                </p>
                <div className="p-6 glass border-white/5 rounded-2xl">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald block mb-2">Need Assistance?</span>
                  <p className="text-[10px] text-white/30 uppercase tracking-tighter">Instant Support: +91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
