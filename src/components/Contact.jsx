import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Send
} from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeading } from "./ui";

export default function Contact({ showToast }) {
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);

    /*
      TODO:
      Connect this form to Formspree, Resend, EmailJS,
      your own API, or another form provider.

      For now this simulates a successful submission.
    */

    await new Promise((resolve) =>
      setTimeout(resolve, 900)
    );

    setLoading(false);
    event.target.reset();

    showToast(
      "Thanks! Your message has been received."
    );
  };

  return (
    <section id="contact" className="section pb-28">
      <div className="container-custom">
        <SectionHeading
          eyebrow="06 / Contact"
          title="Let's build something useful."
          description="Looking for an entry-level AI/ML opportunity where I can contribute, learn quickly and ship real systems."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="glass h-full rounded-3xl p-7 sm:p-9">
              <h3 className="text-xl font-bold text-white">
                Get in touch
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Hyderabad preferred. Also open to opportunities
                in Bengaluru, Chennai and Pune.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href="mailto:jaganathdakkata514@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4 text-sm text-slate-300 transition hover:border-brand-500/40 hover:text-brand-300"
                >
                  <Mail size={18} />
                  TODO: jaganathdakkata514@gmail.com
                </a>

                <a
                  href="tel:+91 9492635852"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4 text-sm text-slate-300 transition hover:border-brand-500/40 hover:text-brand-300"
                >
                  <Phone size={18} />
                  TODO: +91 9492635852
                </a>

                <a
                  href="https://www.linkedin.com/in/dakkata-jaganath"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4 text-sm text-slate-300 transition hover:border-brand-500/40 hover:text-brand-300"
                >
                  <Linkedin size={18} />
                  TODO: LinkedIn profile
                </a>

                <a
                  href="https://github.com/djstarz09"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-800 p-4 text-sm text-slate-300 transition hover:border-brand-500/40 hover:text-brand-300"
                >
                  <Github size={18} />
                  TODO: GitHub profile
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              className="glass rounded-3xl p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </span>

                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-brand-500"
                  />
                </label>

                <label>
                  <span className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </span>

                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-brand-500"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </span>

                <textarea
                  required
                  name="message"
                  rows="7"
                  placeholder="Tell me about the opportunity..."
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-brand-500"
                />
              </label>

              <button
                disabled={loading}
                className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}