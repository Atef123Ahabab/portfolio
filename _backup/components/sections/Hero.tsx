import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../../data/profile";

function TypingRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[i % profile.roles.length];
    const speed = deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="gradient-text font-mono">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-cyan/20 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent-violet/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="section w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-sm text-accent-cyan mb-4">Hi, my name is</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            {profile.name}.
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-semibold mb-6">
            I build <TypingRoles />
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-10">{profile.tagline}</p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-base font-semibold hover:opacity-90 transition"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:bg-white/10 text-slate-100 transition"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href={profile.socials.github} target="_blank" rel="noreferrer"
               className="p-3 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Github size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
               className="p-3 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href={profile.socials.email}
               className="p-3 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Mail size={20} />
            </a>
            <a href={profile.socials.phone}
               className="p-3 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Phone size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition"
        aria-label="Scroll to about"
      >
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
        </div>
      </a>
    </section>
  );
}
