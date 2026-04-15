"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Tech", href: "/tech" },
  { label: "AI", href: "/ai" },
  { label: "Programming", href: "/programming" },
  { label: "Design", href: "/design" },
  { label: "Freelancing", href: "/freelancing" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          isScrolled ? "glass shadow-ambient" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-12">
          <Link href="/" className="group">
            <span className="font-sans text-xl font-bold tracking-tight text-on-surface">
              The Curator
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-1 py-1"
              >
                <Label className="text-[0.7rem] text-on-surface/70 group-hover:text-primary transition-colors">
                  {link.label}
                </Label>
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center bg-on-surface/5 px-4 py-2 rounded-full border border-white/10"
          >
            <svg
              className="w-4 h-4 text-on-surface/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32 focus:w-48 transition-all duration-300 font-sans focus:outline-none"
            />
          </form>

          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2 rounded-full font-sans text-xs font-bold transition-all duration-300 shadow-lg shadow-primary/20">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
};
