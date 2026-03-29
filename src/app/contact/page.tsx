"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import {
  Mail, MapPin, Phone, ChevronRight, CheckCircle2, User, Briefcase, MessageSquare
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ENQUIRY_EMAIL = "jay@jaanentertainment.in";

const DIRECTORS = [
  {
    name: "Jayanarayana Kureti",
    role: "Chief Executive Officer",
    short: "CEO & Founder",
    bio: "Visionary entrepreneur behind Jaan Entertainment Pvt Ltd, Jayanarayana Kureti led the company's landmark MoU with Vijayawada Municipal Corporation, establishing ETHREE at Padmavathi Ghat and Rajiv Gandhi Park as premier family entertainment destinations in Andhra Pradesh.",
    image: "/gallery/ethree/ethree_7.webp",
    imageStyle: "object-[40%_20%]",
  },
];

const STEPS = [
  {
    id: "purpose",
    label: "What is the reason for your enquiry?",
    helpText: "Help us route your message to the right team.",
    type: "radio",
    options: [
      "General Information",
      "Event / Private Booking",
      "Partnership or Sponsorship",
      "Franchise / Business Inquiry",
      "Press / Media",
      "Other",
    ],
  },
  {
    id: "location_interest",
    label: "Which location is this about?",
    helpText: "Choose all that apply or select 'All'.",
    type: "radio",
    options: [
      "ETHREE — Vijayawada",
      "E4 — Eluru",
      "Rajiv Gandhi Park",
      "All Locations / General",
    ],
  },
  {
    id: "name",
    label: "Your full name",
    type: "text",
    placeholder: "e.g. Priya Reddy",
  },
  {
    id: "contact",
    label: "Best way to reach you",
    helpText: "Phone number or email — whatever you prefer.",
    type: "text",
    placeholder: "+91 98765 43210 or you@email.com",
  },
  {
    id: "message",
    label: "Tell us more",
    helpText: "The more detail you share, the better we can help.",
    type: "textarea",
    placeholder: "Describe your enquiry, event idea, or question in detail...",
  },
];

