"use client";

import { motion } from "framer-motion";
import {
  Container,
  Cloud,
  Shield,
  Server,
  GitBranch,
  Terminal,
  Database,
  Workflow,
} from "lucide-react";

const row1 = [
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Cloud },
  { name: "AWS", icon: Cloud },
  { name: "Terraform", icon: Workflow },
  { name: "Ansible", icon: Server },
  { name: "GitHub Actions", icon: GitBranch },
  { name: "Linux", icon: Terminal },
  { name: "Windows Server", icon: Database },
];

const row2 = [
  { name: "OWASP ZAP", icon: Shield },
  { name: "Trivy", icon: Shield },
  { name: "SonarQube", icon: Shield },
  { name: "Prometheus", icon: Database },
  { name: "Grafana", icon: Database },
  { name: "Nagios", icon: Server },
  { name: "SIEM", icon: Shield },
  { name: "SOAR", icon: Workflow },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { name: string; icon: React.ElementType }[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-4 w-max"
      >
        {duplicated.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.name}-${i}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-white/75 whitespace-nowrap hover:border-violet-400/30 transition"
            >
              <Icon className="w-5 h-5 text-violet-400" />
              <span>{item.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
          Technical Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold font-brand leading-tight">
          Built Across Modern
          <span className="text-violet-400"> Industry Tooling</span>
        </h2>

        <p className="mt-5 text-white/65 text-lg leading-relaxed">
          ZeroTrace projects and mentorship leverage production-grade tools and
          platforms used across modern DevOps, DevSecOps, Cybersecurity, and
          Infrastructure teams.
        </p>
      </motion.div>

      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
