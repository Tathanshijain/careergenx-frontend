"use client";

import Navbar from "../landingpage/nav/Navbar";
import Footer from "../landingpage/footer/Footer";
import ATSScanVisual from "../landingpage/features/visuals/ATSScanVisual";
import InterviewBlueprintVisual from "../landingpage/features/visuals/InterviewBlueprintVisual";
import ProfileScalingVisual from "../landingpage/features/visuals/ProfileScalingVisual";

const features = [
  {
    engine: "[ ENGINE: PARSER_LOGIC_V2 ]",
    title: "Deep-Scan ATS Analysis",
    description:
      "Stop guessing what a corporate parser sees. Our dual-layer scanner decomposes your resume exactly as Taleo, Workday, and Greenhouse read it — flagging structural anomalies, compliance gaps, and keyword density issues in real time.",
    bullets: [
      "Dual-layer parsing analysis that mirrors enterprise ATS behavior",
      "Structural compliance audits for layout, section ordering, and font consistency",
      "Keyword density profiling against the exact job description you are targeting",
    ],
    visual: <ATSScanVisual />,
  },
  {
    engine: "[ ENGINE: ML_MATCH_MATRIX ]",
    title: "Predictive Interview Blueprint",
    description:
      "Generic question banks waste your time. Our ML engine cross-references your resume against the target job description to predict exactly where a technical interviewer will probe — then builds hyper-personalized flashcards anchored to your real wins.",
    bullets: [
      "Contextual predictive flashcards generated from the JD-to-resume intersection",
      "STAR framework behavioral prompts tied to specific bullet points in your experience",
      "Real-time target matching that updates as you revise your resume",
    ],
    visual: <InterviewBlueprintVisual />,
  },
  {
    engine: "[ ENGINE: SEARCH_VELOCITY ]",
    title: "Algorithmic Profile Scaling",
    description:
      "Recruiting is a search-engine problem. We cross-reference your optimized resume data with your public profile to rewrite your headline, summary, and experience fields — forcing the platform's routing algorithm to push you into active sourcing feeds.",
    bullets: [
      "Inbound SEO restructuring for LinkedIn, Indeed, and Google Jobs",
      "Recruiter feed push that surfaces your profile in active candidate pipelines",
      "Metric index tracking so you can see your visibility score climb in real time",
    ],
    visual: <ProfileScalingVisual />,
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0B42BA] via-[#1648D8] to-[#2C74FA] px-6 py-20 text-center shadow-[0_60px_100px_-30px_rgba(7,29,89,0.55)] sm:rounded-[40px] sm:px-12 sm:py-28">
          <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Architected for Algorithmic Victory.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Deep-dive telemetry tools designed to bypass corporate filtering
            engines and capture human attention.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-20 sm:gap-24">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={[
                "flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16",
                i % 2 === 1 ? "lg:flex-row-reverse" : "",
              ].join(" ")}
            >
              <div className="flex flex-1 flex-col gap-5">
                <div>
                  <span className="font-mono text-[11px] font-medium tracking-wider text-[#0B45BC]">
                    {f.engine}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {f.title}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  {f.description}
                </p>
                <ul className="flex flex-col gap-3">
                  {f.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#0056E2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 h-4 w-4 flex-none"
                        aria-hidden
                      >
                        <path d="M3 8.5l3.2 3.2L13 5" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex-1">
                <div className="aspect-[5/3] w-full overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200/70">
                  {f.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
