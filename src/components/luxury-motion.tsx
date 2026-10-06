import { motion, type Variants } from "framer-motion";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const luxuryEase = [0.25, 0.1, 0.25, 1] as const;

const viewport = {
  once: true,
  amount: 0.2,
} as const;

type Direction = "left" | "right" | "up";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  left: { x: -40 },
  right: { x: 40 },
  up: { y: 30 },
};

export function Reveal({
  children,
  direction = "up",
  className,
  delay = 0,
  duration = 0.7,
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const initial = {
    opacity: 0,
    ...offsets[direction],
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={viewport}
      transition={{
        duration,
        delay,
        ease: luxuryEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  className?: string;
}) {
  return (
    <motion.div
      className={cn("min-w-0", className)}
      initial={{
        opacity: 0,
        ...offsets[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: luxuryEase,
      }}
    >
      {children}
    </motion.div>
  );
}