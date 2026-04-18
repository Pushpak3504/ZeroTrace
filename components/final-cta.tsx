"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/magnetic-button";
import { whatsappLink } from "@/lib/whatsapp";

export default function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 sm:px-8 md:px-16 py-14 md:py-16 text-center"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-blue-500/10" />

        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/15 blur-[160px] rounded-full" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
            Ready To Build?
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-brand leading-tight">
            Let’s Build Something
            <span className="text-violet-400"> Technically Exceptional</span>
          </h2>

          <p className="mt-6 text-white/65 text-lg leading-relaxed">
            Whether you need project mentorship, architecture guidance, or
            full-stack technical implementation — ZeroTrace is ready to help
            you build beyond academic expectations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(
                "Hi ZeroTrace, I want to discuss my technical project requirement."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton className="bg-violet-500 hover:bg-violet-400 px-6 py-3 rounded-xl font-medium text-white">
                Book Consultation
              </MagneticButton>
            </a>

            <a
              href={whatsappLink(
                "Hi ZeroTrace, I have an inquiry regarding your services."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton className="border border-white/15 hover:border-white/30 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-xl font-medium">
                Contact On WhatsApp
              </MagneticButton>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
