import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({
  children,
  className,
  hoverEffect = true,
  onClick,
}: GlassCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "glass-card p-8 relative overflow-hidden group/card",
        hoverEffect && "hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,255,136,0.1)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

