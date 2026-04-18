"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Student Testimonial",
    role: "DevSecOps Pipeline with Kubernetes",
    quote:
      "ZeroTrace guided me through building a complete end-to-end DevSecOps pipeline with Kubernetes. I initially struggled with cloud infrastructure and understanding the full workflow, but the step-by-step mentorship made everything clear. By the end, I had a production-style setup across multiple machines and felt genuinely job-ready.",
  },
  {
    name: "Student Testimonial",
    role: "Cybersecurity / Web Application Security",
    quote:
      "ZeroTrace helped simplify cybersecurity concepts through practical lab guidance and real-world web application security techniques. I was initially confused about how to approach both theory and hands-on exercises, but the structured mentoring made everything clear. It significantly improved my understanding and confidence during evaluations.",
  },
  {
    name: "Student Testimonial",
    role: "GRC / ISO 27001 Implementation",
    quote:
      "ZeroTrace explained the end-to-end implementation of ISO 27001 in a way that connected theory with real organizational practices. I was able to clearly understand how GRC works in real environments and why compliance frameworks are critical. The mentorship gave me a much deeper and practical perspective beyond academic learning.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-14"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold font-brand leading-tight">
          Trusted By Students Seeking
          <span className="text-violet-400"> Real Technical Growth</span>
        </h2>

        <p className="mt-5 text-white/65 text-lg leading-relaxed">
          Feedback from students who experienced hands-on mentorship focused on
          real-world technical skills and industry practices.
        </p>
      </motion.div>

      {/* Cards */}
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
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.quote}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-transparent" />

            {/* Quote Icon */}
            <Quote className="relative z-10 w-8 h-8 text-violet-400/70 mb-5" />

            {/* Stars */}
            <div className="relative z-10 flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-violet-400 text-violet-400"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="relative z-10 text-white/65 leading-relaxed">
              {`"${testimonial.quote}"`}
            </p>

            {/* Author */}
            <div className="relative z-10 mt-6">
              <p className="font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-sm text-violet-400">
                {testimonial.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
