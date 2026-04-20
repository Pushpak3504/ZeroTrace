"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const team = [
  {
    name: "Soham Kusmude",
    role: "Founder • DevSecOps • Cybersecurity",
    desc: "Leading ZeroTrace with focus on real-world systems and security engineering.",
    highlight: true,
  },
  {
    name: "Bhakti Kharmale",
    role: "AI Developer",
    desc: "Building intelligent systems and AI-driven solutions.",
  },
  {
    name: "Pushpak Bhosale",
    role: "Cyber Security Professional",
    desc: "Focused on offensive security and real-world threat analysis.",
  },
  {
    name: "Kaushik Bhanuse",
    role: "Salesforce Professional",
    desc: "Specialized in enterprise solutions and CRM systems.",
  },
];

const roles = [
  "DevOps Engineers",
  "Cybersecurity Enthusiasts",
  "Frontend Developers",
];

function TeamCard({ member, onClick }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [12, -12]);
  const rotateY = useTransform(x, [-120, 120], [-12, 12]);

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;

    x.set(px);
    y.set(py);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={() => onClick(member)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.06 }}
      className={`relative cursor-pointer p-6 rounded-2xl border backdrop-blur-xl transition
        ${
          member.highlight
            ? "border-violet-400/40 bg-violet-500/10"
            : "border-white/10 bg-white/5"
        }
      `}
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/20 to-transparent rounded-2xl" />

      {/* Avatar */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-lg font-bold mb-4">
        {member.name.charAt(0)}
      </div>

      <p className="font-semibold text-white">{member.name}</p>
      <p className="text-sm text-violet-400">{member.role}</p>
    </motion.div>
  );
}

export default function JoinSection() {
  const [active, setActive] = useState<any>(null);

  // spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <section id="join"
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden"
    >
      {/* 🔥 Cursor Spotlight */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
        }}
        className="pointer-events-none fixed z-50 w-64 h-64 bg-violet-500/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16 relative z-10"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
          Join ZeroTrace
        </p>

        <h2 className="text-4xl md:text-6xl font-bold font-brand leading-tight">
          Build With a
          <span className="text-violet-400"> Real Technical Team</span>
        </h2>

        <p className="mt-5 text-white/65 text-lg leading-relaxed">
          We are building a next-generation engineering ecosystem focused on
          cybersecurity, DevSecOps, and real-world systems.
        </p>
      </motion.div>

      {/* TEAM GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {team.map((member, i) => (
          <TeamCard key={i} member={member} onClick={setActive} />
        ))}
      </div>

      {/* OPEN ROLES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center relative z-10"
      >
        <h3 className="text-2xl font-semibold mb-4">
          We’re Expanding the Team
        </h3>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {roles.map((role) => (
            <span
              key={role}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70"
            >
              {role}
            </span>
          ))}
        </div>

        <motion.a
          href={whatsappLink(
            "Hi, I want to join ZeroTrace and contribute."
          )}
          target="_blank"
          whileHover={{ scale: 1.07 }}
          className="inline-block bg-violet-500 hover:bg-violet-400 px-6 py-3 rounded-xl font-medium"
        >
          Join Now →
        </motion.a>
      </motion.div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-black border border-white/10 rounded-2xl p-8 max-w-md text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xl font-bold mb-4">
                {active.name.charAt(0)}
              </div>

              <h3 className="text-xl font-semibold">{active.name}</h3>
              <p className="text-violet-400 mb-4">{active.role}</p>
              <p className="text-white/60">{active.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
