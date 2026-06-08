import { type ReactNode } from "react";
import { GreenCheckIcon, RedXIcon } from "./icons";

type ColumnProps = {
  icon: "x" | "check";
  label: string;
  children: ReactNode;
};

function Column({ icon, label, children }: ColumnProps) {
  const Icon = icon === "x" ? RedXIcon : GreenCheckIcon;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <Icon />
        <span className="text-sm font-medium text-slate-500">{label}</span>
      </div>
      <p className="text-[15px] leading-relaxed text-slate-900 sm:text-base">
        {children}
      </p>
    </div>
  );
}

type ComparisonCardProps = {
  problem: string;
  solution: ReactNode;
};

export default function ComparisonCard({
  problem,
  solution,
}: ComparisonCardProps) {
  return (
    <article className="rounded-2xl bg-white p-7 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/5 sm:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <Column icon="x" label="Instead of">
          {problem}
        </Column>
        <Column icon="check" label="What we do">
          {solution}
        </Column>
      </div>
    </article>
  );
}
