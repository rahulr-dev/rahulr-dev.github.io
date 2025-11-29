"use client";

import { useState } from "react";
import { GridBackground } from "@/components/grid-background";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Blockchain Development",
    excerpt:
      "A beginner's guide to understanding blockchain technology and building your first decentralized application.",
    content:
      "Blockchain technology has revolutionized the way we think about data storage and trust in digital systems. In this post, we'll explore the fundamentals of blockchain development, from understanding the core concepts to building your first smart contract.\n\nWe'll cover topics like consensus mechanisms, smart contract development with Solidity, and how to deploy your contracts to the Ethereum network. By the end of this guide, you'll have a solid foundation to start building decentralized applications.",
    tags: ["Blockchain", "Solidity", "Web3"],
    image: "/mac.png",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Building Games with Unity: Tips and Best Practices",
    excerpt:
      "Learn essential tips for game development in Unity, from project structure to optimization techniques.",
    content:
      "Unity is one of the most popular game engines in the world, powering everything from indie games to AAA titles. In this post, I'll share some of the key lessons I learned while developing Sound Corp., a puzzle game built entirely in Unity.\n\nWe'll discuss project organization, Object-Oriented Programming principles for game logic, asset optimization, and how to meet tight deadlines without sacrificing quality. These tips will help you become a more efficient game developer.",
    tags: ["Unity", "C#", "Game Dev"],
    image: "/mac.png",
    date: "Dec 28, 2023",
    readTime: "6 min read",
    category: "Game Dev",
  },
  {
    id: 3,
    title: "Modern Web Development with Next.js",
    excerpt:
      "Exploring the power of Next.js for building fast, SEO-friendly web applications.",
    content:
      "Next.js has become the go-to framework for React developers who want to build production-ready applications. With features like server-side rendering, static site generation, and API routes, it provides everything you need out of the box.\n\nIn this post, we'll explore the key features of Next.js 14, including the new App Router, Server Components, and how to leverage these features to build performant web applications.",
    tags: ["Next.js", "React", "TypeScript"],
    image: "/mac.png",
    date: "Nov 20, 2023",
    readTime: "5 min read",
    category: "Web Dev",
  },
];

function Blogs() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="h-screen overflow-y-auto">
      <GridBackground />

      {/* HERO SECTION */}
      <section className="w-full pt-20 pb-12 flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl sm:text-6xl font-mono font-bold">Blog</h1>
        <p className="text-muted-foreground text-center max-w-md px-4">
          Thoughts, tutorials, and insights on software development.
        </p>
      </section>

      {/* BLOG POSTS LIST */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-col gap-4 sm:gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group cursor-pointer border-muted/40 bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Thumbnail */}
                <div className="relative w-full md:w-64 h-48 md:h-auto md:min-h-[180px] bg-muted/20 overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 sm:p-6 flex-1">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold font-mono mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground text-[10px] sm:text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                      Read more
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* BLOG POST DIALOG */}
      <Dialog
        open={selectedPost !== null}
        onOpenChange={(open) => !open && setSelectedPost(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden border-muted/40 bg-card">
          {selectedPost && (
            <>
              {/* Cover Image */}
              <div className="relative w-full h-48 sm:h-56 bg-muted/20 rounded-lg overflow-hidden -mt-2">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
              </div>

              <DialogHeader className="gap-4">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {selectedPost.readTime}
                  </span>
                </div>

                <DialogTitle className="text-2xl sm:text-3xl font-mono leading-tight">
                  {selectedPost.title}
                </DialogTitle>

                <DialogDescription className="text-base leading-relaxed text-foreground/80">
                  {selectedPost.excerpt}
                </DialogDescription>
              </DialogHeader>

              {/* Content */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen size={16} />
                  <span>Article Content</span>
                </div>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {selectedPost.content
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                <h3 className="text-sm font-semibold text-foreground">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-primary/5 text-primary text-sm font-medium border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Blogs;
