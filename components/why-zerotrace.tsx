"use client";

import { motion } from "framer-motion";

const points = [
  {
    title: "Most Providers Deliver Submissions",
    text: "They focus on completing projects for marks — not on building real understanding or technical depth.",
  },
  {
    title: "We Deliver Understanding",
    text: "Every project is designed to teach how systems work, why architecture matters, and how security fits into engineering.",
  },
  {
    title: "Industry-Aligned Mentorship",
    text: "Our guidance is shaped by real-world DevOps, DevSecOps, Cybersecurity, and GRC practices used in production environments.",
  },
];

export default function WhyZeroTrace() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
            Why ZeroTrace Exists
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-brand">  
           We Built ZeroTrace Because
            <span className="text-violet-400">
              {" "}
              Students Deserve More Than Just Project Delivery
            </span>
          </h2>

          <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-xl">
            ZeroTrace was founded to bridge the gap between academic submissions
            and real industry understanding — helping students learn how modern
            systems are actually built, secured, deployed, and maintained.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-5"
        >
          {points.map((point) => (
            <motion.div
              key={point.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 hover:opacity-100 transition duration-500" />

              <h3 className="relative z-10 text-lg font-semibold text-white">
                {point.title}
              </h3>

              <p className="relative z-10 mt-2 text-white/60 leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
