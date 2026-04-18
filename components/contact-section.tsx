"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    domain: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Inquiry sent successfully.");
        setForm({
          name: "",
          email: "",
          domain: "",
          message: "",
        });
      } else {
        setStatus("Failed to send inquiry.");
      }
    } catch {
      setStatus("Something went wrong.");
    }

    setLoading(false);
  }

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-violet-400 mb-4 font-mono">
            Contact ZeroTrace
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-brand leading-tight">
            Let’s Discuss Your
            <span className="text-violet-400"> Next Technical Project</span>
          </h2>

          <p className="mt-6 text-white/65 text-lg leading-relaxed max-w-xl">
            Whether you need project mentorship, security guidance, architecture
            support, or deployment assistance — reach out and let’s discuss your
            requirements.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-5"
        >
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            type="text"
            placeholder="Your Name"
            required
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-violet-400/50 transition"
          />

          <input
            name="email"
            value={form.email}
            onChange={updateField}
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-violet-400/50 transition"
          />

          <input
            name="domain"
            value={form.domain}
            onChange={updateField}
            type="text"
            placeholder="Project Domain / Topic"
            required
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-violet-400/50 transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            rows={5}
            placeholder="Tell us about your requirements..."
            required
            className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-violet-400/50 transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-violet-500 hover:bg-violet-400 transition px-6 py-3 rounded-xl font-medium text-white disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {status && (
            <p className="text-sm text-center text-violet-300">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
