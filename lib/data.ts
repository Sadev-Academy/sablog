export interface Category {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const CATEGORIES: Record<string, Category> = {
  ai: {
    slug: "ai",
    title: "Artificial Intelligence",
    description: "Deconstructing the silicon mind. From neural architectures to the ethical frontiers of machine sentience.",
    image: "/images/cat-ai.png",
  },
  tech: {
    slug: "tech",
    title: "Technology",
    description: "Analyzing the digital pulse. From semiconductor breakthroughs to the future of ubiquitous computing.",
    image: "/images/cat-tech.png",
  },
  programming: {
    slug: "programming",
    title: "Programming",
    description: "The logic of creation. Exploring languages, paradigms, and the evolving craft of software engineering.",
    image: "/images/cat-programming.png",
  },
  design: {
    slug: "design",
    title: "Design",
    description: "Visual systems and human intent. Mastering the intersection of aesthetics, usability, and brand narrative.",
    image: "/images/cat-design.png",
  },
  freelancing: {
    slug: "freelancing",
    title: "Freelancing",
    description: "The new economy of work. Navigating the complexities of independent mastery and high-ticket specialization.",
    image: "/images/cat-freelancing.png",
  },
};

export interface Article {
  id: string;
  category: string;
  slug: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    category: "ai",
    slug: "future-of-ai-design-systems",
    title: "The Future of AI in Modern Design Systems",
    excerpt: "How generative algorithms are shifting from production tools to creative collaborators in the world's most sophisticated digital product teams.",
    author: { 
      name: "Elena Vance", 
      avatar: "https://i.pravatar.cc/150?u=elena",
      role: "Design Strategist"
    },
    date: "May 24, 2026",
    readTime: "12 Min Read",
    image: "/images/hero-featured.png",
    featured: true,
  },
  {
    id: "2",
    category: "tech",
    slug: "beyond-the-perimeter",
    title: "Beyond the Perimeter: The New Rules of Distributed Network Architecture",
    excerpt: "Why the transition to remote-first infrastructure is forcing a complete rewrite of security protocols.",
    author: { 
      name: "Marcus Chen", 
      avatar: "https://i.pravatar.cc/150?u=marcus",
      role: "Technical Lead"
    },
    date: "May 20, 2026",
    readTime: "8 Min Read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    category: "programming",
    slug: "rust-vs-carbon",
    title: "Rust vs Carbon: Evaluating the Next Generation of Safety-Critical Code",
    excerpt: "A deep dive into why Google's Carbon might not be the Rust-killer everyone expected.",
    author: { 
      name: "Julian Thorne", 
      avatar: "https://i.pravatar.cc/150?u=julian",
      role: "Editor-in-Chief"
    },
    date: "May 18, 2026",
    readTime: "15 Min Read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "4",
    category: "freelancing",
    slug: "high-ticket-retainers",
    title: "The Art of High-Ticket Retainers for Specialist Designers",
    excerpt: "Transitioning from project-based fee structures to becoming an indispensable strategic partner.",
    author: { 
      name: "Sarah Jenkins", 
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Senior Consultant"
    },
    date: "May 15, 2026",
    readTime: "10 Min Read",
    image: "https://images.unsplash.com/photo-1572021335469-3171624c1c5c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "5",
    category: "ai",
    slug: "ownership-generative-media",
    title: "Ownership in the Age of Generative Synthetic Media",
    excerpt: "Who truly owns the copyright of a work where the prompt is human but the execution is machine?",
    author: { 
      name: "Elena Vance", 
      avatar: "https://i.pravatar.cc/150?u=elena",
      role: "Design Strategist"
    },
    date: "May 12, 2026",
    readTime: "14 Min Read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "6",
    category: "ai",
    slug: "llm-plateau",
    title: "The LLM plateau: Why scaling alone isn't the answer to AGI",
    excerpt: "As compute costs skyrocket, researchers are pivoting from sheer model size to architectural efficiency and synthetic reasoning loops.",
    author: { 
      name: "Marcus Chen", 
      avatar: "https://i.pravatar.cc/150?u=marcus",
      role: "Technical Lead"
    },
    date: "Jan 14, 2026",
    readTime: "12 Min Read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "7",
    category: "ai",
    slug: "tactile-intelligence",
    title: "Tactile Intelligence: The next frontier for robotics",
    excerpt: "How new sensory skin technologies are allowing humanoid robots to understand physical resistance and texture.",
    author: { 
      name: "Sarah Jenkins", 
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Senior Consultant"
    },
    date: "Feb 02, 2026",
    readTime: "8 Min Read",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
  },
];
