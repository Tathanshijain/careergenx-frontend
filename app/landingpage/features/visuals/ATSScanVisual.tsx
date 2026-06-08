export default function ATSScanVisual() {
  return (
    <div
      aria-hidden
      className="grid h-full grid-cols-2 gap-2 overflow-hidden rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200/70"
    >
      <div className="flex flex-col gap-2 rounded-lg bg-white p-3 ring-1 ring-slate-200/70">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          <span className="h-1.5 w-12 rounded-full bg-slate-300" />
        </div>
        <div className="mt-1 flex flex-col gap-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-slate-300" />
          <div className="h-1.5 w-2/3 rounded-full bg-slate-200" />
          <div className="h-1.5 w-1/2 rounded-full bg-slate-200" />
        </div>
        <div className="mt-2 h-px w-full bg-slate-200" />
        <div className="flex flex-col gap-1.5">
          <div className="h-1.5 w-1/3 rounded-full bg-slate-300" />
          <div className="h-1.5 w-11/12 rounded-full bg-slate-200" />
          <div className="h-1.5 w-10/12 rounded-full bg-slate-200" />
          <div className="h-1.5 w-9/12 rounded-full bg-slate-200" />
        </div>
        <div className="mt-2 h-px w-full bg-slate-200" />
        <div className="flex flex-col gap-1.5">
          <div className="h-1.5 w-1/4 rounded-full bg-slate-300" />
          <div className="h-1.5 w-5/6 rounded-full bg-slate-200" />
          <div className="h-1.5 w-4/6 rounded-full bg-slate-200" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 rounded-lg bg-slate-900 p-3 font-mono text-[8px] leading-relaxed text-slate-300">
        <div className="flex items-center justify-between text-slate-500">
          <span>telemetry.log</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            live
          </span>
        </div>
        <div className="h-px w-full bg-slate-700" />
        <p>
          <span className="text-slate-500">01</span>{" "}
          <span className="text-sky-300">scan</span>(layout)
        </p>
        <p className="rounded bg-amber-100/90 px-1 text-amber-900">
          <span className="text-amber-700/80">02</span> warn: density 0.42
        </p>
        <p>
          <span className="text-slate-500">03</span> ok: headers[5]
        </p>
        <p>
          <span className="text-slate-500">04</span> ok: links[12]
        </p>
        <p className="rounded bg-rose-100/90 px-1 text-rose-900">
          <span className="text-rose-700/80">05</span> err: font.fallback
        </p>
        <p>
          <span className="text-slate-500">06</span> ok: contact[3]
        </p>
        <p>
          <span className="text-slate-500">07</span> ok: dates.parse
        </p>
        <p className="rounded bg-amber-100/90 px-1 text-amber-900">
          <span className="text-amber-700/80">08</span> warn: kw.under
        </p>
      </div>
    </div>
  );
}
