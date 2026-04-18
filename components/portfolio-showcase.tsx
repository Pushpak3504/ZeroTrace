"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "End-to-End DevOps Deployment Pipeline",
    domain: "DevSecOps",
    stack: [
      "Git",
      "GitHub",
      "SonarQube",
      "Trivy",
      "Docker",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
    description:
      "Built a scalable DevOps pipeline enabling automated build, test, and deployment workflows using containerized infrastructure and continuous integration practices.",
    link: "https://github.com/Pushpak3504/DevOpsProject",
  },
  {
    title: "Ransomware Simulation, Detection & Isolation System",
    domain: "CyberSecurity",
    stack: ["Bash", "Kali Linux", "Nmap", "Metasploit", "John The Ripper", "AES-256 Encryption", "Auditd", "CIS Benchmarks", "IPTables"],
    description:
      "Developed a ransomware simulation environment to demonstrate real-world attack behavior, combined with detection and isolation mechanisms to identify malicious activity and contain infected systems in controlled environments.",
    link: "https://github.com/Pushpak3504/Ransomware-Simulation-Detection-and-Isolation",
  },
  {
    title: "SecOps Pipeline for Threat Detection & Monitoring",
    domain: "SecOps",
    stack: ["ELK Stack", "Log Analysis", "Threat Detection", "Monitoring", "Alerting"],
    description:
      "Developed a security operations (SecOps) pipeline for centralized log collection, analysis, and threat detection, enabling real-time monitoring and alerting to identify suspicious activity across systems.",
    link: "https://github.com/tanmayrannavare/secops",
  },
  {
    title: "Static Website Deployment with CI/CD Workflow",
    domain: "Cloud",
    stack: ["AWS", "EC2", "VPC", "CloudFront", "Jenkins"],
    description:
      "Designed and deployed a static website with integrated CI/CD workflow, enabling automated build and deployment processes while demonstrating practical web hosting and version control practices.",
    link: "https://github.com/tanmayrannavare/StaticWebsite",
  },
  {
    title: "Linux Web Server Adversary Emulation & SOC Detection Lab",
    domain: "CyberSecurity / SOC",
    stack: ["Linux", "Apache", "Suricata", "Wazuh", "SIEM", "MITRE ATT&CK", "Threat Detection", "Incident Response"],
    description:
      "Engineered a security operations lab to simulate adversary attacks on a Linux web server, integrating Suricata-based network monitoring, Wazuh log analysis, MITRE-mapped detection rules, and active response mechanisms for real-time threat detection and containment.",
    link: "https://github.com/kaiziyo/linux-webserver-adversary-emulation-soc-lab",
  },
  {
    title: "Automated Hybrid Cloud Infrastructure with IaC & CI/CD",
    domain: "DevSecOps / Infrastructure Automation",
    stack: ["Terraform", "CI/CD", "Hybrid Cloud", "Infrastructure as Code", "Automation", "Cloud Deployment"],
    description:
      "Built an end-to-end hybrid cloud automation pipeline integrating Infrastructure as Code (IaC) and CI/CD workflows to provision, configure, and manage infrastructure across environments with improved scalability, consistency, and operational efficiency.",
    link: "https://github.com/CDAC-PROJECT0825/auto-hybrid-infra",
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
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-violet-400 hover:text-violet-300 transition"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
