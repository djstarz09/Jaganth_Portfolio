import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Toast from "./components/Toast";

function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const stored =
      localStorage.getItem("portfolio-theme");

    const initial =
      stored ||
      (window.matchMedia(
        "(prefers-color-scheme: light)"
      ).matches
        ? "light"
        : "dark");

    setTheme(initial);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );

    document.body.classList.toggle(
      "light",
      theme === "light"
    );

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors">
      <CursorGlow />

      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />

        <Contact
          showToast={(message) => setToast(message)}
        />
      </main>

      <footer className="relative z-10 border-t border-slate-900 py-8">
        <div className="container-custom flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Jaganath.
          </p>

          <p>
            AI/ML · GenAI · RAG · Python
          </p>
        </div>
      </footer>

      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-950/40 transition hover:-translate-y-1 hover:bg-brand-500"
      >
        Hire Me
      </a>

      <Toast
        message={toast}
        onClose={() => setToast("")}
      />
    </div>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-400">
          404
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-white">
          Page not found
        </h1>

        <p className="mt-4 text-slate-400">
          Looks like this route doesn't exist.
        </p>

        <Link
          to="/"
          className="btn-primary mt-8"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}