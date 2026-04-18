"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Requirement Discussion",
    description:
      "We understand your project goals, domain, academic requirements, and technical expectations.",
  },
  {
    step: "02",
    title: "Architecture Planning",
    description:
      "We design the project architecture, select the right stack, and define implementation roadmap.",
  },
  {
    step: "03",
    title: "Development & Mentorship",
    description:
      "Hands-on guided implementation with explanation of architecture, tools, and decisions.",
  },
  {
    step: "04",
    title: "Documentation & Testing",
    description:
      "Comprehensive documentation preparation, testing support, and technical validation.",
  },
  {
    step: "05",
    title: "Deployment & Viva Prep",
    description:
      "Final deployment guidance, architecture walkthrough, and viva preparation support.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
          How We Work
        </p>

        <h2 className="text-4xl md:text-5xl font-bold font-brand leading-tight">
          Structured Guidance From
          <span className="text-violet-400"> Idea To Final Delivery</span>
        </h2>

        <p className="mt-5 text-white/65 text-lg leading-relaxed">
          Our workflow ensures every project is technically sound, properly
          documented, and fully understood before submission.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto pl-2 sm:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-10">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-16 sm:pl-20"
            >
              {/* Step Dot */}
              <div className="absolute left-0 top-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-xl flex items-center justify-center text-violet-400 font-semibold font-mono">
                {item.step}
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-violet-400/20 transition">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
