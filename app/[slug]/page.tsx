import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CategoryHero } from "@/components/sections/CategoryHero";
import { CategorySidebar } from "@/components/sections/CategorySidebar";
import { Headline, Body, Label, Title } from "@/components/ui/Typography";
import { CATEGORIES, ARTICLES } from "@/lib/data";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = CATEGORIES[slug];

  if (!category) {
    notFound();
  }

  const categoryArticles = ARTICLES.filter((a) => a.category === slug);
  const featuredArticle = categoryArticles.find((a) => a.featured) || categoryArticles[0];
  const otherArticles = categoryArticles.filter((a) => a.id !== featuredArticle?.id);
  const trendingArticles = categoryArticles.slice(0, 3);
  const topContributors = ARTICLES.slice(0, 3).map(a => a.author);

  return (
    <main className="min-h-screen bg-surface selection:bg-primary/20">
      <Navbar />
      
      <CategoryHero category={category} />

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Feed */}
          <div className="lg:w-2/3">
            {featuredArticle && (
              <div className="group cursor-pointer mb-24 overflow-hidden rounded-[2rem] bg-surface-low">
                <div className="relative aspect-[21/9] w-full overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <Label className="bg-primary text-white px-3 py-1 rounded-full">
                      Newest Release
                    </Label>
                  </div>
                </div>
                <div className="p-12">
                  <Headline className="text-3xl md:text-5xl mb-6 group-hover:text-primary transition-colors">
                    {featuredArticle.title}
                  </Headline>
                  <Body className="text-lg md:text-xl text-on-surface/60 mb-8 leading-relaxed">
                    {featuredArticle.excerpt}
                  </Body>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden grayscale">
                        <Image src={featuredArticle.author.avatar} alt={featuredArticle.author.name} fill className="object-cover" />
                      </div>
                      <Label className="text-on-surface/80">{featuredArticle.author.name}</Label>
                    </div>
                    <span className="text-on-surface/10">•</span>
                    <Label className="text-on-surface/40 uppercase">{featuredArticle.date} • {featuredArticle.readTime}</Label>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherArticles.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <Title className="text-xl mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </Title>
                  <div className="flex items-center gap-3">
                    <Label className="text-[0.6rem] text-on-surface/40 uppercase">
                      By {article.author.name}
                    </Label>
                    <span className="text-on-surface/10">•</span>
                    <Label className="text-[0.6rem] text-on-surface/40 uppercase">
                      {article.readTime}
                    </Label>
                  </div>
                </div>
              ))}
            </div>

            {categoryArticles.length > 5 && (
              <div className="mt-24 text-center">
                <button className="px-12 py-5 rounded-full bg-surface-low text-on-surface/60 font-sans font-bold hover:bg-surface-pure hover:text-primary transition-all shadow-sm border border-on-surface/5">
                  Load More Perspectives
                </button>
              </div>
            )}

            {categoryArticles.length === 0 && (
              <div className="py-24 text-center bg-surface-low rounded-[2rem]">
                <Headline className="text-on-surface/20">No Articles Yet</Headline>
                <Body className="text-on-surface/40 mt-4">We are currently curating the latest insights for this category.</Body>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <CategorySidebar 
              categoryTitle={category.title}
              trendingArticles={trendingArticles}
              topContributors={topContributors}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
