import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2
} from "lucide-react";
import { Reveal, SectionHeading, TiltCard } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="04 / Experience"
          title="Entrepreneurship counts too."
          description="Building a business alongside engineering has strengthened my ownership, communication and execution skills."
        />

        <Reveal>
          <TiltCard>
            <article className="glass overflow-hidden rounded-3xl">
              <div className="grid lg:grid-cols-[1.3fr_.7fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400">
                      <BriefcaseBusiness size={22} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        Pearls and Jewels
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Online Jewelry Business · Founder / Operator
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
                      <CheckCircle2
                        size={18}
                        className="text-brand-400"
                      />

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        Managed digital marketing, product
                        presentation and customer communication
                        to support online sales.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
                      <CheckCircle2
                        size={18}
                        className="text-brand-400"
                      />

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        Handled day-to-day operations, customer
                        requirements and the execution of orders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center border-t border-slate-800 bg-gradient-to-br from-blue-500/10 to-transparent p-7 lg:border-l lg:border-t-0 sm:p-9">
                  <div>
                    <p className="text-sm font-semibold text-slate-300">
                      Outside the IDE
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      Running a customer-facing business has
                      given me practical experience that
                      complements technical problem solving.
                    </p>

                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
                    >
                      Instagram
                      <ArrowUpRight size={15} />
                    </a>

                    <p className="mt-2 text-xs text-slate-600">
                      TODO: Replace with your Pearls and Jewels
                      Instagram URL.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}