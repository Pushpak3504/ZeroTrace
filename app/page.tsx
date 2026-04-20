"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/navbar";
import HeroVisual from "@/components/hero-visual";
import MagneticButton from "@/components/magnetic-button";
import TrustStrip from "@/components/trust-strip";
import WhyZeroTrace from "@/components/why-zerotrace";
import ServicesGrid from "@/components/services-grid";
import TechStack from "@/components/tech-stack";
import PortfolioShowcase from "@/components/portfolio-showcase";
import ProcessTimeline from "@/components/process-timeline";
import Testimonials from "@/components/testimonials";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { whatsappLink } from "@/lib/whatsapp";
import JoinSection from "@/components/join-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen px-4 sm:px-6 pt-32 md:pt-40 pb-20">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-14 xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="max-w-3xl"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono"
            >
              Security-First Technical Mentorship
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight font-brand"
            >
              Beyond Academic
              <br />
              Projects —
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent"
              >
                {" "}
                Build Real Technical Expertise
              </motion.span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
            >
              Cybersecurity, DevSecOps, DevOps, and GRC mentorship designed to
              help students build practical skills through industry-aligned
              projects and real-world guidance.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <a
                href={whatsappLink(
                  "Hi ZeroTrace, I want to discuss my project requirement."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton className="bg-violet-500 hover:bg-violet-400 transition px-6 py-3 rounded-xl font-medium text-white">
                  Book Consultation
                </MagneticButton>
              </a>

              <a href="#portfolio">
                <MagneticButton className="border border-white/15 hover:border-white/30 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-xl font-medium">
                  View Portfolio
                </MagneticButton>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-10 flex flex-wrap gap-6 text-sm text-white/50 font-mono"
            >
              <span>Cybersecurity</span>
              <span>DevSecOps</span>
              <span>DevOps</span>
              <span>GRC</span>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <HeroVisual />
          </motion.div>
        </section>

        {/* MAIN CONTENT */}
        <TrustStrip />
        <WhyZeroTrace />
        <ServicesGrid />
        <TechStack />
        <PortfolioShowcase />
        <ProcessTimeline />
        <Testimonials />
	<JoinSection />
        <FinalCTA />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
