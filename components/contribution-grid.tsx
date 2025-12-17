"use client";

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
] as const;

interface ContributionGridProps {
  contributions: ContributionDay[];
}

export const ContributionGrid = React.memo(function ContributionGrid({
  contributions,
}: ContributionGridProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const days = contributions.length;
  const tooltipContent = `Last ${days} days`;

  const handleMouseMove = React.useCallback((e: React.MouseEvent) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate3d(${e.clientX + 12}px, ${
        e.clientY + 12
      }px, 0)`;
    }
  }, []);

  const handleMouseEnter = React.useCallback((e: React.MouseEvent) => {
    setIsVisible(true);
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate3d(${e.clientX + 12}px, ${
        e.clientY + 12
      }px, 0)`;
    }
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  // Memoize the grid cells
  const gridCells = React.useMemo(
    () =>
      contributions.map((day) => (
        <span
          key={day.date}
          className={`size-2.5 rounded-[2px] border ${
            LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0]
          }`}
        />
      )),
    [contributions]
  );

  return (
    <>
      <Card
        className="col-span-1 min-[426px]:col-span-2 md:col-span-2 lg:col-span-2 md:row-span-1 flex flex-col items-center justify-center gap-2 p-3 sm:p-4 text-center border-muted/40 bg-card/80 hover:shadow-lg transition-shadow group"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="grid grid-flow-col grid-rows-7 gap-x-1.5 gap-y-1">
          {gridCells}
        </div>
      </Card>
      <div
        ref={tooltipRef}
        className={`fixed top-0 left-0 z-50 pointer-events-none px-3 py-1.5 text-xs font-medium bg-card text-card-foreground border border-muted/40 rounded-full shadow-lg whitespace-nowrap will-change-transform transition-opacity duration-150 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {tooltipContent}
      </div>
    </>
  );
});
