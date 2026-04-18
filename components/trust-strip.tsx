"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Core Technologies",
  },
  {
    value: "Industry",
    label: "Professional Experience",
  },
  {
    value: "Security",
    label: "First Approach",
  },
  {
    value: "Premium",
    label: "Documentation Quality",
  },
];

export default function TrustStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-transparent" />

            <p className="relative z-10 text-2xl font-bold font-brand text-violet-400">
              {stat.value}
            </p>

            <p className="relative z-10 text-sm text-white/60 mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
