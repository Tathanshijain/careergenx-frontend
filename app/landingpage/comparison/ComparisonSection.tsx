import ComparisonCard from "./ComparisonCard";

const cards = [
  {
    problem: "Guessing if an ATS can read your layout.",
    solution: (
      <>
        <span className="font-bold">ATS–View Toggle:</span> See exactly what
        the machine sees in plain, parsed text.
      </>
    ),
  },
  {
    problem: "Shuffling through 12 versions of your resume in Google Drive.",
    solution: (
      <>
        <span className="font-bold">Targeted Variants:</span> Keep your base
        resume pristine while tailoring specific branches to specific job
        descriptions.
      </>
    ),
  },
  {
    problem: "Memorizing generic internet interview questions.",
    solution: (
      <>
        <span className="font-bold">Predictive Interviewing:</span> Practice
        flashcards generated exclusively from the intersection of your
        experience and their job description.
      </>
    ),
  },
];

export default function ComparisonSection() {
  return (
    <section
      id="features"
      className="bg-slate-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 sm:gap-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B45BC]">
            Why It Fails
          </span>
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#0046C4] sm:text-4xl md:text-5xl">
            Why Traditional Resume
            <br className="hidden sm:block" /> Scanner Fails You
          </h2>
          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            Three quiet failure points of the current hiring pipeline — and
            exactly how we replace them.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 sm:gap-7">
          {cards.map((card) => (
            <ComparisonCard
              key={card.problem}
              problem={card.problem}
              solution={card.solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
