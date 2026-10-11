import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { cn } from "../../lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map((l) => document.getElementById(l.id));
      const current = sections.find((s) => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActive(current?.id ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-bg-base/70 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold gradient-text">
          {profile.firstName}.
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors",
                  active === l.id
                    ? "text-white bg-white/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a href={profile.socials.github} target="_blank" rel="noreferrer"
             className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition">
            <Github size={18} />
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
             className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a href={profile.socials.email}
             className="p-2 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition">
            <Mail size={18} />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg-base/95 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
