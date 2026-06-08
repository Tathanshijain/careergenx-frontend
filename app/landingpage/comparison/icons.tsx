type IconProps = {
  className?: string;
};

export function RedXIcon({ className }: IconProps) {
  return (
    <span
      aria-hidden
      className={[
        "inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#F2B5B5] bg-white text-[#E5484D]",
        className ?? "",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="h-3.5 w-3.5"
      >
        <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
      </svg>
    </span>
  );
}

export function GreenCheckIcon({ className }: IconProps) {
  return (
    <span
      aria-hidden
      className={[
        "inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#B6E3C2] bg-white text-[#22A06B]",
        className ?? "",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
      >
        <path d="M3 8.5l3.2 3.2L13 5" />
      </svg>
    </span>
  );
}
