"use client";

import { useModal } from "../modals/ModalContext";

export default function CTASection() {
  const { openUpload, openAuth } = useModal();

  return (
    <section
      id="get-started"
      className="bg-[#EBF1FA] px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-6 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-4">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B45BC]">
            Take Control
          </span>
          <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-[#0056E2]">Stop sending your resume to</span>
            <br />
            <span className="text-black">black box</span>
          </h2>
        </div>

        <p className="max-w-2xl text-pretty text-sm leading-relaxed text-[#2D3748] sm:text-base">
          Take control of both sides of the hiring table. Build a
          machine-readable resume, align it perfectly to your
          <br className="hidden sm:block" /> dream role, and step into the
          interview with absolute certainty.
        </p>

        <div className="mt-2 flex w-full flex-col items-center gap-4 sm:mt-4 sm:w-auto">
          <button
            type="button"
            onClick={openUpload}
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0056E2] px-10 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0046b8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056E2] sm:w-auto sm:px-12"
          >
            Scan your resume
          </button>
          <button
            type="button"
            onClick={openAuth}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#0056E2] bg-transparent px-10 text-sm font-semibold text-[#0056E2] transition-colors hover:bg-[#0056E2]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056E2] sm:w-auto sm:px-12"
          >
            Explore workspace
            <span aria-hidden className="-mr-0.5 text-base leading-none">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
