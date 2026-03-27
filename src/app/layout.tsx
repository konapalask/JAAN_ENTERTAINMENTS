import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaan Entertainments | Home of Fun & Excellence",
  description: "Experience premium entertainment in Vijayawada and Eluru with Jaan Entertainments. E3, E4, and Rajiv Gandhi Park.",
};

import { PageTransition } from "@/components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white`}>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
