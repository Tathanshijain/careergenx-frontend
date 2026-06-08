"use client";

import { useState } from "react";
import StarRating from "./StarRating";

type Testimonial = {
  author: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Gaurav Raj",
    role: "Senior Developer",
    quote:
      "I sent out 50 applications using my old portfolio resume and got zero responses. After putting it through the Split-Workspace, I realized the ATS parser was completely scrambling my layout. Fixed it, matched it to three roles, and booked two interviews within the same week.",
  },
  {
    author: "Priya Sharma",
    role: "Product Designer",
    quote:
      "The predictive flashcards were uncanny — every behavioral question in my loop was sourced from the exact intersection of my resume and the job description. I stopped rehearsing generic answers and started telling real stories.",
  },
  {
    author: "Marcus Lin",
    role: "Data Engineer",
    quote:
      "Once the ATS-View toggle showed me what the parser was actually reading, the rewrite basically wrote itself. I went from a 38% match score to a 92% in a single afternoon, and the recruiter volume followed.",
  },
];

function ChevronButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
        aria-hidden
      >
        {direction === "prev" ? (
          <path d="M12.5 4.5L7 10l5.5 5.5" />
        ) : (
          <path d="M7.5 4.5L13 10l-5.5 5.5" />
        )}
      </svg>
    </button>
  );
}

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const go = (delta: number) => {
    setIndex((prev) => (prev + delta + total) % total);
  };

  return (
    <figure className="flex w-full flex-col gap-5">
      <div className="flex items-start gap-3 sm:gap-4">
        <ChevronButton
          direction="prev"
          onClick={() => go(-1)}
          label="Previous testimonial"
        />

        <div className="flex flex-1 flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] sm:p-7">
          <figcaption className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 sm:text-lg">
                {current.author}
              </span>
              <span className="text-xs text-slate-500 sm:text-sm">
                -{current.role}
              </span>
            </div>
            <StarRating />
          </figcaption>

          <blockquote className="border-l-2 border-r-2 border-slate-200 px-4 text-base font-medium leading-relaxed text-slate-800 sm:px-6 sm:text-lg md:text-xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
        </div>

        <ChevronButton
          direction="next"
          onClick={() => go(1)}
          label="Next testimonial"
        />
      </div>

      <div
        className="flex items-center justify-center gap-1.5"
        role="tablist"
        aria-label="Testimonial pagination"
      >
        {testimonials.map((_, i) => (
          <span
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={[
              "h-1.5 w-1.5 rounded-full transition-colors",
              i === index ? "bg-[#0B45BC]" : "bg-slate-300",
            ].join(" ")}
          />
        ))}
      </div>
    </figure>
  );
}
