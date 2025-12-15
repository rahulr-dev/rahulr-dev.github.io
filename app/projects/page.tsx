"use client";

import { useEffect, useMemo, useState } from "react";
import { GridBackground } from "@/components/grid-background";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Github,
  ExternalLink,
  Calendar,
  Folder,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
  images?: string[];
  date: string;
  category: string;
  features?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Decentralized Certificates Integrity System",
    shortDescription:
      "A blockchain-based credential verification system for secure certificate issuance and verification.",
    fullDescription:
      "Architected and deployed a blockchain-based credential verification system using Solidity and Ethereum, enabling secure certificate issuance and verification for educational institutions. The system ensures tamper-proof credentials that can be independently verified on the blockchain.",
    tags: ["React", "HTML", "CSS", "Node.js", "Solidity", "Ethereum"],
    github: "https://github.com/rahul-gamedev/dcis",
    image: "/DCIS (1).png",
    images: [
      "/DCIS (1).png",
      "/DCIS (2).png",
      "/DCIS (3).png",
      "/DCIS (4).png",
    ],
    date: "Oct 2023 – Jan 2024",
    category: "Blockchain",
    features: [
      "Blockchain-based credential verification using Ethereum",
      "Secure certificate issuance for educational institutions",
      "Tamper-proof credential storage on-chain",
      "Independent verification without central authority",
    ],
  },
  {
    id: 2,
    title: "Sound Corp.",
    shortDescription:
      "A puzzle game developed in Unity using C# with Object-Oriented Programming principles.",
    fullDescription:
      "Developed a puzzle game in Unity using C#, applying Object-Oriented Programming (OOP) principles to manage complex game logic and character behaviors. Published the game project within a 2-week timeline, meeting all development goals.",
    tags: ["C#", "Unity 3D", "Blender", "Adobe Photoshop", "OOP"],
    github: "https://github.com/rahul-gamedev/sound-game",
    image: "/SC cover.jpg",
    images: ["/SC cover.jpg", "/SC (1).png", "/SC (2).png", "/SC (3).png"],
    date: "Dec 2023 – Jan 2024",
    category: "Game Dev",
    features: [
      "Complex puzzle mechanics and game logic",
      "Object-Oriented Programming architecture",
      "3D assets created with Blender",
      "Published within 2-week development timeline",
    ],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedImages = useMemo(() => {
    if (!selectedProject) return [] as string[];
    return selectedProject.images?.length
      ? selectedProject.images
      : [selectedProject.image];
  }, [selectedProject]);

  const selectedImageSrc =
    selectedImages[selectedImageIndex] ?? selectedProject?.image;

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [selectedProject?.id]);

  return (
    <div className="h-screen overflow-y-auto">
      <GridBackground />

      {/* HERO SECTION - Golden Ratio: pt-[5.5rem] (89px), pb-[3.4rem] (55px), gap-[1.3rem] (21px) */}
      <section className="w-full pt-[5.5rem] pb-[3.4rem] flex flex-col items-center justify-center gap-[1.3rem]">
        <h1 className="text-[2.625rem] sm:text-[4.25rem] font-mono font-bold">
          Projects
        </h1>
        <p className="text-muted-foreground text-center max-w-md px-[1.3rem] text-base sm:text-lg">
          A collection of projects I&apos;ve built. Click on any project to
          learn more.
        </p>
      </section>

      {/* PROJECTS LIST - Golden Ratio: pb-[5.5rem] (89px), gap-[2.1rem] (34px) */}
      <section className="max-w-[1100px] mx-auto px-[1.3rem] sm:px-[2.1rem] pb-[5.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.3rem] sm:gap-[2.1rem]">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer border-muted/40 bg-card/80 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden py-0 gap-0"
              onClick={() => {
                setSelectedProject(project);
                setSelectedImageIndex(0);
              }}
            >
              {/* Screenshot - Golden Ratio: h-[12rem] (192px ≈ 89×2.16) */}
              <div className="relative w-full h-[14rem] bg-muted/20 overflow-hidden">
                <Image
                  src={project.images?.[0] ?? project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 transform-gpu"
                  style={{ willChange: "transform" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-[0.8rem] right-[0.8rem] flex gap-[0.5rem]">
                  <span className="px-[0.5rem] py-[0.3rem] rounded-md bg-background/80 backdrop-blur-sm text-[0.625rem] sm:text-[0.75rem] font-medium text-muted-foreground border border-border/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content - Golden Ratio: p-[1.3rem] (21px), mb-[0.8rem] (13px), mb-[1.3rem] (21px) */}
              <div className="p-[1.3rem] sm:p-[1.6rem]">
                <div className="flex items-start justify-between gap-[0.8rem] mb-[0.5rem]">
                  <h2 className="text-[1.125rem] sm:text-[1.25rem] font-bold font-mono group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h2>
                  <span className="text-[0.75rem] text-muted-foreground whitespace-nowrap flex items-center gap-[0.3rem]">
                    <Calendar size={12} />
                    {project.date}
                  </span>
                </div>

                <p className="text-[0.875rem] text-muted-foreground mb-[1.3rem] line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-[0.5rem]">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-[0.5rem] py-[0.2rem] rounded-md bg-primary/5 text-primary text-[0.625rem] sm:text-[0.75rem] font-medium border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-[0.5rem] py-[0.2rem] rounded-md bg-muted/50 text-muted-foreground text-[0.625rem] sm:text-[0.75rem] font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PROJECT DETAIL DIALOG */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
            setSelectedImageIndex(0);
          }
        }}
      >
        <DialogContent className="min-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden border-muted/40 bg-card">
          {selectedProject && (
            <>
              {/* Screenshot - Golden Ratio: h-[13rem] sm:h-[16rem] */}
              <div className="relative w-full h-[24rem] sm:h-[24rem] bg-muted/20 rounded-lg overflow-hidden -mt-[0.5rem]">
                <Image
                  src={selectedImageSrc ?? selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover transform-gpu"
                  style={{ willChange: "transform" }}
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />

                {selectedImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      className="absolute left-[0.6rem] top-1/2 -translate-y-1/2 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-lg bg-background/70 hover:bg-background/90 border border-border/60 backdrop-blur-sm transition-colors"
                      onClick={() =>
                        setSelectedImageIndex((i) =>
                          (i - 1 + selectedImages.length) % selectedImages.length
                        )
                      }
                    >
                      <ChevronLeft className="text-foreground" size={16} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      className="absolute right-[0.6rem] top-1/2 -translate-y-1/2 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-lg bg-background/70 hover:bg-background/90 border border-border/60 backdrop-blur-sm transition-colors"
                      onClick={() =>
                        setSelectedImageIndex((i) =>
                          (i + 1) % selectedImages.length
                        )
                      }
                    >
                      <ChevronRight className="text-foreground" size={16} />
                    </button>
                  </>
                )}
              </div>

              <DialogHeader className="gap-[0.8rem]">
                <div className="flex items-center justify-between gap-[1.3rem]">
                  <DialogTitle className="text-[1.25rem] sm:text-[1.625rem] font-mono max-w-[70%]">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex items-center gap-[0.5rem] shrink-0">
                    {selectedProject.github && (
                      <Tooltip content="View Code">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[2.1rem] w-[2.1rem] items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github
                            className="text-muted-foreground hover:text-primary transition-colors"
                            size={16}
                          />
                        </a>
                      </Tooltip>
                    )}
                    {selectedProject.demo && (
                      <Tooltip content="Live Demo">
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-[2.1rem] w-[2.1rem] items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink
                            className="text-muted-foreground hover:text-primary transition-colors"
                            size={16}
                          />
                        </a>
                      </Tooltip>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-[0.8rem] text-[0.875rem] text-muted-foreground">
                  <span className="flex items-center gap-[0.3rem]">
                    <Folder size={14} />
                    {selectedProject.category}
                  </span>
                  <span className="flex items-center gap-[0.3rem]">
                    <Calendar size={14} />
                    {selectedProject.date}
                  </span>
                </div>

                <DialogDescription className="text-[0.9375rem] leading-[1.618]">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Features - Golden Ratio: space-y-[0.8rem] (13px), space-y-[0.5rem] (8px) */}
              {selectedProject.features && (
                <div className="space-y-[0.8rem]">
                  <h3 className="text-[0.875rem] font-semibold text-foreground">
                    Key Features
                  </h3>
                  <ul className="space-y-[0.5rem]">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-[0.5rem] text-[0.875rem] text-muted-foreground"
                      >
                        <span className="h-[0.375rem] w-[0.375rem] rounded-full bg-primary mt-[0.5rem] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Carousel thumbnails */}
              {selectedImages.length > 1 && (
                <div className="grid grid-cols-3 gap-[0.8rem]">
                  {selectedImages.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      className={`relative aspect-video rounded-md overflow-hidden bg-muted/20 border transition-colors ${
                        index === selectedImageIndex
                          ? "border-primary/60"
                          : "border-border/60 hover:border-primary/30"
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                    >
                      <Image
                        src={src}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 33vw, 200px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Tags - Golden Ratio: space-y-[0.8rem] (13px), gap-[0.5rem] (8px) */}
              <div className="space-y-[0.8rem]">
                <h3 className="text-[0.875rem] font-semibold text-foreground">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-[0.5rem]">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-[0.8rem] py-[0.3rem] rounded-md bg-primary/5 text-primary text-[0.875rem] font-medium border border-primary/10"
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

export default Projects;
