import { GlassNavbar } from "@/components/GlassNavbar";
import { Section } from "@/components/Section";
import { LocationCard } from "@/components/LocationCard";
import { Footer } from "@/components/Footer";
import { LOCATIONS } from "@/constants/locations";

export default function LocationsPage() {
  return (
    <main className="relative min-h-screen">
      <GlassNavbar />
      
      <div className="pt-40 pb-16">
        <Section 
          title="The Elite Hubs" 
          subtitle="Vijayawada & Eluru Destinations"
          centered
        >
          <p className="mx-auto mt-6 max-w-2xl text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
            From futuristic indoor arenas to reimagining the horizon, <br />
            discover the zenith of Jaan Entertainment.
          </p>
        </Section>
      </div>

      <Section className="py-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <LocationCard 
              key={loc.slug} 
              name={loc.name}
              city={loc.city}
              image={loc.image}
              description={loc.description}
              href={`/locations/${loc.slug}`}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
