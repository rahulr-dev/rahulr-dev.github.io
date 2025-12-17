import { Card } from "@/components/ui/card";
import {
  FileText,
  Github,
  Linkedin,
  Mail,
  CircleArrowOutUpRight,
} from "lucide-react";
import Image from "next/image";
import { GridBackground } from "@/components/grid-background";
import { GithubChartCard } from "@/components/github-chart-card";
import { Tooltip } from "@/components/ui/tooltip";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 overflow-hidden relative">
      <GridBackground />
      {/* GRID CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 w-full h-full lg:grid-rows-[repeat(6,1fr)] relative z-10">
        {/* HERO CARD: Profile Picture */}
        <Tooltip content="Yup! That's me">
          <Card className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 overflow-hidden p-0 group hover:shadow-lg h-48 md:h-auto border-muted/40 bg-card/80">
            <div className="relative w-full h-full">
              <Image
                className="select-none object-cover w-full h-full transition-transform duration-250 group-hover:scale-105 will-change-transform"
                src="/profile.jpg"
                alt="Profile Picture"
                width={400}
                height={400}
                priority
              />
            </div>
          </Card>
        </Tooltip>
        {/* HERO CARD: Introduction Text */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 flex flex-col justify-center p-4 sm:p-5 lg:p-6 hover:shadow-lg h-48 md:h-auto border-muted/40 bg-card/80 transition-shadow">
          <div className="flex flex-col text-center md:text-left space-y-1 sm:space-y-2.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tighter">
              Rahul R<span className="text-primary">.</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-base text-primary/80 font-medium font-mono tracking-wider uppercase">
              Software Engineer
            </p>
            <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-normal leading-relaxed pt-6 max-w-2xl">
              Welcome to my portfolio! I specialize in building modern web
              applications using the latest technologies.
            </p>
          </div>
        </Card>
        {/* SOCIALS CARD */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-1 flex items-center justify-center p-4 border-muted/40 bg-card/80 hover:shadow-lg transition-shadow">
          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Tooltip content="GitHub">
              <a
                href="https://github.com/rahulr-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="GitHub"
              >
                <Github
                  className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200"
                  size={26}
                  strokeWidth={1.5}
                />
              </a>
            </Tooltip>
            <Tooltip content="LinkedIn">
              <a
                href="https://www.linkedin.com/in/rahulramesh-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin
                  className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200"
                  size={26}
                  strokeWidth={1.5}
                />
              </a>
            </Tooltip>
            <Tooltip content="Email">
              <a
                href="mailto:rahul-ramesh@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="Email"
              >
                <Mail
                  className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200"
                  size={26}
                  strokeWidth={1.5}
                />
              </a>
            </Tooltip>
            <Tooltip content="Resume">
              <a
                href="https://drive.google.com/file/d/1_cvVJ86ysHvRvo2VrtqIczA9D2Y3B6yk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg hover:bg-primary/10 transition-colors group"
                aria-label="Resume"
              >
                <FileText
                  className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-200"
                  size={26}
                  strokeWidth={1.5}
                />
              </a>
            </Tooltip>
          </div>
        </Card>

        {/* GITHUB CHART CARD */}
        <GithubChartCard />

        {/* Experience Card */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 h-40 md:h-auto flex flex-col justify-between p-3 sm:p-4 lg:p-5 hover:shadow-lg group overflow-hidden transition-shadow">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono group-hover:text-primary transition-colors duration-200">
            Experience
          </h2>
          <div className="flex flex-col space-y-2 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold text-foreground text-sm sm:text-base">
                  Software Engineer Trainee
                </h3>
                <span className="text-muted-foreground text-[11px] sm:text-xs whitespace-nowrap">
                  Sep 2024 - Sep 2025
                </span>
              </div>
              <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                Wise Work • Bangalore (Remote)
              </p>
            </div>
            <ul className="space-y-0.5 text-foreground/80 list-disc list-inside marker:text-primary/50 text-xs sm:text-sm">
              <li className="line-clamp-1">
                Backend services for secure LLM platform (C#, ASP.NET Core)
              </li>
              <li className="line-clamp-1">
                Dynamic AI provider selection supporting 12+ models
              </li>
              <li className="line-clamp-1">
                Performance tuning & code reviews in agile environment
              </li>
            </ul>
          </div>
        </Card>

        {/* Projects Card */}
        <Tooltip content="View Projects">
          <Link
            href="/projects"
            className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 h-40 md:h-auto"
          >
            <Card className="h-full gap-0 flex flex-col justify-between p-3 sm:p-4 lg:p-5 hover:shadow-lg group cursor-pointer relative border-muted/40 bg-card/80 transition-all duration-200 hover:-translate-y-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono group-hover:text-primary transition-colors duration-200">
                Projects
              </h2>
              <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-primary/10 to-transparent rounded-lg blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <Image
                  src="/mac.png"
                  alt="macbook"
                  width={200}
                  height={200}
                  className="object-contain w-full h-auto max-w-40 sm:max-w-[180px] select-none saturate-0 contrast-90 group-hover:saturate-100 group-hover:scale-105 transition-all duration-300 relative z-10 will-change-transform"
                />
              </div>
              <CircleArrowOutUpRight
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 opacity-50 group-hover:opacity-100 transition-opacity duration-200 text-primary"
                size={20}
                strokeWidth={2}
              />
            </Card>
          </Link>
        </Tooltip>

        {/* Blog Card */}
        <Tooltip content="Coming Soon">
          <Link
            href="#"
            className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 h-40 md:h-auto"
          >
            <Card className="h-full flex flex-col p-3 sm:p-4 lg:p-5 hover:shadow-lg group cursor-pointer relative border-muted/40 bg-card/80 transition-all duration-200 hover:-translate-y-1 opacity-50">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono group-hover:text-primary transition-colors duration-200">
                  Blog
                </h2>
              </div>
              {/* <div className="flex flex-col gap-1 mt-1">
                <p className="text-xs sm:text-sm font-medium leading-tight text-foreground/90 group-hover:underline decoration-primary/50 underline-offset-4 line-clamp-2">
                  Coming Soon
                </p>
              </div> */}
              <CircleArrowOutUpRight
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 opacity-50 group-hover:opacity-100 transition-opacity duration-200 text-primary"
                size={20}
                strokeWidth={2}
              />
            </Card>
          </Link>
        </Tooltip>

        {/* Education Card */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 h-40 md:h-auto flex flex-col justify-between p-3 sm:p-4 lg:p-5 hover:shadow-lg group overflow-hidden border-muted/40 bg-card/80 transition-shadow">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono group-hover:text-primary transition-colors duration-200">
            Education
          </h2>
          <div className="flex flex-col space-y-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground leading-snug text-sm sm:text-base">
                  SNS College of Engineering
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground text-[10px] sm:text-xs font-medium whitespace-nowrap">
                  2022 - 2026
                </span>
              </div>
              <p className="text-primary/80 font-medium text-xs sm:text-sm">
                B.Tech in Information Technology
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm">
                CGPA: 8.2/10
              </p>
            </div>
          </div>
        </Card>

        {/* Skills Card */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 h-40 md:h-auto flex flex-col p-3 sm:p-4 lg:p-5 hover:shadow-lg group border-muted/40 bg-card/80 overflow-hidden transition-shadow">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-4 group-hover:text-primary transition-colors duration-200 z-10">
            Skills
          </h2>
          <div className="flex flex-col justify-center h-full gap-3 sm:gap-4 overflow-hidden py-2 relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-linear-to-l from-card to-transparent z-10 pointer-events-none" />

            {/* Row 1: Languages & Frontend */}
            <div className="flex overflow-hidden select-none">
              <div className="flex shrink-0 animate-marquee gap-2 sm:gap-3">
                {[
                  "C#",
                  "Python",
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind",
                  "C#",
                  "Python",
                  "TypeScript",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind",
                ].map((skill, i) => (
                  <span
                    key={`r1-${i}`}
                    className="px-2.5 py-1 rounded-md bg-primary/5 text-primary text-[10px] sm:text-xs font-medium border border-primary/10 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2: Backend & Database */}
            <div className="flex overflow-hidden select-none">
              <div className="flex shrink-0 animate-marquee-reverse gap-2 sm:gap-3">
                {[
                  "ASP.NET Core",
                  ".NET",
                  "FastAPI",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "SQL",
                  "Supabase",
                  "Prisma",
                  "ASP.NET Core",
                  ".NET",
                  "FastAPI",
                  "Node.js",
                  "PostgreSQL",
                  "MongoDB",
                  "SQL",
                  "Supabase",
                  "Prisma",
                ].map((skill, i) => (
                  <span
                    key={`r2-${i}`}
                    className="px-2.5 py-1 rounded-md bg-secondary/50 text-secondary-foreground text-[10px] sm:text-xs font-medium border border-border/50 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 3: Tools & Cloud */}
            <div className="flex overflow-hidden select-none">
              <div className="flex shrink-0 animate-marquee gap-2 sm:gap-3">
                {[
                  "AWS",
                  "Azure",
                  "Docker",
                  "Git",
                  "CI/CD",
                  "System Design",
                  "Figma",
                  "Unity",
                  "Blender",
                  "AWS",
                  "Azure",
                  "Docker",
                  "Git",
                  "CI/CD",
                  "System Design",
                  "Figma",
                  "Unity",
                  "Blender",
                ].map((skill, i) => (
                  <span
                    key={`r3-${i}`}
                    className="px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground text-[10px] sm:text-xs font-medium border border-border/50 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
