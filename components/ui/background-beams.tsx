"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { HTMLAttributes } from "react";

const beams = [
  { left: "10%", delay: 0, duration: 9 },
  { left: "28%", delay: 1.4, duration: 10 },
  { left: "43%", delay: 0.8, duration: 8.8 },
  { left: "57%", delay: 2.2, duration: 10.2 },
  { left: "76%", delay: 1.1, duration: 9.4 },
  { left: "89%", delay: 2.7, duration: 8.6 },
];

export function BackgroundBeams({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
      {...props}
    >
      {beams.map((beam) => (
        <motion.span
          key={beam.left}
          className="absolute top-0 h-56 w-px bg-gradient-to-b from-cyan-400/0 via-cyan-300/70 to-cyan-400/0 blur-[0.5px]"
          style={{ left: beam.left }}
          initial={{ y: -260, opacity: 0 }}
          animate={{ y: [0, 900], opacity: [0, 0.9, 0] }}
          transition={{
            duration: beam.duration,
            delay: beam.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neutral-950 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-neutral-950 to-transparent" />
    </div>
  );
}
