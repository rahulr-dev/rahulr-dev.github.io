"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export function Tooltip({ children, content, className }: TooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const tooltipRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleMouseLeave = (e: React.MouseEvent) => {
    setIsVisible(false);
  };

  // Clone the child element and add event handlers
  const childElement = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement<any>, {
        onMouseMove: (e: React.MouseEvent) => {
          handleMouseMove(e);
          // Call original handler if it exists
          const originalHandler = (children as any).props?.onMouseMove;
          if (originalHandler) originalHandler(e);
        },
        onMouseEnter: (e: React.MouseEvent) => {
          handleMouseEnter(e);
          const originalHandler = (children as any).props?.onMouseEnter;
          if (originalHandler) originalHandler(e);
        },
        onMouseLeave: (e: React.MouseEvent) => {
          handleMouseLeave(e);
          const originalHandler = (children as any).props?.onMouseLeave;
          if (originalHandler) originalHandler(e);
        },
      })
    : children;

  return (
    <>
      {childElement}
      {mounted &&
        isVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            className={cn(
              "fixed top-0 left-0 z-50 pointer-events-none",
              "px-3 py-1.5 text-xs font-medium",
              "bg-card/90 text-card-foreground border border-muted/40",
              "backdrop-blur-sm",
              "rounded-full shadow-lg",
              "animate-in fade-in-0 zoom-in-95 duration-30",
              "whitespace-nowrap",
              "will-change-transform",
              className
            )}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}
