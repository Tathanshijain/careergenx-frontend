import type { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  visual: ReactNode;
  copy: string;
  pills: string[];
};

export default function FeatureCard({
  title,
  visual,
  copy,
  pills,
}: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col justify-between gap-6 rounded-[20px] border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] sm:p-7">
      <div className="flex flex-col gap-5">
        <h3 className="text-[19px] font-semibold leading-snug text-slate-900 sm:text-xl">
          {title}
        </h3>

        <div className="aspect-[5/3] w-full">{visual}</div>

        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {copy}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2 pt-1">
        {pills.map((pill) => (
          <li
            key={pill}
            className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600 ring-1 ring-slate-200/70"
          >
            {pill}
          </li>
        ))}
      </ul>
    </article>
  );
}
