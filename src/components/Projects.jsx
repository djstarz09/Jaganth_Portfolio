import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Brain,
  Code2,
  Globe,
} from "lucide-react";

const projects = [
  {
    title: "RAG-Based Document Q&A System",
    description:
      "An AI-powered document question-answering system using Retrieval-Augmented Generation to retrieve relevant information and provide grounded answers from uploaded documents.",
    category: "GenAI",
    tech: [
      "Python",
      "LangChain",
      "ChromaDB",
      "FAISS",
      "FastAPI",
      "RAG",
    ],
    github: "https://github.com/djstarz09/RAG-Based-Document-QA",
    featured: true,
  },

  {
    title: "Handwritten Digit Recognition",
    description:
      "A web application that recognizes handwritten digits drawn on an HTML5 canvas using a Random Forest model trained and optimized on the MNIST dataset.",
    category: "ML",
    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "GridSearchCV",
      "Flask",
      "HTML5 Canvas",
    ],
    github:
      "https://github.com/djstarz09/Handwritten-Digit-Recognition",
    featured: true,
  },

  {
    title: "Spam Detection",
    description:
      "A machine learning project that classifies messages as spam or legitimate using text preprocessing, feature extraction, and machine learning classification techniques.",
    category: "ML",
    tech: [
      "Python",
      "Scikit-learn",
      "NLP",
      "Machine Learning",
      "Jupyter",
    ],
    github: "https://github.com/djstarz09/Spam-Detection",
    featured: true,
  },

  {
    title: "Wildfire Detection",
    description:
      "A machine learning project focused on identifying wildfire-related patterns using data-driven techniques.",
    category: "ML",
    tech: [
      "Python",
      "Machine Learning",
      "Data Science",
      "Jupyter",
    ],
    github: "https://github.com/djstarz09/Wildfire-Detection",
  },

  {
    title: "House Price Prediction",
    description:
      "A regression-based machine learning project that predicts house prices using relevant property features and data preprocessing techniques.",
    category: "ML",
    tech: [
      "Python",
      "Scikit-learn",
      "Regression",
      "Pandas",
      "Jupyter",
    ],
    github: "https://github.com/djstarz09/House-Price-Prediction",
  },

  {
    title: "Glaucoma Detection",
    description:
      "A machine learning and computer vision project exploring automated glaucoma detection from medical images.",
    category: "ML",
    tech: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "Jupyter",
    ],
    github: "https://github.com/djstarz09/Glaucoma-Detection",
  },

  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing AI/ML projects, technical skills, experience, education, and contact information.",
    category: "Web",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    github: "https://github.com/djstarz09/portfolio",
    featured: true,
  },

  {
    title: "Website",
    description:
      "A responsive web development project built using modern frontend technologies.",
    category: "Web",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    github: "https://github.com/djstarz09/website",
  },
];

const filters = ["All", "GenAI", "ML", "Web"];

const categoryIcons = {
  GenAI: Sparkles,
  ML: Brain,
  Web: Globe,
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="section-container">
      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="mb-12">
        <p className="section-kicker">03 / PROJECTS</p>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="section-title">
              Proof over{" "}
              <span className="gradient-text">promises.</span>
            </h2>

            <p className="section-subtitle">
              Selected projects showing how I approach AI/ML problems
              from model and retrieval logic through to usable
              interfaces and APIs.
            </p>
          </div>

          {/* GitHub profile button */}
          <a
            href="https://github.com/djstarz09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
          >
            <Github size={18} />
            GitHub Profile
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      {/* =========================
          FILTER BUTTONS
      ========================== */}
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "border-brand-400/40 bg-brand-500 text-white shadow-lg shadow-brand-500/20"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-brand-400/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* =========================
          PROJECT GRID
      ========================== */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {filteredProjects.map((project, index) => {
          const Icon = categoryIcons[project.category] || Code2;

          return (
            <motion.article
              layout
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:border-brand-400/30 hover:bg-white/[0.05]"
            >
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* =========================
                  PROJECT HEADER
              ========================== */}
              <div className="relative mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="ml-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-2 py-1 text-[10px] font-medium text-brand-300">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* GitHub icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
                >
                  <Github size={19} />
                </a>
              </div>

              {/* =========================
                  TITLE
              ========================== */}
              <h3 className="relative mb-3 text-xl font-bold text-white">
                {project.title}
              </h3>

              {/* =========================
                  DESCRIPTION
              ========================== */}
              <p className="relative mb-6 min-h-[72px] text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* =========================
                  TECHNOLOGIES
              ========================== */}
              <div className="relative mb-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-brand-400/30 hover:text-brand-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* =========================
                  PROJECT BUTTONS
              ========================== */}
              <div className="relative flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  <Github size={16} />
                  View Code
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-brand-300"
                >
                  Repository
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* =========================
          EMPTY STATE
      ========================== */}
      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
          <p className="text-slate-400">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* =========================
          GITHUB CTA
      ========================== */}
      <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:flex-row sm:text-left">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Want to see more?
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Explore my GitHub for source code, experiments, and
            additional projects.
          </p>
        </div>

        <a
          href="https://github.com/djstarz09"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          <Github size={18} />
          Explore GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}