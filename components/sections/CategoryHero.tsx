import React from "react";
import Image from "next/image";
import { Headline, Body, Label } from "@/components/ui/Typography";
import { Category } from "@/lib/data";

interface CategoryHeroProps {
  category: Category;
}

export const CategoryHero = ({ category }: CategoryHeroProps) => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-on-surface/5">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 mb-8">
            <Label className="text-primary/60">Knowledge Base</Label>
            <span className="text-on-surface/20">/</span>
            <Label className="text-on-surface/40">Category</Label>
          </div>
          <Headline className="text-5xl md:text-7xl mb-8 tracking-tight">
            {category.title}
          </Headline>
          <Body className="text-xl md:text-2xl max-w-2xl text-on-surface/60 font-medium leading-relaxed italic">
            {category.description}
          </Body>
        </div>
        
        <div className="lg:w-1/3 w-full">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
