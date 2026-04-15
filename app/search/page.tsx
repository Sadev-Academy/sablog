"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Headline, Body, Label, Title } from "@/components/ui/Typography";
import { ARTICLES } from "@/lib/data";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredArticles = ARTICLES.filter((article) => {
    const searchStr = `${article.title} ${article.excerpt} ${article.category}`.toLowerCase();
    return searchStr.includes(query.toLowerCase());
  });

  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24">
        <Label className="text-primary mb-6 block uppercase tracking-widest">
          Search Results
        </Label>
        <Headline className="text-5xl md:text-7xl mb-8 tracking-tight">
          &ldquo;{query}&rdquo;
        </Headline>
        <Body className="text-xl text-on-surface/40">
          Showing {filteredArticles.length} results matching your inquiry.
        </Body>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredArticles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-surface-low">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <Label className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[0.6rem]">
                  {article.category}
                </Label>
              </div>
            </div>
            <Title className="text-xl mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
              {article.title}
            </Title>
            <Body className="text-sm text-on-surface/60 line-clamp-2 mb-6">
              {article.excerpt}
            </Body>
            <div className="flex items-center gap-3 mt-auto">
              <div className="relative w-6 h-6 rounded-full overflow-hidden grayscale">
                <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
              </div>
              <Label className="text-[0.6rem] text-on-surface/40 uppercase">
                {article.author.name} • {article.readTime}
              </Label>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="py-24 text-center bg-surface-low rounded-[2rem]">
          <Headline className="text-on-surface/20">No Results Found</Headline>
          <Body className="text-on-surface/40 mt-4 max-w-md mx-auto">
            We couldn&apos;t find any matches for your search. Try checking for typos or searching with broader keywords.
          </Body>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-surface selection:bg-primary/20">
      <Navbar />
      <Suspense fallback={<div className="pt-40 px-6 max-w-7xl mx-auto"><Headline className="animate-pulse opacity-20">Searching...</Headline></div>}>
        <SearchContent />
      </Suspense>
      <Footer />
    </main>
  );
}
