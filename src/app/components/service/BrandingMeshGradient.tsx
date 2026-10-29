"use client";

import { motion, useReducedMotion } from "framer-motion";

const gradients = [
  {
    className: "left-[-12%] top-[-18%] h-[340px] w-[340px] sm:h-[480px] sm:w-[480px]",
    color: "rgba(123, 47, 255, 0.19)",
    duration: 24,
    x: [0, 70, 35, 0],
    y: [0, 45, -25, 0],
    scale: [1, 1.12, 0.94, 1],
  },
  {
    className: "right-[-15%] top-[8%] h-[300px] w-[300px] sm:h-[430px] sm:w-[430px]",
    color: "rgba(91, 33, 182, 0.17)",
    duration: 29,
    x: [0, -55, -20, 0],
    y: [0, 55, 95, 0],
    scale: [1, 0.92, 1.14, 1],
  },
  {
    className: "bottom-[-20%] left-[22%] h-[300px] w-[300px] sm:h-[440px] sm:w-[440px]",
    color: "rgba(168, 85, 247, 0.12)",
    duration: 32,
    x: [0, 45, -45, 0],
    y: [0, -50, -20, 0],
    scale: [1, 1.1, 0.96, 1],
  },
];

export default function BrandingMeshGradient() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#09090B]" />

      {gradients.map((gradient, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[90px] sm:blur-[130px] ${gradient.className}`}
          style={{ backgroundColor: gradient.color }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: gradient.x,
                  y: gradient.y,
                  scale: gradient.scale,
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: gradient.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/10 via-transparent to-[#09090B]/40" />
    </div>
  );
}
