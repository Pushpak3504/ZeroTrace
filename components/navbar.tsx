"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        scale: scrolled ? 0.97 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <nav
        className={`
          rounded-2xl border transition-all duration-300
          ${
            scrolled
              ? "bg-black/40 backdrop-blur-2xl border-white/15 shadow-2xl py-3"
              : "bg-white/5 backdrop-blur-xl border-white/10 py-4"
          }
          px-4 md:px-6
        `}
      >
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="text-xl font-semibold tracking-tight font-brand">
            ZeroTrace
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative hover:text-white transition"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href={whatsappLink(
              "Hi ZeroTrace, I want to discuss my project/mentorship requirement."
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/90 transition"
          >
            Book Consultation
          </motion.a>
        </div>
      </nav>
    </motion.header>
  );
}
