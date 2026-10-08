import {
  ArrowDown,
  ArrowRight,
  Download
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "AI/ML Engineer",
  "GenAI Engineer",
  "ML Deployment",
  "Software Engineer",
  "Backend Developer"
];

function TypingText() {
  const reduced = useReducedMotion();

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(roles[0]);
      return;
    }

    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);

        if (next === current) {
          setDeleting(true);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);

        if (!next) {
          setDeleting(false);
          setRoleIndex(
            (prev) => (prev + 1) % roles.length
          );
        }
      }
    }, deleting ? 45 : text.length === current.length ? 1500 : 75);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex, reduced]);

  return (
    <span className="gradient-text">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const scrollProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-10 grid-bg" />

      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.65, 0.4]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to work · India
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Hello, I'm Jaganath
            </p>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
              <TypingText />
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              B.Tech CSE graduate passionate about building practical
              AI systems—from machine learning models to
              production-minded GenAI and RAG applications.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={scrollProjects}
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={17} />
              </button>

              <a
                href="/resume.pdf"
                download
                className="btn-secondary"
              >
                Download Resume
                <Download size={17} />
              </a>

              <button
                onClick={scrollContact}
                className="btn-secondary"
              >
                Hire Me
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-800 pt-7 text-sm text-slate-500">
              <span>
                <strong className="text-slate-200">
                  8.18
                </strong>{" "}
                CGPA
              </span>
              <span>
                <strong className="text-slate-200">
                  2026
                </strong>{" "}
                Graduation
              </span>
              <span>
                <strong className="text-slate-200">
                  AI/ML
                </strong>{" "}
                Focus
              </span>
              <span>
                <strong className="text-slate-200">
                  Hyderabad
                </strong>{" "}
                Preferred
              </span>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-slate-500 sm:block"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}