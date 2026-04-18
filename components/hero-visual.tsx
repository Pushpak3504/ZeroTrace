"use client";

import ParticleField from "@/components/particle-field";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";

export default function HeroVisual() {
  const [hovered, setHovered] = useState(false);

  // Absolute cursor position
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Relative center position for tilt
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const smoothCursorX = useSpring(cursorX, {
    stiffness: 300,
    damping: 25,
  });

  const smoothCursorY = useSpring(cursorY, {
    stiffness: 300,
    damping: 25,
  });

  const rotateX = useTransform(tiltY, [-150, 150], [12, -12]);
  const rotateY = useTransform(tiltX, [-150, 150], [-12, 12]);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const absoluteX = e.clientX - rect.left;
    const absoluteY = e.clientY - rect.top;

    const centeredX = absoluteX - rect.width / 2;
    const centeredY = absoluteY - rect.height / 2;

    cursorX.set(absoluteX);
    cursorY.set(absoluteY);

    tiltX.set(centeredX);
    tiltY.set(centeredY);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: [0, -10, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative flex items-center justify-center w-full aspect-square max-w-[280px] sm:max-w-sm md:max-w-md mx-auto"
      style={{ perspective: 1200 }}
    >
      <ParticleField />

      {/* Glass Cursor */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.4,
        }}
        style={{
          left: smoothCursorX,
          top: smoothCursorY,
        }}
        className="pointer-events-none absolute z-50 w-12 h-12 rounded-full border border-violet-300/30 bg-violet-300/10 backdrop-blur-xl -translate-x-1/2 -translate-y-1/2"
      />

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: hovered ? 1.4 : 1,
          opacity: hovered ? 1 : 0.6,
        }}
        className="absolute w-80 h-80 rounded-full bg-violet-500/30 blur-[120px]"
      />

      {/* Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-72 h-72 rounded-full border border-violet-400/20 border-dashed"
      />

      {/* Main Orb */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: hovered ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="relative z-20 w-56 h-56 rounded-full bg-gradient-to-br from-violet-500/20 via-violet-400/10 to-blue-500/10 backdrop-blur-2xl border border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(139,92,246,0.35)]"
      >
        <div className="absolute inset-4 rounded-full border border-white/10" />
        <div className="absolute w-28 h-28 rounded-full bg-violet-400/40 blur-3xl" />

        <div className="relative z-10 text-center">
          <p className="font-brand text-5xl font-bold">0</p>
          <p className="text-xs text-white/40 mt-1 font-mono tracking-[0.3em]">
            TRACE
          </p>
        </div>
      </motion.div>

      {/* Left Card */}
      <motion.div
        animate={{
          y: hovered ? -25 : 0,
          x: hovered ? -10 : 0,
          rotate: hovered ? -8 : 0,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="absolute top-8 -left-4 z-30 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
      >
        <p className="text-xs text-white/50 font-mono">SECURITY</p>
        <p className="font-semibold text-sm">FIRST</p>
      </motion.div>

      {/* Right Card */}
      <motion.div
        animate={{
          y: hovered ? 25 : 0,
          x: hovered ? 10 : 0,
          rotate: hovered ? 8 : 0,
          scale: hovered ? 1.08 : 1,
        }}
        transition={{ duration: 0.35, delay: 0.12 }}
        className="absolute bottom-8 -right-4 z-30 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
      >
        <p className="text-xs text-white/50 font-mono">INDUSTRY</p>
        <p className="font-semibold text-sm">GRADE</p>
      </motion.div>
    </motion.div>
  );
}
