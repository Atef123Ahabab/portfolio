import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono uppercase tracking-widest text-ink-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-xs text-ink-500">
          Built with React · Tailwind · GitHub Pages
        </p>
      </div>
    </footer>
  );
}
