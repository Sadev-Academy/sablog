import React from "react";
import { Headline, Body, Label } from "@/components/ui/Typography";

export const NewsLetter = () => {
  return (
    <section className="bg-primary/5 py-24 px-6 md:px-12 rounded-[2rem] mx-6 md:mx-12 my-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Label className="text-primary mb-6 block">Stay Curated</Label>
        <Headline className="text-3xl md:text-5xl mb-8">
          Curated insights, delivered weekly.
        </Headline>
        <Body className="max-w-2xl mx-auto mb-12 text-on-surface/60">
          Join 24,000+ engineers, designers, and thinkers who receive our Sunday morning briefing on the digital era.
        </Body>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-surface-pure border border-on-surface/10 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
            required
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-sans font-bold transition-all shadow-lg shadow-primary/20"
          >
            Join List
          </button>
        </form>
      </div>
    </section>
  );
};
