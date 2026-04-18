"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, size: 4, top: 12, left: 18, duration: 8, delay: 0 },
  { id: 2, size: 6, top: 24, left: 82, duration: 10, delay: 1 },
  { id: 3, size: 5, top: 42, left: 68, duration: 7, delay: 2 },
  { id: 4, size: 3, top: 18, left: 55, duration: 9, delay: 0.5 },
  { id: 5, size: 7, top: 66, left: 22, duration: 11, delay: 1.5 },
  { id: 6, size: 4, top: 78, left: 72, duration: 8, delay: 0.2 },
  { id: 7, size: 5, top: 58, left: 88, duration: 9, delay: 2.2 },
  { id: 8, size: 3, top: 85, left: 48, duration: 7, delay: 1.2 },
  { id: 9, size: 6, top: 34, left: 12, duration: 10, delay: 0.8 },
  { id: 10, size: 4, top: 92, left: 62, duration: 8, delay: 2.5 },
];

export default function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0.15 }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-violet-300/40 blur-[2px]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
        />
      ))}
    </div>
  );
}
