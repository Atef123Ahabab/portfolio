import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-slate-500 flex items-center gap-1.5">
          Built with <Heart size={14} className="text-accent-pink" /> using React,
          Tailwind & GitHub Pages
        </p>

        <div className="flex items-center gap-3">
          <a href={profile.socials.github} target="_blank" rel="noreferrer"
             className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
             className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a href={profile.socials.email}
             className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
            <Mail size={18} />
          </a>
          <a href={profile.socials.phone}
             className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition">
            <Phone size={18} />
          </a>
        </div>

        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
