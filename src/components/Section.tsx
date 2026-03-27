"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  title,
  subtitle,
  centered = true,
}: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className="mx-auto max-w-7xl">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn("mb-16 flex flex-col gap-4", centered && "items-center text-center")}
          >
            {subtitle && (
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-emerald mb-2">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-outfit text-3xl font-bold md:text-5xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
