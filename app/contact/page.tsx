"use client";

import Navbar from "../landingpage/nav/Navbar";
import Footer from "../landingpage/footer/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="px-4 pt-4 pb-12 sm:px-6 sm:pt-6 sm:pb-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0B42BA] via-[#1648D8] to-[#2C74FA] px-6 py-20 text-center shadow-[0_60px_100px_-30px_rgba(7,29,89,0.55)] sm:rounded-[40px] sm:px-12 sm:py-28">
          <h1 className="text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Direct System Access.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            Have technical questions or custom enterprise requests? Message our
            core team.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0056E2] focus:ring-2 focus:ring-[#0056E2]/10"
            />
            <input
              type="email"
              placeholder="Professional Email"
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0056E2] focus:ring-2 focus:ring-[#0056E2]/10"
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0056E2] focus:ring-2 focus:ring-[#0056E2]/10"
            />
            <button
              type="submit"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-[#0056E2] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#0046b8]"
            >
              Transmit Message
              <span aria-hidden className="-mr-0.5 text-base leading-none">
                →
              </span>
            </button>
          </form>

          <div className="flex flex-col gap-8 rounded-[20px] bg-[#EBF1FA] p-8 lg:p-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              System Status
            </h2>
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Support Window
                </span>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  24/7 Global Coverage
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Response Latency
                </span>
                <p className="mt-1 text-sm font-medium text-slate-900">
                  &lt; 4 Hours
                </p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Enterprise Inquiries
                </span>
                <p className="mt-1 text-sm font-medium text-[#0056E2]">
                  enterprise@resumeos.tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
