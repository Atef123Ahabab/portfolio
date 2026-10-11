import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../../data/profile";
import { cn } from "../../lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "certifications", label: "Certs" },
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
        return rect.top <= 140 && rect.bottom >= 140;
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
          ? "backdrop-blur-xl bg-bg-base/80 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-sm font-bold text-white tracking-widest uppercase"
        >
          {profile.firstName}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={cn(
                  "px-4 py-2 text-xs font-mono uppercase tracking-widest transition-colors",
                  active === l.id ? "text-accent" : "text-ink-400 hover:text-white"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 text-ink-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg-base/95 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-mono uppercase tracking-widest text-ink-300 hover:text-accent"
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
