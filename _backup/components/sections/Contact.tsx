import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/profile";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="section">
      <SectionHeader
        eyebrow="06 · Contact"
        title="Let's work together"
        subtitle="Open to DevOps, Cloud, AI/ML, QA, and Software Engineering roles and internships."
      />

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <a href={profile.socials.email}
             className="glass p-5 flex items-center gap-4 hover:border-accent-cyan/40 transition">
            <Mail className="text-accent-cyan" size={20} />
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="text-slate-200 text-sm">{profile.email}</p>
            </div>
          </a>
          <a href={profile.socials.phone}
             className="glass p-5 flex items-center gap-4 hover:border-accent-cyan/40 transition">
            <Phone className="text-accent-cyan" size={20} />
            <div>
              <p className="text-xs text-slate-500">Phone</p>
              <p className="text-slate-200 text-sm">{profile.phone}</p>
            </div>
          </a>
          <div className="glass p-5 flex items-center gap-4">
            <MapPin className="text-accent-cyan" size={20} />
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-slate-200 text-sm">{profile.location}</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <a href={profile.socials.github} target="_blank" rel="noreferrer"
               className="p-3 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Github size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
               className="p-3 rounded-xl glass hover:bg-white/10 text-slate-300 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass p-6 space-y-4"
        >
          <input
            name="name"
            required
            placeholder="Your name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/60 transition"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/60 transition"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about the opportunity..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-cyan/60 transition resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-bg-base font-semibold hover:opacity-90 transition"
          >
            <Send size={16} /> {sent ? "Opening mail..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
