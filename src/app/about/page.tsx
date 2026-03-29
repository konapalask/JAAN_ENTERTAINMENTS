import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <GlassNavbar />

      {/* Hero — About the Company */}
      <div className="pt-32">
        <Section title="Our Story" subtitle="About Jaan Entertainment" centered>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mt-12">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden glass border-white/5 shadow-[0_0_50px_rgba(197,160,89,0.1)]">
              <Image
                src="/gallery/ethree/ethree_8.webp"
                alt="ETHREE — Eat Enjoy Entertain, Padmavathi Ghat"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-outfit text-4xl font-bold tracking-tight leading-tight">
                Pioneering <span className="text-accent-gold text-glow-gold">Elite Leisure</span> in AP
              </h2>
              <p className="text-lg text-white/30 font-light leading-relaxed">
                Founded with a vision to redefine the meaning of premium, Jaan Entertainment
                brings architectural excellence and futuristic fun to your doorstep.
              </p>
              <p className="text-white/20 font-light italic text-sm tracking-wide">
                From the vibrant food courts of ETHREE at Padmavathi Ghat to the thrilling rides
                of Rajiv Gandhi Park, our mission is to craft spaces for the most discerning memories.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* What We've Built */}
      <Section title="Our Projects" subtitle="Real Spaces. Real Joy.">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* ETHREE */}
          <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-accent-gold/30 group">
            <div className="relative aspect-video">
              <Image
                src="/gallery/ethree/ethree_9.webp"
                alt="ETHREE Food Court"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-accent-gold">Project #1</span>
                <h3 className="font-outfit text-2xl font-bold text-white">ETHREE</h3>
                <p className="text-xs text-white/50 font-light">Eat · Enjoy · Entertain</p>
                <p className="text-[11px] text-white/40 font-light leading-relaxed pt-1">
                  Padmavathi Ghat, Krishnalanka, Vijayawada · Allotted by VMC · 12-year tenure (BOT)
                </p>
              </div>
            </div>
          </GlassCard>

          {/* RG Park */}
          <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-accent-emerald/30 group">
            <div className="relative aspect-video">
              <Image
                src="/gallery/rg_park/rg_park_6.webp"
                alt="Rajiv Gandhi Park Launch"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 space-y-2">
                <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-accent-emerald">Project #2</span>
                <h3 className="font-outfit text-2xl font-bold text-white">Rajiv Gandhi Park</h3>
                <p className="text-xs text-white/50 font-light">Amusement & F&B</p>
                <p className="text-[11px] text-white/40 font-light leading-relaxed pt-1">
                  Krishnalanka, Vijayawada · Allotted by VMC · 10-year PPP tenure
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Mission and Vision */}
      <Section title="The Zenith Charter" className="bg-white/[0.01]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-accent-gold/20">
            <div className="relative aspect-video">
              <Image
                src="/gallery/ethree/ethree_3.webp"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold">The Mission</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">
                To establish a profitable and well-managed company while creating an atmosphere
                of fun and excitement for the entire family — designed for locals and tourists
                of Andhra Pradesh alike.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-accent-emerald/20">
            <div className="relative aspect-video">
              <Image
                src="/gallery/ethree/ethree_2.webp"
                alt="About the Company"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-emerald">The Vision</h3>
              <p className="text-sm font-light text-white/40 leading-relaxed">
                To be the most recognized and trusted name in the premium entertainment
                industry across Southern India — through Family Entertainment Centers (FEC)
                that set the global benchmark.
              </p>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Quality Charter */}
      <Section title="Standard of Care" subtitle="Our Quality Framework">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            { title: "Safety", desc: "Rigorous daily inspections and international safety certifications for all hardware.", color: "accent-gold" },
            { title: "Service", desc: "Elite hospitality training for all staff to ensure a seamless visitor journey.", color: "accent-emerald" },
            { title: "Tech", desc: "State-of-the-art systems with ultra-low latency and premium build quality.", color: "accent-gold" },
            { title: "Design", desc: "Architectural excellence that blends local culture with futuristic aesthetics.", color: "accent-emerald" }
          ].map((item, i) => (
            <GlassCard key={i} className="p-8 border-white/5 hover:border-white/10">
              <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-4 text-${item.color} opacity-70`}>{item.title}</h4>
              <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
