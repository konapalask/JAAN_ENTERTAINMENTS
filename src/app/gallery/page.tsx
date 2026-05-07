"use client";

import { GlassNavbar } from "@/components/GlassNavbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { GlassCard } from "@/components/GlassCard";
import Image from "next/image";
import { useState } from "react";

const GALLERY_SECTIONS = [
  {
    category: "ETHREE · Eat Enjoy Entertain",
    color: "accent-gold",
    images: [
      { src: "/gallery/ethree/ethree_8.webp", label: "ETHREE Entrance", desc: "The iconic ETHREE gateway at Padmavathi Ghat, Vijayawada" },
      { src: "/gallery/ethree/ethree_9.webp", label: "Food Court", desc: "A vibrant array of food outlets at ETHREE's open-air plaza" },
      { src: "/gallery/ethree/ethree_10.webp", label: "Evening Ambiance", desc: "ETHREE buzzing with visitors on a beautiful evening" },
      { src: "/gallery/ethree/ethree_6.webp", label: "Press · Andhra Bhoomi", desc: "Featured in Andhra Bhoomi — agreement with Vijayawada Municipal Corporation" },
      { src: "/gallery/ethree/ethree_7.webp", label: "Press · Hans India", desc: "Fun Zone at Padmavathi Ghat — featured in The Hans India" },
      { src: "/gallery/ethree/ethree_2.webp", label: "About the Company", desc: "Jaan Entertainment's vision for family entertainment centers in AP" },
    ],
  },
  {
    category: "Rajiv Gandhi Park · Vijayawada",
    color: "accent-emerald",
    images: [
      { src: "/gallery/rg_park/rg_park_6.webp", label: "Grand Launch", desc: "Mini Train inauguration ceremony at Rajiv Gandhi Park" },
      { src: "/gallery/rg_park/rg_park_7.webp", label: "Merry-Go-Round", desc: "The colorful spinning ride — a crowd favorite for all ages" },
      { src: "/gallery/rg_park/rg_park_8.webp", label: "Tora Tora Ride", desc: "Thrills at the Tora Tora ride, beautifully lit at dusk" },
      { src: "/gallery/rg_park/rg_park_9.webp", label: "Space Roller", desc: "Space-themed roller coaster with stunning artwork" },
      { src: "/gallery/rg_park/rg_park_10.webp", label: "Toy Train", desc: "The beloved toy train track ready to delight young visitors" },
    ],
  },
  {
    category: "EFOUR · Eat Enjoy Entertain @ Eluru",
    color: "accent-gold",
    images: [
      { src: "/gallery/efour/IMG_8400.JPG", label: "Eat @ E4", desc: "Fine dining and culinary excellence at our Eluru hub" },
      { src: "/gallery/efour/IMG_8470.JPG", label: "Entertain @ E4", desc: "Vibrant gaming and immersive entertainment zones" },
      { src: "/gallery/efour/IMG_8386.JPG", label: "E4 Ambiance", desc: "Experience the premium atmosphere of Eluru's finest hub" },
      { src: "/gallery/efour/IMG_8375.JPG", label: "Gaming Zone", desc: "Cutting-edge consoles and ergonomic gaming setups" },
      { src: "/gallery/efour/IMG_8396.JPG", label: "Lounge View", desc: "Relax and unwind in our sophisticated interior spaces" },
      { src: "/gallery/efour/IMG_8422.JPG", label: "Elite Hospitality", desc: "World-class service meets futuristic entertainment" },
    ],
  },
  {
    category: "ETHREE · Pre Launch",
    color: "accent-gold",
    images: [
      { src: "/gallery/ETHREE - Pre Launch/DSC_1301.JPG", label: "Site Inspection", desc: "Foundational work at the Padmavathi Ghat site" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1309.JPG", label: "Structural Framework", desc: "Developing the iconic ETHREE architectural frame" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1326.JPG", label: "Evening Setup", desc: "Site work continuing into the late hours" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1328.JPG", label: "Arena Base", desc: "Base construction for the main entertainment arena" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1360.JPG", label: "Design Planning", desc: "Coordinating the layout of the open-air plaza" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1368.JPG", label: "Core Build", desc: "Setting the central pillars of the facility" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1375.JPG", label: "Riverfront Work", desc: "Managing construction near the beautiful Krishna River" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1413.JPG", label: "Interior Prep", desc: "Initial interior layout and partition work" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1427.JPG", label: "Elite Engineering", desc: "Precision work on the futuristic structures" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1446.JPG", label: "Plaza Foundation", desc: "Laying the groundwork for the visitor experience" },
      { src: "/gallery/ETHREE - Pre Launch/DSC_1501.JPG", label: "Vision Taking Shape", desc: "The grand design finally becoming visible" },
    ],
  },
  {
    category: "EFOUR · Pre Launch",
    color: "accent-gold",
    images: [
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8067.JPG", label: "Eluru Site Prep", desc: "Preparing the grounds for the city's largest hub" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8087.JPG", label: "Foundational Steps", desc: "Laying the very first stones of EFOUR Eluru" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8091.JPG", label: "Infrastructure Build", desc: "Core infrastructure development for the sports arena" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8112.JPG", label: "Heavy Lifting", desc: "Major structural components being installed" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8166.JPG", label: "Construction Hub", desc: "Activity at the heart of the EFOUR project site" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8197.JPG", label: "Frame Assembly", desc: "Assembling the high-ceiling gaming zone frames" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8214.JPG", label: "Architectural Detail", desc: "Focusing on the unique design elements of EFOUR" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8230.JPG", label: "Progress Check", desc: "Mid-phase construction of the family fun zone" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8285.JPG", label: "Exterior Shell", desc: "The outer structure of EFOUR taking its final form" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8293.JPG", label: "Interior Framing", desc: "Creating the distinct rooms and corridors of the hub" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8328.JPG", label: "Safety Systems", desc: "Installing advanced fire and safety infrastructure" },
      { src: "/gallery/EFOUR - PRE LAUNCH/IMG_8346.JPG", label: "Final Touches", desc: "Interior prep work before the grand opening" },
    ],
  },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ src: string; label: string; desc: string } | null>(null);

  return (
    <main className="relative min-h-screen">
      <GlassNavbar />

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image src={lightbox.src} alt={lightbox.label} fill className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold">{lightbox.label}</p>
              <p className="mt-1 text-xs text-white/40 font-light">{lightbox.desc}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 h-10 w-10 rounded-full glass border border-white/10 text-white/60 hover:text-white transition-colors text-lg flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="pt-32 pb-20">
        <Section title="The Zenith Gallery" subtitle="Visualizing Excellence" centered>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs font-light text-white/30 leading-relaxed uppercase tracking-[0.1em]">
            From the vibrant food courts of ETHREE at Padmavathi Ghat <br />
            to the thrilling rides of Rajiv Gandhi Park — our world in pictures.
          </p>
        </Section>

        {GALLERY_SECTIONS.map((section) => (
          <div key={section.category} className="mt-20 px-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-6 mb-10">
              <div className={`h-px flex-1 bg-${section.color}/20`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.4em] text-${section.color}`}>
                {section.category}
              </span>
              <div className={`h-px flex-1 bg-${section.color}/20`} />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.images.map((img) => (
                <GlassCard
                  key={img.src}
                  className="group p-0 overflow-hidden relative cursor-pointer"
                  onClick={() => setLightbox(img)}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                      <span className={`text-[9px] font-bold uppercase tracking-[0.3em] text-${section.color}`}>{img.label}</span>
                      <p className="mt-1 text-[11px] text-white/70 font-light leading-snug">{img.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
