import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-bg-base overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain bg-[size:24px_24px] opacity-60" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/[0.06] blur-3xl" />

      <div className="relative section w-full pt-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="md:hidden mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={profileImg}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-accent mb-6">
              {profile.greeting}
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
              {profile.name}
            </h1>

            <p className="text-lg md:text-xl text-ink-300 max-w-2xl leading-relaxed mb-12">
              {profile.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-14">
              <a href="#contact" className="btn-primary">
                Get in touch <ArrowRight size={16} />
              </a>
              <a href="#projects" className="btn-ghost">
                View my work
              </a>
            </div>

            <div className="flex items-center gap-5">
              <a href={profile.socials.github} target="_blank" rel="noreferrer"
                 className="text-ink-400 hover:text-accent transition" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
                 className="text-ink-400 hover:text-accent transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={profile.socials.email}
                 className="text-ink-400 hover:text-accent transition" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10">
                <img
                  src={profileImg}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-500">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-ink-500/60 to-transparent" />
      </div>
    </section>
  );
}
