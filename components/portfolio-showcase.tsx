"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Secure Cloud File Upload System",
    domain: "Cloud Security",
    stack: ["AWS", "IAM", "S3", "Presigned URLs"],
    description:
      "Implemented secure direct-to-cloud file uploads using temporary credentials with strict access control.",
  },
  {
    title: "DevSecOps CI/CD Pipeline",
    domain: "DevSecOps",
    stack: ["Docker", "GitHub Actions", "Trivy", "SonarQube"],
    description:
      "Built a full CI/CD pipeline integrating automated security scans, code analysis, and container hardening.",
  },
  {
    title: "Kubernetes Monitoring Stack",
    domain: "DevOps",
    stack: ["Kubernetes", "Prometheus", "Grafana"],
    description:
      "Deployed cluster monitoring with real-time metrics, alerting, and dashboard visualization.",
  },
  {
    title: "SIEM Log Analysis Platform",
    domain: "Cybersecurity",
    stack: ["SIEM", "Log Analysis", "Threat Detection"],
    description:
      "Designed a centralized log monitoring system for detecting suspicious activity and anomalies.",
  },
  {
    title: "Infrastructure as Code Setup",
    domain: "Cloud / DevOps",
    stack: ["Terraform", "AWS", "Automation"],
    description:
      "Automated infrastructure provisioning with modular Terraform configurations and best practices.",
  },
  {
    title: "Web App Security Testing Suite",
    domain: "Cybersecurity",
    stack: ["OWASP ZAP", "Burp Suite", "Manual Testing"],
    description:
      "Performed vulnerability assessments including XSS, SQLi, and authentication flaws.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-6 py-28">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-5xl font-bold font-brand leading-tight">
          Real Projects Built With
          <span className="text-violet-400"> Industry Practices</span>
        </h2>

        <p className="mt-5 text-white/65 text-lg leading-relaxed">
          A selection of projects designed to reflect real-world architectures,
          security practices, and modern development workflows.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
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
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-transparent" />

            <div className="relative z-10">
              <p className="text-xs text-violet-400 font-mono mb-2">
                {project.domain}
              </p>

              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-white/60 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative z-10 mt-6">
              <button className="text-sm text-violet-400 hover:text-violet-300 transition">
                View Details →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
