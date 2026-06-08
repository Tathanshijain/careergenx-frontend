import ATSScanVisual from "./visuals/ATSScanVisual";
import InterviewBlueprintVisual from "./visuals/InterviewBlueprintVisual";
import ProfileScalingVisual from "./visuals/ProfileScalingVisual";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Deep-Scan ATS Analysis",
    visual: <ATSScanVisual />,
    copy: "Stop sending your applications into an algorithmic black box. Our dual-layer scanner breaks down exactly how corporate parsing systems read your experience. It flags compliance gaps, structural layout anomalies, and keyword density issues before a human recruiter ever sees it.",
    pills: ["Compliance Audit", "Structural Layout Check", "Keyword Optimization"],
  },
  {
    title: "Predictive Interview Blueprint",
    visual: <InterviewBlueprintVisual />,
    copy: "Don't memorize generic internet question banks. Our machine learning engine evaluates your resume against your target job description to predict exactly where a technical interviewer will dig in. Practice hyper-personalized flashcards that teach you how to anchor your answers to your past wins.",
    pills: [
      "Contextual Flashcards",
      "STAR Framework Prompts",
      "JD Alignment Mapping",
    ],
  },
  {
    title: "Algorithmic Profile Scaling",
    visual: <ProfileScalingVisual />,
    copy: "Inbound recruitment is a search engine optimization problem. We cross-reference your optimized resume data with your public profile structure to rewrite your headline, summary, and experience fields. Force the platform's routing algorithm to push your profile into active recruiter sourcing feeds.",
    pills: [
      "Inbound SEO Overhaul",
      "Headline Restructuring",
      "Search Index Monitoring",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="capabilities"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 sm:gap-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B45BC]">
            The Engine
          </span>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#0046C4] sm:text-4xl md:text-5xl">
            Built for the way hiring actually works.
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            Three interlocking systems that turn your static resume into a
            living, machine-readable profile — and a candidate recruiters can
            route to.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              visual={feature.visual}
              copy={feature.copy}
              pills={feature.pills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
