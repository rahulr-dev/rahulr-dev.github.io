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
import { Github, ExternalLink, Calendar, Folder } from "lucide-react";
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
    image: "/mac.png",
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
    image: "/mac.png",
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

  return (
    <div className="h-screen overflow-y-auto">
      <GridBackground />

      {/* HERO SECTION */}
      <section className="w-full pt-20 pb-12 flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl sm:text-6xl font-mono font-bold">Projects</h1>
        <p className="text-muted-foreground text-center max-w-md px-4">
          A collection of projects I&apos;ve built. Click on any project to
          learn more.
        </p>
      </section>

      {/* PROJECTS LIST */}
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer border-muted/40 bg-card/80 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Screenshot */}
              <div className="relative w-full h-48 bg-muted/20 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-[10px] sm:text-xs font-medium text-muted-foreground border border-border/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-lg sm:text-xl font-bold font-mono group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h2>
                  <span className="text-xs text-muted-foreground whitespace-nowrap flex items-center gap-1">
                    <Calendar size={12} />
                    {project.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-primary/5 text-primary text-[10px] sm:text-xs font-medium border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-muted/50 text-muted-foreground text-[10px] sm:text-xs font-medium">
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
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="min-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden border-muted/40 bg-card">
          {selectedProject && (
            <>
              {/* Screenshot */}
              <div className="relative w-full h-56 sm:h-64 bg-muted/20 rounded-lg overflow-hidden -mt-2">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
              </div>

              <DialogHeader className="gap-3">
                <div className="flex items-start justify-between gap-4">
                  <DialogTitle className="text-2xl sm:text-3xl font-mono">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex items-center gap-2 shrink-0">
                    {selectedProject.github && (
                      <Tooltip content="View Code">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github
                            className="text-muted-foreground hover:text-primary transition-colors"
                            size={18}
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
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink
                            className="text-muted-foreground hover:text-primary transition-colors"
                            size={18}
                          />
                        </a>
                      </Tooltip>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Folder size={14} />
                    {selectedProject.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {selectedProject.date}
                  </span>
                </div>

                <DialogDescription className="text-base leading-relaxed">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Features */}
              {selectedProject.features && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-foreground">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-foreground">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
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

export default Projects;
