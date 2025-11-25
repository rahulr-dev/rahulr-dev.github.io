import { Card } from "@/components/ui/card";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden flex items-center">
      {/* GRID CONTAINER:
        - Mobile: 1 column (auto height)
        - Tablet (md): 4 columns
        - Desktop (lg): 8 columns
        - gap-3: Smaller gap to fit everything
        - h-[calc(100%-4rem)]: Takes full height minus top/bottom margin
        - grid-rows-[repeat(6,1fr)]: 6 equal rows for lg screens
      */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-3 w-full h-[calc(100%-4rem)] lg:grid-rows-[repeat(6,1fr)]">
        {/* HERO CARD: Profile Picture - 2x2 on md+, full width on mobile */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 overflow-hidden p-0">
          <Image
            className="object-cover w-full h-full"
            src="/profile.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
          />
        </Card>
        {/* HERO CARD: Introduction Text - 4x2 on lg, 2x2 on md, full width on mobile */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 flex flex-col justify-center p-6 lg:p-8">
          <div className="flex flex-col text-center md:text-left space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold font-mono tracking-tight">
              Rahul R.
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-gray-500 dark:text-gray-400 font-md font-mono tracking-wider">
              SOFTWARE ENGINEER
            </p>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed pt-2">
              Welcome to my portfolio! I specialize in building modern web
              applications using the latest technologies.
            </p>
          </div>
        </Card>
        {/* STANDARD CARDS: Social Icons - 1x1 each, stacked on mobile, row on md+ */}
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Github size={48} strokeWidth={1.5} />
        </Card>
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Linkedin size={48} strokeWidth={1.5} />
        </Card>
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <Mail size={48} strokeWidth={1.5} />
        </Card>
        <Card className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 flex items-center justify-center p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
          <FileText size={48} strokeWidth={1.5} />
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
        {/* 2nd Row: Education, Projects, Blogs */}

        <Card className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 flex flex-col p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">
            Experience
          </h2>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 flex flex-col p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">
            Projects
          </h2>
        </Card>

        {/* 3rd Row: Key Skills and Additional Card */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">
            Education
          </h2>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-4 row-span-2 flex flex-col p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">
            Key Skills
          </h2>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-mono">
            Blogs
          </h2>
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
