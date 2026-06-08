export default function MetricBento() {
  return (
    <div className="flex flex-col gap-5">
      <article className="flex flex-col gap-4 rounded-3xl bg-[#D8E5FF] p-7 sm:p-9">
        <p className="text-xs font-medium text-slate-700 sm:text-sm">
          ATS Parse Fidelity
        </p>
        <p className="text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
          77<span className="text-3xl font-medium text-slate-900 sm:text-4xl">%</span>
        </p>
        <p className="max-w-md text-[11px] leading-relaxed text-slate-600 sm:text-xs">
          Zero structural data loss across major parsing engines (Taleo,
          Workday, Greenhouse). Your layout remains structurally intact under
          machine scrutiny.
        </p>
      </article>

      <div className="grid grid-cols-2 gap-5">
        <article className="flex flex-col gap-3 rounded-3xl bg-[#D8E5FF] p-6 sm:p-7">
          <p className="text-xs font-medium text-slate-700 sm:text-sm">
            Application Tailoring
            <br /> Time
          </p>
          <p className="mt-auto text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            -45<span className="text-2xl font-medium sm:text-3xl">%</span>
          </p>
        </article>

        <article className="flex flex-col gap-3 rounded-3xl bg-[#D8E5FF] p-6 sm:p-7">
          <p className="text-xs font-medium text-slate-700 sm:text-sm">
            Interview callback
            <br /> rates
          </p>
          <p className="mt-auto text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
            3.4<span className="text-2xl font-medium sm:text-3xl">x</span>
          </p>
        </article>
      </div>
    </div>
  );
}
