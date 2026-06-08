export default function InterviewBlueprintVisual() {
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
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[8px] font-mono font-semibold uppercase tracking-wider text-blue-700">
          STAR Framework
        </span>
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute left-2 top-2 flex w-[42%] flex-col gap-1 rounded-md bg-white p-2 shadow-sm ring-1 ring-slate-200">
          <span className="text-[7px] font-semibold uppercase tracking-wider text-slate-400">
            Job Description
          </span>
          <div className="h-1 w-full rounded-full bg-slate-200" />
          <div className="h-1 w-4/5 rounded-full bg-slate-200" />
          <div className="h-1 w-3/5 rounded-full bg-slate-200" />
        </div>

        <div className="absolute right-2 bottom-2 flex w-[42%] flex-col gap-1 rounded-md bg-white p-2 shadow-sm ring-1 ring-slate-200">
          <span className="text-[7px] font-semibold uppercase tracking-wider text-slate-400">
            Resume Project
          </span>
          <div className="h-1 w-full rounded-full bg-slate-200" />
          <div className="h-1 w-3/4 rounded-full bg-slate-200" />
          <div className="h-1 w-2/3 rounded-full bg-slate-200" />
        </div>

        <div className="relative z-10 flex h-14 w-20 flex-col items-center justify-center gap-1 rounded-lg bg-white p-2 text-center shadow-md ring-1 ring-blue-200">
          <span className="text-[7px] font-mono font-bold uppercase tracking-wider text-[#0B45BC]">
            Mapped
          </span>
          <span className="text-[8px] font-semibold leading-tight text-slate-700">
            Q → A
          </span>
        </div>

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="30"
            y1="32"
            x2="45"
            y2="50"
            stroke="#0B45BC"
            strokeWidth="0.6"
            strokeDasharray="1.5 1.5"
            opacity="0.6"
          />
          <line
            x1="70"
            y1="68"
            x2="55"
            y2="50"
            stroke="#0B45BC"
            strokeWidth="0.6"
            strokeDasharray="1.5 1.5"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        <div className="flex items-center gap-1.5 rounded-md bg-white p-1.5 ring-1 ring-slate-200">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="h-1 w-12 rounded-full bg-slate-200" />
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-white p-1.5 ring-1 ring-slate-200">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="h-1 w-10 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
