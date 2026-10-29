"use client";

import { useEffect, useRef } from "react";

type FlowBlob = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  phase: number;
  amplitude: number;
  color: string;
};

const COLORS = [
  "rgba(0, 229, 255, 0.22)",
  "rgba(83, 104, 255, 0.18)",
  "rgba(139, 92, 246, 0.19)",
  "rgba(57, 255, 136, 0.25)",
  "rgba(0, 153, 255, 0.16)",
];

export default function SeoGrowthFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let width = 0;
    let height = 0;
    let frameId = 0;
    let previousTime = 0;
    let elapsed = 0;
    let pointerX = 0.5;
    let pointerY = 0.55;
    let targetX = 0.5;
    let targetY = 0.55;
    let pixelRatio = 1;

    const blobs: FlowBlob[] = COLORS.map((color, index) => ({
      x: 0.12 + index * 0.19,
      y: 0.55 + (index % 3) * 0.25,
      radius: 0.24 + (index % 2) * 0.07,
      speed: 0.012 + (index % 3) * 0.004,
      phase: index * 1.7,
      amplitude: 0.07 + (index % 2) * 0.04,
      color,
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas!.width = Math.round(width * pixelRatio);
      canvas!.height = Math.round(height * pixelRatio);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;

      context!.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    }

    function movePointer(event: PointerEvent) {
      if (event.pointerType === "touch") return;

      targetX = event.clientX / Math.max(width, 1);
      targetY = event.clientY / Math.max(height, 1);
    }

    function drawBlob(
      x: number,
      y: number,
      radius: number,
      color: string,
    ) {
      const gradient = context!.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius,
      );

      gradient.addColorStop(0, color);
      gradient.addColorStop(0.38, color);
      gradient.addColorStop(1, "rgba(7, 16, 32, 0)");

      context!.fillStyle = gradient;
      context!.fillRect(
        x - radius,
        y - radius,
        radius * 2,
        radius * 2,
      );
    }

    function render(time: number) {
      frameId = 0;

      const delta = previousTime
        ? Math.min((time - previousTime) / 1000, 0.05)
        : 0;

      previousTime = time;
      elapsed += delta;

      context!.clearRect(0, 0, width, height);

      pointerX += (targetX - pointerX) * Math.min(1, delta * 2.2);
      pointerY += (targetY - pointerY) * Math.min(1, delta * 2.2);

      blobs.forEach((blob, index) => {
        if (!reducedMotion.matches) {
          blob.y -= blob.speed * delta;
          blob.x =
            0.12 +
            index * 0.19 +
            Math.sin(elapsed * 0.22 + blob.phase) * blob.amplitude;

          if (blob.y < -0.25) {
            blob.y = 1.2;
            blob.x = 0.08 + Math.random() * 0.84;
          }
        }

        const x = blob.x * width;
        const y = blob.y * height;
        const radius = blob.radius * Math.max(width, height);
        const fadeIn = Math.min(1, (1.15 - blob.y) * 2);
        const fadeOut = Math.min(1, (blob.y + 0.25) * 3);
        const alpha = Math.max(0, Math.min(fadeIn, fadeOut));

        context!.globalAlpha = alpha;
        drawBlob(x, y, radius, blob.color);
      });

      context!.globalAlpha = 1;

      const cursorRadius = Math.min(width, height) * 0.34;
      drawBlob(
        pointerX * width,
        pointerY * height,
        cursorRadius,
        "rgba(57, 255, 136, 0.17)",
      );

      context!.globalAlpha = 1;

      if (!reducedMotion.matches) {
        frameId = window.requestAnimationFrame(render);
      }
    }

    function start() {
      if (frameId) window.cancelAnimationFrame(frameId);
      previousTime = 0;
      frameId = window.requestAnimationFrame(render);
    }

    resize();
    render(0);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", movePointer, { passive: true });
    reducedMotion.addEventListener("change", start);

    if (!reducedMotion.matches) {
      start();
    }

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      reducedMotion.removeEventListener("change", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
