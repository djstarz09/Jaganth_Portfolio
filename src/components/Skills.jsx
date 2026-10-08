import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Server,
  Wrench
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./ui";

const groups = [
  {
    title: "Classical ML",
    icon: BrainCircuit,
    skills: [
      "Scikit-learn",
      "XGBoost",
      "CatBoost"
    ]
  },
  {
    title: "GenAI / RAG",
    icon: Database,
    skills: [
      "LangChain",
      "FAISS",
      "ChromaDB",
      "Sentence-Transformers"
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Flask",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub Actions",
      "n8n",
      "Power BI"
    ]
  },
  {
    title: "Languages",
    icon: Code2,
    skills: [
      "Python",
      "Java"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Tools I use to build."
          description="A focused stack spanning machine learning, GenAI, APIs and developer tooling."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass h-full rounded-2xl p-5"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon size={19} />
                  </div>

                  <h3 className="mb-4 font-bold text-white">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-chip"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/50 px-5 py-4 text-sm text-slate-400">
            <GitBranch
              size={17}
              className="text-brand-400"
            />
            Comfortable moving from experiment → API → deployable application.
          </div>
        </Reveal>
      </div>
    </section>
  );
}