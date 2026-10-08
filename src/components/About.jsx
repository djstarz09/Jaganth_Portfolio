import {
  GraduationCap,
  MapPin,
  Sparkles
} from "lucide-react";
import { Reveal, SectionHeading, TiltCard } from "./ui";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="01 / About"
          title="Engineer mindset. Builder energy."
          description="A fresher profile designed around shipping useful AI products, learning quickly and solving real problems."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass h-full rounded-3xl p-7 sm:p-9">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400">
                <Sparkles size={23} />
              </div>

              <p className="text-lg leading-8 text-slate-300">
                I'm Jaganath, B.Tech CSE graduate
                specializing in AI & ML at the Institute of
                Aeronautical Engineering, Hyderabad.
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                I enjoy turning ML concepts into usable
                applications, especially around Generative AI,
                RAG, APIs and deployment. Alongside engineering,
                I also run an online jewelry business, which has
                taught me customer communication, marketing and
                ownership.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open to work
                </span>

                <span className="text-sm text-slate-500">
                  Hyderabad · Bengaluru · Chennai · Pune
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal
            className="lg:col-span-2"
            delay={0.1}
          >
            <TiltCard className="h-full">
              <div className="glass h-full rounded-3xl p-7">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <GraduationCap size={22} />
                  </div>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    2022 — 2026
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  B.Tech CSE — AI & ML
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Institute of Aeronautical Engineering
                  <br />
                  Hyderabad, Telangana
                </p>

                <div className="mt-8 border-t border-slate-800 pt-6">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Current CGPA
                  </p>

                  <p className="mt-1 text-4xl font-extrabold text-white">
                    8.18
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} />
                  Hyderabad, India
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}