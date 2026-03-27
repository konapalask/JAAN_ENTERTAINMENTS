import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <GlassNavbar />
      
      <div className="pt-32">
        <Section title="Our Story" subtitle="About Jaan Entertainments" centered>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mt-12">
            <div className={`relative aspect-video rounded-[2.5rem] overflow-hidden glass border-white/5 shadow-[0_0_50px_rgba(197,160,89,0.1)]`}>
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000" 
                alt="Our Team" 
                fill 
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-outfit text-4xl font-bold tracking-tight leading-tight">Pioneering <span className="text-accent-gold text-glow-gold">Elite Leisure</span> in AP</h2>
              <p className="text-lg text-white/30 font-light leading-relaxed">
                Founded with a vision to redefine the meaning of premium, Jaan Entertainments 
                brings architectural excellence and futuristic fun to your doorstep.
              </p>
              <p className="text-white/20 font-light italic text-sm tracking-wide">
                From the virtual battlegrounds of E3 to the vast greens of RG Park, 
                our mission is to craft spaces for the most discerning memories.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <Section title="The Zenith Charter" className="bg-white/[0.01]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <GlassCard className="p-12 border-white/5 hover:border-accent-gold/20">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold mb-6">The Mission</h3>
            <p className="text-xl font-light text-white/40 leading-relaxed tracking-tight">
              To deliver innovative and high-quality entertainment solutions that 
              exceed global standards and foster community joy.
            </p>
          </GlassCard>
          <GlassCard className="p-12 border-white/5 hover:border-accent-emerald/20">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-emerald mb-6">The Vision</h3>
            <p className="text-xl font-light text-white/40 leading-relaxed tracking-tight">
              To be the most recognized and trusted name in the premium entertainment 
              industry across Southern India.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section title="Standard of Care" subtitle="Our Quality Framework">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {[
            { title: "Safety", desc: "Rigorous daily inspections and international safety certifications for all hardware.", color: "accent-gold" },
            { title: "Service", desc: "Elite hospitality training for all staff to ensure a seamless visitor journey.", color: "accent-emerald" },
            { title: "Tech", desc: "State-of-the-art VR systems with 0% motion sickness and ultra-low latency.", color: "accent-gold" },
            { title: "Design", desc: "Architectural excellence that blends local culture with futuristic aesthetics.", color: "accent-emerald" }
          ].map((item, i) => (
            <GlassCard key={i} className="p-8 border-white/5 hover:border-white/10">
              <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-4 opacity-40`}>{item.title}</h4>
              <p className="text-xs text-white/30 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
