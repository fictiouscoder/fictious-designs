"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
};

export default function Parallax({
  children,
  className = "",
}: ParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (mediaQuery.matches) return;

    let animationFrame = 0;

    const updateParallax = () => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom < 0 || rect.top > viewportHeight) return;

        const distanceFromCenter =
          rect.top + rect.height / 2 - viewportHeight / 2;

        const offset = Math.max(
          -14,
          Math.min(14, distanceFromCenter * -0.035),
        );

        element.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    updateParallax();

    window.addEventListener("scroll", updateParallax, {
      passive: true,
    });
    window.addEventListener("resize", updateParallax);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
      element.style.transform = "";
    };
  }, []);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}