import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Display, Headline, Title, Body, Label } from "@/components/ui/Typography";
import { NewsLetter } from "@/components/sections/NewsLetter";
import { ARTICLES } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Home() {
  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const latestArticles = ARTICLES.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-surface selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative z-10">
            <Label className="bg-primary/10 text-primary px-3 py-1 rounded-full mb-8 inline-block">
              Featured Story
            </Label>
            <Display className="mb-8 max-w-2xl">
              The Future of <span className="text-primary italic">AI</span> in Modern Design Systems
            </Display>
            <Body className="mb-12 max-w-xl text-on-surface/70">
              {featuredArticle.excerpt}
            </Body>
            <div className="flex items-center gap-8">
              <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-sans font-bold transition-all shadow-lg shadow-primary/20">
                Read Full Inquiry
              </button>
              <div className="flex items-center gap-2 text-on-surface/40">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-14 0 9 9 0 0114 0z" />
                </svg>
                <Label className="text-[0.7rem]">{featuredArticle.readTime}</Label>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-featured.png"
                alt="Featured Story"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Key Stat Overlay */}
            <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-2xl shadow-xl max-w-[240px] hidden md:block border-t-2 border-primary/10">
              <Headline className="text-primary text-4xl mb-2">85%</Headline>
              <Body className="text-xs font-sans leading-relaxed text-on-surface/60">
                Efficiency increase in UI prototyping reported by early AI adopters this year.
              </Body>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Inquiry Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 px-4">
          <div>
            <Headline className="mb-4">Latest Inquiry</Headline>
            <Body className="text-sm text-on-surface/40">
              Exploring the intersection of human creativity and technical logic.
            </Body>
          </div>
          <div className="flex gap-4">
            <button className="p-3 rounded-full border border-on-surface/10 hover:bg-on-surface/5 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-3 rounded-full bg-on-surface text-white hover:bg-on-surface/90 transition-all">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {latestArticles.map((article, idx) => (
            <div
              key={article.id}
              className={cn(
                "group cursor-pointer rounded-[2rem] overflow-hidden transition-all duration-500",
                idx === 0 ? "lg:col-span-8 bg-surface-low" : idx === 1 ? "lg:col-span-4 bg-surface-pure shadow-ambient" : "lg:col-span-6 bg-surface-pure"
              )}
            >
              <div className={cn("flex flex-col h-full", idx === 0 ? "md:flex-row" : "")}>
                {article.image && (
                  <div className={cn("relative", idx === 0 ? "md:w-1/2 aspect-video md:aspect-auto" : "aspect-video")}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className={cn("p-10 flex flex-col justify-center", idx === 0 ? "md:w-1/2" : "")}>
                  <Label className="text-primary mb-6 block text-[0.6rem]">{article.category}</Label>
                  <Title className="mb-6 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </Title>
                  <Body className="text-sm line-clamp-3 mb-8 text-on-surface/60">
                    {article.excerpt}
                  </Body>
                  <div className="mt-auto pt-6 border-t border-on-surface/5 flex justify-between items-center">
                    <Label className="text-[0.6rem]">{article.date}</Label>
                    <Label className="text-[0.6rem] group-hover:translate-x-2 transition-transform">Read Article →</Label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <NewsLetter />
      
      <Footer />
    </main>
  );
}
