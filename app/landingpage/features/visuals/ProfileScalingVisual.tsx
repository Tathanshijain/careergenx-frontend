const checklist = [
  { label: "Headline", top: "12%", left: "55%" },
  { label: "About", top: "38%", left: "55%" },
  { label: "Experience", top: "70%", left: "55%" },
];

export default function ProfileScalingVisual() {
  return (
    <div
      aria-hidden
      className="relative flex h-full flex-col gap-3 overflow-hidden rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200/70"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
        </div>
        <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[8px] font-mono font-semibold uppercase tracking-wider text-slate-600">
          profile.li
        </span>
      </div>

      <div className="relative flex-1 rounded-lg bg-white p-3 ring-1 ring-slate-200">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 flex-none rounded-full bg-gradient-to-br from-slate-300 to-slate-400 ring-1 ring-slate-300" />
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-1.5 w-2/3 rounded-full bg-slate-300" />
            <div className="h-1 w-1/2 rounded-full bg-slate-200" />
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1.5">
          <div className="h-1.5 w-1/3 rounded-full bg-slate-300" />
          <div className="h-1 w-full rounded-full bg-slate-200" />
          <div className="h-1 w-11/12 rounded-full bg-slate-200" />
        </div>

        <div className="mt-3 h-px w-full bg-slate-200" />

        <div className="mt-3 flex flex-col gap-1.5">
          <div className="h-1.5 w-1/4 rounded-full bg-slate-300" />
          <div className="h-1 w-5/6 rounded-full bg-slate-200" />
          <div className="h-1 w-4/6 rounded-full bg-slate-200" />
          <div className="h-1 w-3/6 rounded-full bg-slate-200" />
        </div>

        {checklist.map((item) => (
          <div
            key={item.label}
            className="absolute z-10 flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-semibold text-emerald-700 ring-1 ring-emerald-200 shadow-sm"
            style={{ top: item.top, left: item.left }}
          >
            <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 text-white">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-2 w-2"
                aria-hidden
              >
                <path d="M3 8.5l3.2 3.2L13 5" />
              </svg>
            </span>
            {item.label}
          </div>
        ))}

        <div className="pointer-events-none absolute inset-y-2 right-2 w-px bg-gradient-to-b from-emerald-200 via-emerald-200 to-transparent" />
      </div>
    </div>
  );
}
