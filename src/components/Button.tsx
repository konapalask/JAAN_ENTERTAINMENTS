"use client";

import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "glass" | "outline";
  showIcon?: boolean;
}

export const Button = ({
  children,
  className,
  variant = "primary",
  showIcon = false,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-accent-emerald text-black hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    gold: "bg-accent-gold text-black hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]",
    glass: "glass bg-white/[0.03] hover:bg-white/[0.08] text-white border-white/[0.1] hover:border-white/[0.2]",
    outline: "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black shadow-[inset_0_0_0_1px_rgba(197,160,89,0.2)]",
  };

  return (
    <button
      className={cn(
        "group relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold uppercase tracking-wider text-sm transition-all duration-500 active:scale-95 disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      {children}
      {showIcon && (
        <MoveRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
      )}
    </button>
  );
};