export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const canNext = !!answers[current.id]?.trim();

  const handleAnswer = (val: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: val }));
  };

  const handleNext = () => {
    if (isLast) handleSubmit();
    else setStep((s) => s + 1);
  };

  const handleSubmit = () => {
    const body = STEPS.map((s) => `${s.label}\n→ ${answers[s.id] || "—"}`).join("\n\n");
    const subject = `Enquiry — ${answers["purpose"] || "General"} — ${answers["location_interest"] || ""}`;
    window.location.href = `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main className="relative min-h-screen">
      <GlassNavbar />

      {/* ── Page Header ── */}
      <div className="pt-36 pb-12 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-emerald">Contact Us</span>
            <h1 className="font-outfit text-5xl md:text-6xl font-bold mt-4 tracking-tighter">Get in Touch</h1>
            <p className="mt-6 max-w-xl mx-auto text-white/40 font-light leading-relaxed">
              Have questions, want to plan an event, or explore a partnership?
              Fill out the form below and we'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Contact Info Cards + Enquiry Form ── */}
      <div className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            {/* ── LEFT SIDEBAR: Info ── */}
            <div className="space-y-6">

              {/* Contact Cards */}
              <GlassCard className="flex items-start gap-5 border-white/5 p-8">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent-gold mb-2">Direct Line</p>
                  <p className="text-sm font-light text-white/50 leading-relaxed">+91 98765 43210<br />+91 91234 56789</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-start gap-5 border-white/5 p-8">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-accent-emerald/10 flex items-center justify-center text-accent-emerald">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent-emerald mb-2">Email Us</p>
                  <p className="text-sm font-light text-white/50 break-all">{ENQUIRY_EMAIL}</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-start gap-5 border-white/5 p-8">
                <div className="h-12 w-12 shrink-0 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-accent-gold mb-2">Our Hubs</p>
                  <p className="text-sm font-light text-white/50 leading-relaxed">
                    Padmavathi Ghat, Vijayawada<br />
                    Rajiv Gandhi Park, Vijayawada<br />
                    E4 Eluru, Andhra Pradesh
                  </p>
                </div>
              </GlassCard>

              {/* Response Times */}
              <GlassCard className="border-white/5 p-8 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/30 mb-4">Response Times</p>
                {[
                  { label: "Direct Enquiries", time: "< 2 Hours", color: "text-accent-gold" },
                  { label: "Event Bookings", time: "< 4 Hours", color: "text-accent-emerald" },
                  { label: "Partnerships", time: "24 Hours", color: "text-accent-gold" },
                  { label: "Press / Media", time: "Same Day", color: "text-accent-emerald" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-xs text-white/30 font-light">{item.label}</span>
                    <span className={`text-[10px] font-bold ${item.color}`}>{item.time}</span>
                  </div>
                ))}
              </GlassCard>
            </div>

            {/* ── RIGHT: Enquiry Wizard (2/3 width) ── */}
            <div className="lg:col-span-2">
              <GlassCard className="p-10 md:p-14 border-white/5 h-full">
                {sent ? (
                  <div className="flex flex-col items-center gap-6 py-16 text-center">
                    <CheckCircle2 size={60} className="text-accent-emerald" />
                    <h3 className="font-outfit text-3xl font-bold">Enquiry Sent!</h3>
                    <p className="text-white/40 font-light max-w-sm leading-relaxed">
                      Your mail app has opened with all details pre-filled to{" "}
                      <span className="text-accent-gold">{ENQUIRY_EMAIL}</span>. We'll get back to you shortly.
                    </p>
                    <Button
                      variant="glass"
                      className="mt-2"
                      onClick={() => { setStep(0); setAnswers({}); setSent(false); }}
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Progress */}
                    <div className="flex items-center gap-2 mb-10">
                      {STEPS.map((_, i) => (
                        <div
                          key={i}
                          onClick={() => i < step && setStep(i)}
                          className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                            i < step
                              ? "bg-accent-emerald cursor-pointer"
                              : i === step
                              ? "bg-accent-gold shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>

                    <div className="mb-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 mb-2">
                        Step {step + 1} of {STEPS.length}
                      </p>
                      <h3 className="font-outfit text-2xl font-bold leading-tight">{current.label}</h3>
                      {"helpText" in current && current.helpText && (
                        <p className="text-sm text-white/30 font-light mt-2">{current.helpText}</p>
                      )}
                    </div>

                    {/* Radio */}
                    {current.type === "radio" && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {current.options!.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleAnswer(opt)}
                            className={`text-left px-5 py-4 rounded-2xl border text-sm font-light transition-all duration-300 ${
                              answers[current.id] === opt
                                ? "border-accent-gold bg-accent-gold/10 text-white shadow-[0_0_20px_rgba(197,160,89,0.1)]"
                                : "border-white/10 glass text-white/50 hover:border-white/25 hover:text-white/80"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Text */}
                    {current.type === "text" && (
                      <input
                        type="text"
                        value={answers[current.id] || ""}
                        onChange={(e) => handleAnswer(e.target.value)}
                        placeholder={"placeholder" in current ? current.placeholder : ""}
                        className="w-full glass rounded-2xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold text-sm"
                      />
                    )}

                    {/* Textarea */}
                    {current.type === "textarea" && (
                      <textarea
                        rows={5}
                        value={answers[current.id] || ""}
                        onChange={(e) => handleAnswer(e.target.value)}
                        placeholder={"placeholder" in current ? current.placeholder : ""}
                        className="w-full glass rounded-2xl px-6 py-5 focus:outline-none focus:ring-1 focus:ring-accent-gold text-sm resize-none"
                      />
                    )}

                    <div className="flex items-center justify-between mt-10">
                      {step > 0 ? (
                        <button
                          onClick={() => setStep((s) => s - 1)}
                          className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white/60 transition-colors"
                        >
                          ← Back
                        </button>
                      ) : <span />}

                      <Button
                        variant="gold"
                        className={`px-10 py-4 font-bold flex items-center gap-2 transition-opacity ${!canNext ? "opacity-40 pointer-events-none" : ""}`}
                        onClick={handleNext}
                      >
                        {isLast ? "Send Enquiry" : "Continue"}
                        {!isLast && <ChevronRight size={16} />}
                      </Button>
                    </div>
                  </>
                )}
              </GlassCard>
            </div>

          </div>
        </div>
      </div>

      {/* ── Directors Section ── */}
      <div className="py-20 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent-emerald">Leadership</span>
            <h2 className="font-outfit text-4xl font-bold mt-4 tracking-tighter">Meet the Directors</h2>
            <p className="mt-4 text-white/30 font-light max-w-lg mx-auto text-sm">
              The visionaries behind Jaan Entertainment's journey from a bold idea to AP's most celebrated family entertainment brand.
            </p>
          </div>

          <div className="flex justify-center">
            {DIRECTORS.map((director, i) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="max-w-2xl w-full"
              >
                <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-accent-gold/20 group">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Photo */}
                    <div className="relative h-72 md:h-auto overflow-hidden">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        className={`object-cover ${director.imageStyle} transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 md:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
                    </div>

                    {/* Info */}
                    <div className="p-10 flex flex-col justify-center gap-5">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-accent-gold">{director.short}</span>
                        <h3 className="font-outfit text-2xl font-bold mt-2 tracking-tight">{director.name}</h3>
                        <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{director.role}</p>
                      </div>
                      <p className="text-sm text-white/40 font-light leading-relaxed">{director.bio}</p>
                      <div className="flex items-center gap-3 pt-2">
                        <div className="h-px flex-1 bg-accent-gold/20" />
                        <Briefcase size={12} className="text-accent-gold/40" />
                      </div>
                      <a
                        href={`mailto:${ENQUIRY_EMAIL}`}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent-emerald hover:text-accent-emerald/80 transition-colors"
                      >
                        <Mail size={12} /> {ENQUIRY_EMAIL}
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
