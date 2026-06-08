import MetricBento from "./MetricBento";
import SocialProof from "./SocialProof";
import TestimonialSlider from "./TestimonialSlider";

export default function ConversionSection() {
  return (
    <section
      id="performance"
      className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-7">
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-[#0046C4] sm:text-4xl md:text-[44px]">
              Engineered for maximum
              <br className="hidden sm:block" /> interview conversion.
            </h2>

            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
              We treat your job hunt like an optimization problem. Here is how
              the system performs when clearing technical hurdles and human
              screening filters.
            </p>

            <div className="flex flex-col">
              <a
                href="#analyze"
                className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-[#0B45BC] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#09399c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B45BC]"
              >
                Analyze yor resume
                <span aria-hidden className="-mr-0.5 text-base leading-none">
                  →
                </span>
              </a>

              <div className="mt-auto pt-16 sm:pt-24 lg:pt-32">
                <SocialProof />
              </div>
            </div>
          </div>

          <div className="lg:pt-2">
            <MetricBento />
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10 sm:pt-12">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}
