import {
  Download,
  Menu,
  Moon,
  Sun,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["resume", "Resume"],
  ["contact", "Contact"]
];

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-card">
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-extrabold tracking-tight"
          >
            <span className="gradient-text">J</span>
            <span className="text-white">aganath</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative rounded-lg px-3 py-2 text-sm transition ${
                  active === id
                    ? "text-brand-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {label}

                {active === id && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-brand-400"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white sm:block"
              aria-label="Download resume"
            >
              <Download size={18} />
            </a>

            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button
              className="rounded-lg p-2 text-slate-300 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-2 md:hidden">
            {links.map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm ${
                  active === id
                    ? "bg-brand-500/10 text-brand-300"
                    : "text-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}