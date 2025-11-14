"use client";

import { useEffect, useRef } from "react";

interface PlasmaBackgroundProps {
  color?: string;
  opacity?: number;
  speed?: number;
}

export function PlasmaBackground({ 
  color = "#FF0000", 
  opacity = 0.15,
  speed = 0.001 
}: PlasmaBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const plasma = (x: number, y: number, time: number) => {
      return (
        Math.sin(x * 0.01 + time) +
        Math.sin(y * 0.01 + time) +
        Math.sin((x + y) * 0.01 + time) +
        Math.sin(Math.sqrt(x * x + y * y) * 0.01 + time)
      );
    };

    const render = () => {
      const { width, height } = canvas;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y += 2) {
        for (let x = 0; x < width; x += 2) {
          const value = plasma(x, y, time);
          const normalized = (value + 4) / 8;

          const index = (y * width + x) * 4;

          // Convert hex color to RGB
          const r = parseInt(color.slice(1, 3), 16);
          const g = parseInt(color.slice(3, 5), 16);
          const b = parseInt(color.slice(5, 7), 16);

          data[index] = r * normalized;
          data[index + 1] = g * normalized;
          data[index + 2] = b * normalized;
          data[index + 3] = 255 * opacity * normalized;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      time += speed;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}

