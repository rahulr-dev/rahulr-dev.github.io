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

export default function Home() {
  return (
    <main className="h-screen max-w-[1310px] mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 overflow-hidden relative">
      <GridBackground />
      {/* GRID CONTAINER:
        - Mobile: 1 column (auto height)
        - Tablet (md): 4 columns
        - Desktop (lg): 8 columns
        - Compact spacing to fit in viewport
        - Fixed heights for single screen display
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3 lg:gap-4 w-full h-full lg:grid-rows-[repeat(6,1fr)] relative z-10">
        {/* HERO CARD: Profile Picture - 2x2 on md+, full width on mobile */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 overflow-hidden p-0 group transition-all duration-300 hover:shadow-xl h-48 md:h-auto">
          <div className="relative w-full h-full">
            <Image
              className="select-none object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 animate-in fade-in"
              src="/profile.jpg"
              alt="Profile Picture"
              width={400}
              height={400}
              priority
            />
          </div>
        </Card>
        {/* HERO CARD: Introduction Text - 4x2 on lg, 2x2 on md, full width on mobile */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 flex flex-col justify-center p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-xl h-48 md:h-auto">
          <div className="flex flex-col text-center md:text-left space-y-2 sm:space-y-2.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Rahul R.
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground font-medium font-mono tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Software Engineer
            </p>
            <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-normal leading-relaxed pt-1 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Welcome to my portfolio! I specialize in building modern web
              applications using the latest technologies.
            </p>
          </div>
        </Card>
        {/* STANDARD CARDS: Social Icons - 1x1 each, stacked on mobile, row on md+ */}
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 h-20 md:h-auto flex items-center justify-center p-3 hover:bg-accent transition-all duration-300 cursor-pointer group hover:shadow-lg">
          <Github
            className="transition-transform duration-300 group-hover:scale-110"
            size={32}
            strokeWidth={1.5}
          />
        </Card>
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 h-20 md:h-auto flex items-center justify-center p-3 hover:bg-accent transition-all duration-300 cursor-pointer group hover:shadow-lg">
          <Linkedin
            className="transition-transform duration-300 group-hover:scale-110"
            size={32}
            strokeWidth={1.5}
          />
        </Card>
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 h-20 md:h-auto flex items-center justify-center p-3 hover:bg-accent transition-all duration-300 cursor-pointer group hover:shadow-lg">
          <Mail
            className="transition-transform duration-300 group-hover:scale-110"
            size={32}
            strokeWidth={1.5}
          />
        </Card>
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 md:row-span-1 h-20 md:h-auto flex items-center justify-center p-3 hover:bg-accent transition-all duration-300 cursor-pointer group hover:shadow-lg">
          <FileText
            className="transition-transform duration-300 group-hover:scale-110"
            size={32}
            strokeWidth={1.5}
          />
        </Card>
        {/* <Card className="flex items-center justify-center p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Mail size={48} strokeWidth={1} />
        </Card>{" "}
        <Card className="flex items-center justify-center p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Mail size={48} strokeWidth={1} />
        </Card>{" "}
        <Card className="flex items-center justify-center p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Mail size={48} strokeWidth={1} />
        </Card>{" "}
        <Card className="flex items-center justify-center p-6 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Mail size={48} strokeWidth={1} />
        </Card> */}
        {/* 2nd Row: Experience, Projects */}

        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 h-40 md:h-auto flex flex-col p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-xl group overflow-hidden">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
            Experience
          </h2>
          <div className="flex-1 flex flex-col space-y-2 text-xs sm:text-sm">
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
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 h-40 md:h-auto flex flex-col p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-xl group cursor-pointer relative">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
            Projects
          </h2>
          <div className="flex-1 flex items-center justify-center text-muted-foreground"></div>
          <CircleArrowOutUpRight
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 opacity-50 group-hover:opacity-100 transition-opacity"
            size={20}
            strokeWidth={2}
          />
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2 h-40 md:h-auto flex flex-col p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-xl group cursor-pointer relative">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
            Blogs
          </h2>
          <div className="flex-1 flex items-center justify-center text-muted-foreground"></div>
          <CircleArrowOutUpRight
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-5 lg:right-5 opacity-50 group-hover:opacity-100 transition-opacity"
            size={20}
            strokeWidth={2}
          />
        </Card>

        {/* 3rd Row: Education, Key Skills, and Blogs */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 h-40 md:h-auto flex flex-col p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-xl group overflow-hidden">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
            Education
          </h2>
          <div className="flex-1 flex flex-col space-y-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground leading-snug text-sm sm:text-base">
                  SNS College of Engineering
                </h3>
                <span className="text-muted-foreground text-[11px] sm:text-xs whitespace-nowrap">
                  Nov 2022 - Nov 2026
                </span>
              </div>
              <p className="text-foreground/80 text-xs sm:text-sm">
                B.Tech in Information Technology
              </p>
              <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                CGPA: 8.2/10
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-foreground leading-snug text-sm sm:text-base">
                  Kongu Vellalar Mat. HSS
                </h3>
                <span className="text-muted-foreground text-[11px] sm:text-xs whitespace-nowrap">
                  May 2021 - May 2022
                </span>
              </div>
              <p className="text-foreground/80 text-xs sm:text-sm">
                Senior Secondary School
              </p>
              <p className="text-muted-foreground font-medium text-xs sm:text-sm">
                Percentage: 87%
              </p>
            </div>
          </div>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 md:row-span-2 h-40 md:h-auto flex flex-col p-3 sm:p-4 lg:p-5 transition-all duration-300 hover:shadow-xl group">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono mb-2 group-hover:text-primary transition-colors">
            Key Skills
          </h2>
          <div className="flex-1 flex items-center justify-center text-muted-foreground"></div>
        </Card>

        {/* FUTURE CARDS:
            Just add a new <Card> here. 
            - For a wide card: add className="col-span-2"
            - For a tall card: add className="row-span-2"
        */}
      </div>
    </main>
  );
}
