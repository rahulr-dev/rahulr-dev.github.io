"use client";

import { useEffect, useRef, useCallback, memo } from "react";

export const GridBackground = memo(function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationFrameRef = useRef<number>(0);
  const isMouseMovingRef = useRef(false);
  const lastDrawTimeRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const now = performance.now();
    // Throttle to ~30fps for better performance
    if (now - lastDrawTimeRef.current < 33) {
      animationFrameRef.current = requestAnimationFrame(draw);
      return;
    }
    lastDrawTimeRef.current = now;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mouseX = mouseRef.current.x;
    const mouseY = mouseRef.current.y;
    const gridSize = 40;
    const revealRadius = 180;
    const revealRadiusSq = revealRadius * revealRadius;

    // Only draw if mouse is in viewport
    if (mouseX < -revealRadius || mouseY < -revealRadius) {
      animationFrameRef.current = requestAnimationFrame(draw);
      return;
    }

    // Calculate visible grid bounds
    const startX = Math.max(
      0,
      Math.floor((mouseX - revealRadius) / gridSize) * gridSize
    );
    const endX = Math.min(
      canvas.width,
      Math.ceil((mouseX + revealRadius) / gridSize) * gridSize
    );
    const startY = Math.max(
      0,
      Math.floor((mouseY - revealRadius) / gridSize) * gridSize
    );
    const endY = Math.min(
      canvas.height,
      Math.ceil((mouseY + revealRadius) / gridSize) * gridSize
    );

    ctx.lineWidth = 1;

    // Batch draw lines with same opacity
    for (let x = startX; x <= endX; x += gridSize) {
      for (let y = startY; y <= endY; y += gridSize) {
        const dx = x - mouseX;
        const dy = y - mouseY;
        const distanceSq = dx * dx + dy * dy;

        if (distanceSq < revealRadiusSq) {
          const opacity = (1 - Math.sqrt(distanceSq) / revealRadius) * 0.3;
          ctx.strokeStyle = `rgba(128,128,128,${opacity})`;

          // Vertical line
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, Math.min(y + gridSize, canvas.height));
          ctx.stroke();

          // Horizontal line
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(Math.min(x + gridSize, canvas.width), y);
          ctx.stroke();
        }
      }
    }

    // Simplified glow effect
    const gradient = ctx.createRadialGradient(
      mouseX,
      mouseY,
      0,
      mouseX,
      mouseY,
      revealRadius
    );
    gradient.addColorStop(0, "rgba(99,102,241,0.08)");
    gradient.addColorStop(1, "rgba(99,102,241,0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, revealRadius, 0, Math.PI * 2);
    ctx.fill();

    animationFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use lower resolution for better performance
    const dpr = Math.min(window.devicePixelRatio, 1.5);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Throttled mouse move
    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseUpdate < 16) return; // ~60fps throttle for mouse
      lastMouseUpdate = now;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    animationFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
      clearTimeout(resizeTimeout);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 will-change-transform"
      style={{ opacity: 0.6 }}
    />
  );
});
