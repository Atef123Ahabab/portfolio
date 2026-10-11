import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeader eyebrow="Contact" title="Let's work together" center />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-ink-400 leading-relaxed mb-10">
          Open to DevOps, Cloud, AI/ML, QA, and Software Engineering roles and internships.
          The fastest way to reach me is email.
        </p>

        <a
          href={profile.socials.email}
          className="inline-flex items-center gap-2 font-display text-2xl md:text-3xl text-white hover:text-accent transition break-all"
        >
          {profile.email}
          <ArrowUpRight size={24} className="shrink-0" />
        </a>

        <div className="flex items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-ink-400 hover:text-accent transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-ink-400 hover:text-accent transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={profile.socials.phone}
            className="text-ink-400 hover:text-accent transition"
            aria-label="Phone"
          >
            <Phone size={22} />
          </a>
          <span className="text-ink-500 text-xs font-mono uppercase tracking-widest flex items-center gap-2">
            <MapPin size={14} /> {profile.location}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
