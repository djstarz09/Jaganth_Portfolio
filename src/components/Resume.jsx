import { Download, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container-custom">
        <SectionHeading
          eyebrow="05 / Resume"
          title="A quick recruiter-ready snapshot."
          description="Keep the PDF concise and focused on measurable projects, technical skills and relevant experience."
        />

        <Reveal>
          <div className="glass overflow-hidden rounded-3xl">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-800 p-5 sm:flex-row sm:items-center sm:px-7">
              <div>
                <p className="font-semibold text-white">
                  Jaganath — AI/ML Engineer Resume
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  TODO: Replace public/resume.pdf with your final resume.
                </p>
              </div>

              <div className="flex gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={16} />
                  Preview
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>

            <div className="h-[550px] bg-slate-950">
              <iframe
                src="/resume.pdf"
                title="Jaganath resume preview"
                className="h-full w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}