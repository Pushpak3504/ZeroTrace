"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  FileText,
  GraduationCap,
  Rocket,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Project Development",
    description:
      "Industry-aligned final year project development across Cybersecurity, DevSecOps, DevOps, and GRC domains.",
    icon: Code2,
  },
  {
    title: "Security Review",
    description:
      "Architecture validation, security hardening guidance, and secure design recommendations for your projects.",
    icon: ShieldCheck,
  },
  {
    title: "Documentation Support",
    description:
      "Premium IEEE/academic documentation crafted with clarity, technical depth, and professional formatting.",
    icon: FileText,
  },
  {
    title: "Viva Preparation",
    description:
      "Structured mentoring to help you explain architecture, implementation, and technical decisions confidently.",
    icon: GraduationCap,
  },
  {
    title: "Deployment Assistance",
    description:
      "Hands-on guidance for deployment pipelines, hosting, CI/CD, Docker, Kubernetes, and infrastructure setup.",
    icon: Rocket,
  },
  {
    title: "Mentorship / Workshops",
    description:
      "Personalized mentoring sessions and technical workshops for deeper understanding beyond project delivery.",
    icon: Users,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
          Core Services
        </p>

        <h2 className="text-4xl md:text-5xl font-bold font-brand leading-tight">
          Technical Services Designed For
          <span className="text-violet-400"> Real Learning & Delivery</span>
        </h2>

        <p className="mt-5 text-white/65 text-lg leading-relaxed">
          From architecture and development to deployment and viva prep —
          ZeroTrace supports students across the full technical lifecycle.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-transparent" />

              <div className="relative z-10 w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-400/20 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-violet-400" />
              </div>

              <h3 className="relative z-10 text-lg font-semibold text-white">
                {service.title}
              </h3>

              <p className="relative z-10 mt-3 text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
