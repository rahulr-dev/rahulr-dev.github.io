"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import * as React from "react";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

const LEVEL_CLASSES = [
  "bg-muted border-border",
  "bg-emerald-200/70 border-emerald-200/60",
  "bg-emerald-300/70 border-emerald-300/60",
  "bg-emerald-400/80 border-emerald-400/60",
  "bg-emerald-500/90 border-emerald-500/60",
];

interface ContributionGridProps {
  contributions: ContributionDay[];
}

export function ContributionGrid({ contributions }: ContributionGridProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const days = contributions.length;
  const tooltipContent = `Last ${days} days`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate3d(${e.clientX + 12}px, ${
        e.clientY + 12
      }px, 0)`;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsVisible(true);
    requestAnimationFrame(() => {
      if (tooltipRef.current) {
        tooltipRef.current.style.transform = `translate3d(${
          e.clientX + 12
        }px, ${e.clientY + 12}px, 0)`;
      }
    });
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Card
        className="col-span-1 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 text-center border-muted/40 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid grid-flow-col grid-rows-7 gap-x-1.5 gap-y-1">
          {contributions.map((day) => {
            const levelClass = LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0];

            return (
              <span
                key={day.date}
                className={`size-2.5 sm:size-2.5 rounded-[2px] border transition-colors duration-200 ${levelClass}`}
              />
            );
          })}
        </div>
      </Card>
      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed top-0 left-0 z-50 pointer-events-none px-3 py-1.5 text-xs font-medium bg-card/90 text-card-foreground border border-muted/40 backdrop-blur-sm rounded-full shadow-lg whitespace-nowrap will-change-transform"
        >
          {tooltipContent}
        </div>
      )}
    </>
  );
}
