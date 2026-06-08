"use client";

import Navbar from "../landingpage/nav/Navbar";
import Footer from "../landingpage/footer/Footer";
import { useModal } from "../landingpage/modals/ModalContext";

const tiers = [
  {
    name: "Core",
    price: "$0",
    period: "/ Free Forever",
    features: [
      "Basic ATS compliance audit",
      "Single active resume branch",
      "Standard text parser visualization",
    ],
    cta: "Launch Workspace",
    highlighted: false,
  },
  {
    name: "Velocity Pro",
    badge: "Recommended",
    price: "$19",
    period: "/ Month",
    features: [
      "Unlimited resume tailored variants",
      "Predictive Interview Blueprint (ML Flashcards)",
      "LinkedIn profile SEO overhaul",
      "Real-time index monitoring",
    ],
    cta: "Unlock Full Engine",
    highlighted: true,
  },
];

export default function PricingPage() {
  const { openAuth } = useModal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0B42BA] via-[#1648D8] to-[#2C74FA] px-6 py-20 text-center shadow-[0_60px_100px_-30px_rgba(7,29,89,0.55)] sm:rounded-[40px] sm:px-12 sm:py-28">
          <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Invest in Your Career Velocity .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Transparent, high-performance tiers built for continuous
            optimization. No hidden logic.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                "relative flex flex-col gap-6 rounded-[20px] border p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]",
                tier.highlighted
                  ? "border-[#0056E2] ring-2 ring-[#0056E2]/10"
                  : "border-slate-200",
              ].join(" ")}
            >
              {tier.badge ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[#0056E2] px-3 py-1 text-xs font-semibold text-white">
                  {tier.badge}
                </span>
              ) : null}

              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {tier.name}
                </h2>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate-500">{tier.period}</span>
                </div>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#0056E2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 h-4 w-4 flex-none"
                      aria-hidden
                    >
                      <path d="M3 8.5l3.2 3.2L13 5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={openAuth}
                className={[
                  "mt-auto inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors",
                  tier.highlighted
                    ? "bg-[#0056E2] text-white hover:bg-[#0046b8]"
                    : "border border-[#0056E2] bg-transparent text-[#0056E2] hover:bg-[#0056E2]/5",
                ].join(" ")}
              >
                {tier.cta}
              </button>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
