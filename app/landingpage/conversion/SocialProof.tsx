const avatarTones = [
  "from-slate-200 to-slate-300",
  "from-zinc-300 to-zinc-400",
  "from-neutral-300 to-neutral-400",
  "from-stone-300 to-stone-400",
];

type SocialProofProps = {
  className?: string;
};

export default function SocialProof({ className }: SocialProofProps) {
  return (
    <div
      className={[
        "flex items-center gap-3",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex -space-x-2.5">
        {avatarTones.map((tone, i) => (
          <span
            key={i}
            aria-hidden
            className={[
              "inline-block h-9 w-9 rounded-full bg-gradient-to-br ring-2 ring-white",
              tone,
            ].join(" ")}
          />
        ))}
      </div>
      <p className="text-xs font-medium text-slate-500 sm:text-sm">
        rated by 4.5k users globally
      </p>
    </div>
  );
}
