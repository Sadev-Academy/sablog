import React from "react";
import Image from "next/image";
import { Body, Label, Title } from "@/components/ui/Typography";
import { Article } from "@/lib/data";

interface CategorySidebarProps {
  categoryTitle: string;
  trendingArticles: Article[];
  topContributors: Article["author"][];
}

export const CategorySidebar = ({ 
  categoryTitle, 
  trendingArticles, 
  topContributors 
}: CategorySidebarProps) => {
  return (
    <aside className="space-y-16">
      {/* Trending Section */}
      <div>
        <Label className="block mb-8 border-b border-on-surface/5 pb-4">
          Trending in {categoryTitle}
        </Label>
        <div className="space-y-10">
          {trendingArticles.map((article, idx) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="flex gap-6">
                <span className="text-4xl font-sans font-bold text-on-surface/10 group-hover:text-primary transition-colors">
                  0{idx + 1}
                </span>
                <div>
                  <Title className="text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </Title>
                  <Label className="text-[0.6rem] text-on-surface/40">
                    {article.readTime}
                  </Label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Contributors */}
      <div>
        <Label className="block mb-8 border-b border-on-surface/5 pb-4">
          Top Contributors
        </Label>
        <div className="space-y-6">
          {topContributors.map((author, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <Body className="text-sm font-bold m-0 group-hover:text-primary transition-colors">
                    {author.name}
                  </Body>
                  <Label className="text-[0.6rem] text-on-surface/40 uppercase">
                    {author.role}
                  </Label>
                </div>
              </div>
              <svg className="w-5 h-5 text-on-surface/20 group-hover:text-primary group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Newsletter Box */}
      <div className="bg-primary p-8 rounded-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
        <svg className="w-8 h-8 text-white/40 mb-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        <Title className="text-white text-lg mb-4 relative z-10">
          Curated Intelligence
        </Title>
        <Body className="text-white/60 text-xs mb-6 relative z-10 leading-relaxed">
          Weekly synthesis of the most critical breakthroughs in {categoryTitle}, delivered to your inbox.
        </Body>
        <div className="relative z-10 flex border-b border-white/20 pb-2">
          <input 
            type="email" 
            placeholder="email@domain.com"
            className="bg-transparent border-none text-white text-xs flex-1 focus:ring-0 placeholder:text-white/30 font-sans"
          />
          <button className="text-white hover:translate-x-1 transition-transform">
            →
          </button>
        </div>
      </div>
    </aside>
  );
};
