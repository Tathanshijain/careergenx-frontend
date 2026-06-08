"use client";

import AbstractShapes from "./AbstractShapes";
import FileDropzone from "./FileDropzone";
import { useModal } from "../modals/ModalContext";

export default function Hero() {
  const { openUpload } = useModal();

  return (
    <section className="px-4 pt-4 pb-32 sm:px-6 sm:pt-6 sm:pb-40 lg:px-8">
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center overflow-visible rounded-[32px] bg-gradient-to-b from-[#0B42BA] via-[#1648D8] to-[#2C74FA] shadow-[0_60px_100px_-30px_rgba(7,29,89,0.55)] sm:rounded-[40px]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
          <AbstractShapes />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center px-6 pt-12 text-center sm:px-12 sm:pt-16 lg:pt-20">
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
            Fix your resume in real-time .
          </h1>

          <p className="mt-6 max-w-[65%] text-pretty text-base leading-[1.8] text-white/80 sm:text-lg md:text-xl">
            A unified, AI-powered workspace that bridges the gap between how an
            ATS reads your resume, how a hiring manager scores your profile, and
            how you perform in the room.
          </p>

          <button
            type="button"
            onClick={openUpload}
            className="mt-10 inline-flex h-13 items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-[#0B45BC] shadow-[0_10px_30px_-10px_rgba(7,29,89,0.5)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(7,29,89,0.6)] sm:text-base"
          >
            Analyze Your Resume
            <span aria-hidden className="-mr-0.5 text-lg leading-none">
              →
            </span>
          </button>

          <div className="mt-52 sm:mt-64" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex translate-y-[40%] justify-center px-4 sm:px-12">
          <div className="pointer-events-auto w-full max-w-4xl">
            <FileDropzone />
          </div>
        </div>
      </div>
    </section>
  );
}
