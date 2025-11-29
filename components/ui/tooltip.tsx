"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export const Tooltip = React.memo(function Tooltip({
  children,
  content,
  className,
}: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  const updatePosition = React.useCallback((x: number, y: number) => {
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate3d(${x + 12}px, ${
        y + 12
      }px, 0)`;
    }
  }, []);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    },
    [updatePosition]
  );

  const handleMouseEnter = React.useCallback(
    (e: React.MouseEvent) => {
      setIsVisible(true);
      updatePosition(e.clientX, e.clientY);
    },
    [updatePosition]
  );

  const handleMouseLeave = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  // Clone the child element and add event handlers
  const childElement = React.useMemo(() => {
    if (!React.isValidElement(children)) return children;

    return React.cloneElement(children as React.ReactElement<any>, {
      onMouseMove: (e: React.MouseEvent) => {
        handleMouseMove(e);
        const originalHandler = (children as any).props?.onMouseMove;
        if (originalHandler) originalHandler(e);
      },
      onMouseEnter: (e: React.MouseEvent) => {
        handleMouseEnter(e);
        const originalHandler = (children as any).props?.onMouseEnter;
        if (originalHandler) originalHandler(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        handleMouseLeave();
        const originalHandler = (children as any).props?.onMouseLeave;
        if (originalHandler) originalHandler(e);
      },
    });
  }, [children, handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <>
      {childElement}
      <div
        ref={tooltipRef}
        className={cn(
          "fixed top-0 left-0 z-50 pointer-events-none",
          "px-3 py-1.5 text-xs font-medium",
          "bg-card text-card-foreground border border-muted/40",
          "rounded-full shadow-lg will-change-transform",
          "whitespace-nowrap transition-opacity duration-150",
          isVisible ? "opacity-100" : "opacity-0",
          className
        )}
      >
        {content}
      </div>
    </>
  );
});
