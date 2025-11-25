"use client";

import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    const gridSize = 40;
    const revealRadius = 200;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Draw grid lines
      ctx.strokeStyle = "rgba(128, 128, 128, 0.1)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < revealRadius) {
            const opacity = 1 - distance / revealRadius;
            ctx.strokeStyle = `rgba(128, 128, 128, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, Math.min(y + gridSize, canvas.height));
            ctx.stroke();
          }
        }
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        for (let x = 0; x < canvas.width; x += gridSize) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < revealRadius) {
            const opacity = 1 - distance / revealRadius;
            ctx.strokeStyle = `rgba(128, 128, 128, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(Math.min(x + gridSize, canvas.width), y);
            ctx.stroke();
          }
        }
      }

      // Draw glow effect at mouse position
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        revealRadius
      );
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.1)");
      gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.03)");
      gradient.addColorStop(1, "rgba(99, 102, 241, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
