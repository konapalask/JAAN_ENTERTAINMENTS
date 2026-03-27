import Link from "next/link";
import Image from "next/image";
import React from "react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/50 py-16 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col gap-8 md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white font-outfit uppercase">
              JAAN<span className="text-accent-gold text-glow-gold">.</span>
            </Link>
            <p className="text-[10px] text-white/20 leading-relaxed uppercase tracking-[0.2em] font-bold">
              The Architecture of <br />
              Premium Leisure.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 glass rounded-full flex items-center justify-center hover:bg-accent-emerald/20 hover:text-accent-emerald transition-all duration-500">
                <InstagramIcon />
              </Link>
              <Link href="#" className="h-10 w-10 glass rounded-full flex items-center justify-center hover:bg-accent-emerald/20 hover:text-accent-emerald transition-all duration-500">
                <FacebookIcon />
              </Link>
              <Link href="#" className="h-10 w-10 glass rounded-full flex items-center justify-center hover:bg-accent-emerald/20 hover:text-accent-emerald transition-all duration-500">
                <TwitterIcon />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-accent-green">Home</Link></li>
              <li><Link href="/locations" className="hover:text-accent-green">Locations</Link></li>
              <li><Link href="/gallery" className="hover:text-accent-green">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-accent-green">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60">
              <li><Link href="#" className="hover:text-accent-green">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent-green">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent-green">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">Newsletter</h4>
            <p className="mb-6 text-sm text-white/60">Stay updated with the latest events and offers.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full glass rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-green"
              />
              <button className="bg-accent-green text-black px-4 py-2 rounded-full text-sm font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Jaan Entertainments. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
