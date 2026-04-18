"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-brand">ZeroTrace</h3>

            <p className="mt-4 text-white/60 leading-relaxed max-w-md">
              Secure. Build. Innovate.
              <br />
              Technical mentorship and project development designed to bridge
              academic learning with real industry expertise.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
              Navigation
            </h4>

            <div className="space-y-3 text-white/65">
              <a href="#services" className="block hover:text-white transition">
                Services
              </a>
              <a href="#portfolio" className="block hover:text-white transition">
                Portfolio
              </a>
              <a href="#blog" className="block hover:text-white transition">
                Blog
              </a>
              <a href="#contact" className="block hover:text-white transition">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
              Connect
            </h4>

            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: "https://github.com/Pushpak3504" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pushpak-bhosale/" },
                { icon: FaInstagram, href: "https://www.instagram.com/pushpak_3504" },
                { icon: HiOutlineMail, href: "mailto:pushpak3504@gmail.com" },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-violet-400/30 hover:bg-violet-500/10 transition"
                  >
                    <Icon className="w-5 h-5 text-white/70" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/40">
          <p>© 2026 ZeroTrace. All rights reserved.</p>
          <p>Built with precision by ZeroTrace.</p>
        </div>
      </motion.div>
    </footer>
  );
}
