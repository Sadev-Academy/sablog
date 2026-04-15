import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Display = ({ children, className, as: Component = "h1" }: TypographyProps) => (
  <Component
    className={cn(
      "font-sans text-5xl md:text-[3.5rem] font-bold leading-tight tracking-[-0.02em]",
      className
    )}
  >
    {children}
  </Component>
);

export const Headline = ({ children, className, as: Component = "h2" }: TypographyProps) => (
  <Component
    className={cn(
      "font-sans text-2xl md:text-4xl font-semibold leading-tight",
      className
    )}
  >
    {children}
  </Component>
);

export const Title = ({ children, className, as: Component = "h3" }: TypographyProps) => (
  <Component
    className={cn(
      "font-serif text-xl md:text-[1.375rem] font-medium leading-snug",
      className
    )}
  >
    {children}
  </Component>
);

export const Body = ({ children, className, as: Component = "p" }: TypographyProps) => (
  <Component
    className={cn(
      "font-serif text-base md:text-lg leading-[1.6] text-on-surface/80",
      className
    )}
  >
    {children}
  </Component>
);

export const Label = ({ children, className, as: Component = "span" }: TypographyProps) => (
  <Component
    className={cn(
      "font-sans text-[0.75rem] font-bold uppercase tracking-[0.05em] text-on-surface/60",
      className
    )}
  >
    {children}
  </Component>
);
