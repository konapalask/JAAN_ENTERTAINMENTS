import { GlassNavbar } from "@/components/GlassNavbar";
import { HeroSection } from "@/components/HeroSection";
import { Section } from "@/components/Section";
import { LocationCard } from "@/components/LocationCard";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/Button";
import Image from "next/image";

import { LOCATIONS } from "@/constants/locations";

export default function Home() {
  return (
    <main className="relative">
      <GlassNavbar />
      <HeroSection />

      {/* Locations Preview */}
      <Section 
        id="locations" 
        title="Our Premier Hubs" 
        subtitle="Experience Excellence"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <LocationCard 
              key={loc.slug} 
              {...loc} 
              href={`/locations/${loc.slug}`}
            />
          ))}
        </div>
      </Section>

      {/* Featured Experience */}
      <Section className="bg-white/[0.02]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative group">
            <div className="absolute -inset-4 rounded-3xl bg-accent-green/20 blur-2xl transition-all duration-500 group-hover:bg-accent-green/30" />
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 glass">
              <Image 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000" 
                alt="Experience" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold">Global Excellence</span>
            <h2 className="font-outfit text-5xl font-bold leading-tight tracking-tighter">Immersive Gaming <br /> <span className="text-accent-gold text-glow-gold">Elevated.</span></h2>
            <p className="text-lg text-white/30 font-light leading-relaxed">
              We bring the future of play to Vijayawada and Eluru. From elite VR stations 
              to physical thrill zones, every corner at Jaan Entertainments is designed 
              to redefine your leisure.
            </p>
            <div className="flex flex-wrap gap-4">
              <GlassCard className="flex flex-col gap-1 px-8 py-5 border-white/5 hover:border-accent-gold/20">
                <span className="text-3xl font-bold text-accent-gold tracking-tighter">4K+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-20 font-bold">Elite Visitors</span>
              </GlassCard>
              <GlassCard className="flex flex-col gap-1 px-8 py-5 border-white/5 hover:border-accent-emerald/20">
                <span className="text-3xl font-bold text-accent-emerald tracking-tighter">99%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-20 font-bold">Safety Score</span>
              </GlassCard>
            </div>
            <p className="text-sm text-white/20 font-light leading-relaxed max-w-md">
              Our engineering team ensures zero-latency VR experiences and 
              structurally advanced physical arenas that meet international 
              safety certifications (ISO 9001:2015).
            </p>
            <Button variant="gold" showIcon className="w-fit mt-2">Discover Our Standards</Button>
          </div>
        </div>
      </Section>

      {/* Pillars of Excellence */}
      <Section title="The Zenith Charter" subtitle="Pillars of Jaan Excellence" centered>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <GlassCard className="p-10 border-white/5 hover:border-accent-gold/20 flex flex-col items-center text-center group">
            <div className="h-16 w-16 rounded-3xl bg-accent-gold/5 flex items-center justify-center text-accent-gold mb-8 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-serif">I</span>
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-accent-gold">Visionary Architecture</h3>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              Every Jaan facility is a landmark of modern design, blending 
              futuristic glasswork with immersive environmental lighting.
            </p>
          </GlassCard>
          <GlassCard className="p-10 border-white/5 hover:border-accent-emerald/20 flex flex-col items-center text-center group">
            <div className="h-16 w-16 rounded-3xl bg-accent-emerald/5 flex items-center justify-center text-accent-emerald mb-8 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-serif">II</span>
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-accent-emerald">Futuristic Fun</h3>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              We benchmark ours systems against global leaders, bringing 
              Kat Walk VR and multi-sensory physical thrill to AP.
            </p>
          </GlassCard>
          <GlassCard className="p-10 border-white/5 hover:border-accent-gold/20 flex flex-col items-center text-center group">
            <div className="h-16 w-16 rounded-3xl bg-accent-gold/5 flex items-center justify-center text-accent-gold mb-8 group-hover:scale-110 transition-transform">
              <span className="text-3xl font-serif">III</span>
            </div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 text-accent-gold">Elite Hospitality</h3>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              Our concierge-level service ensures that every visitor feels like 
              a premium member from the moment they step into our hubs.
            </p>
          </GlassCard>
        </div>
      </Section>

      {/* Testimonials or Reviews */}
      <Section title="Elite Experiences" subtitle="Multi-Dimensional Standards">
         <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <GlassCard className="flex flex-col gap-8 border-white/5">
              <div className="flex text-accent-gold text-glow-gold">{"★".repeat(5)}</div>
              <p className="italic text-white/40 leading-relaxed font-light text-sm">"The best entertainment center in Vijayawada! E3 is a complete game-changer for the city's nightlife and weekend fun."</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60">Rahul Verma</div>
                  <div className="text-[10px] opacity-20 uppercase font-bold tracking-tighter">Premium Member</div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="flex flex-col gap-8 border-white/5">
              <div className="flex text-accent-gold text-glow-gold">{"★".repeat(5)}</div>
              <p className="italic text-white/40 leading-relaxed font-light text-sm">"Eluru was missing something like E4. The hospitality and the activities are absolutely world-class."</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-white/5 border border-white/10" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60">Priya K.</div>
                  <div className="text-[10px] opacity-20 uppercase font-bold tracking-tighter">Gold Tier Member</div>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="flex flex-col gap-8 border-accent-gold/20 bg-accent-gold/[0.01]">
              <div className="flex text-accent-gold text-glow-gold">{"★".repeat(5)}</div>
              <p className="italic text-white/60 leading-relaxed font-light text-sm">"Jaan Entertainments has set a new benchmark for family entertainment. Highly recommended for kids and adults alike."</p>
              <div className="mt-auto flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-accent-gold/10 border border-accent-gold/30 shadow-[0_0_20px_rgba(197,160,89,0.3)]" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-accent-gold">Amit Reddy</div>
                  <div className="text-[10px] opacity-20 uppercase font-bold tracking-tighter">Ambassador Visit</div>
                </div>
              </div>
            </GlassCard>
         </div>
      </Section>

      <Footer />
    </main>
  );
}
