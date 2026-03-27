import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800",
  "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800",
  "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=800",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800",
  "https://images.unsplash.com/photo-1574375927938-d5a98e898ad7?q=80&w=800",
  "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=800",
];

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen">
      <GlassNavbar />
      
      <div className="pt-32 pb-10">
        <Section title="The Zenith Gallery" subtitle="Visualizing Excellence" centered>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-light text-white/30 leading-relaxed uppercase tracking-[0.1em]">
            From the high-fidelity virtual realms of **E3** to the lush <br />
            architectural greens of **RG Park**, explore our portfolio <br />
            of premium entertainment destinations.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((img, index) => (
              <GlassCard key={index} className="group p-0 overflow-hidden relative aspect-square">
                <Image 
                  src={img} 
                  alt={`Gallery ${index}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-emerald/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-md flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold glass px-8 py-4 rounded-full border border-accent-gold/30 border-glow-gold">Elite View</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
