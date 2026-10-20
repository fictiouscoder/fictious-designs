"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "mask";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const maskStyle =
    variant === "mask"
      ? {
          clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        }
      : undefined;

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
        ...maskStyle,
      }}
      className={[
        className,
        "transform-gpu",
        variant === "mask"
          ? "transition-[clip-path,opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] motion-reduce:transition-none"
          : "transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : variant === "mask"
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 blur-[2px]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}