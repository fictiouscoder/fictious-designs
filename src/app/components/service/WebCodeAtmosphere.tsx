"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const code = `const createExperience = () => {
  const interface = {
    responsive: true,
    performance: "optimized",
    animation: "smooth",
  };

  return renderInterface(interface);
};

export default createExperience;`;

export default function WebCodeAtmosphere() {
  const reduceMotion = useReducedMotion();
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    let position = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      position = position >= code.length ? 0 : position + 1;
      setLength(position);

      const character = code[position - 1];
      const delay =
        position === 0 ? 700 :
        character === "\n" ? 240 :
        /[{}();,]/.test(character ?? "") ? 90 : 32;

      timeout = setTimeout(type, delay);
    };

    timeout = setTimeout(type, 500);

    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-violet-700/[0.10] blur-[140px]" />

      <pre className="absolute right-0 top-[18%] w-[58%] overflow-hidden whitespace-pre-wrap break-words font-mono text-[10px] leading-7 text-violet-300/[0.18] blur-[0.3px] sm:text-xs sm:leading-8 lg:right-[2%] lg:w-[48%] lg:text-sm">
        {code.slice(0, reduceMotion ? code.length : length)}
        {!reduceMotion && (
          <span className="inline-block h-3 w-px animate-pulse bg-violet-300/40 align-middle" />
        )}
      </pre>
    </div>
  );
}
