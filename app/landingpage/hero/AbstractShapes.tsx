export default function AbstractShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.12),transparent_45%)]" />

      <div className="absolute -left-6 top-[32%] h-48 w-32 rotate-[-12deg] rounded-[28px] bg-white/[0.08] shadow-[0_20px_50px_-15px_rgba(11,66,186,0.35)] backdrop-blur-2xl ring-1 ring-white/10 sm:-left-10 sm:top-[30%] sm:h-56 sm:w-40" />
      <div className="absolute -left-3 top-[50%] h-56 w-36 rotate-[-8deg] rounded-[30px] bg-white/[0.07] shadow-[0_25px_55px_-18px_rgba(11,66,186,0.3)] backdrop-blur-xl ring-1 ring-white/[0.08] sm:-left-6 sm:top-[48%] sm:h-64 sm:w-44" />
      <div className="absolute left-4 top-[68%] h-44 w-28 rotate-[-4deg] rounded-[24px] bg-white/[0.06] backdrop-blur-lg ring-1 ring-white/[0.06] sm:left-6 sm:top-[66%] sm:h-52 sm:w-36" />
      <div className="absolute left-8 top-[82%] h-36 w-24 rotate-[3deg] rounded-[20px] bg-white/[0.05] backdrop-blur-md ring-1 ring-white/[0.05] sm:left-12 sm:top-[80%] sm:h-44 sm:w-32" />

      <div className="absolute -right-6 top-[34%] h-52 w-34 rotate-[12deg] rounded-[28px] bg-white/[0.08] shadow-[0_20px_50px_-15px_rgba(11,66,186,0.35)] backdrop-blur-2xl ring-1 ring-white/10 sm:-right-10 sm:top-[32%] sm:h-60 sm:w-42" />
      <div className="absolute -right-3 top-[52%] h-52 w-36 rotate-[8deg] rounded-[30px] bg-white/[0.07] shadow-[0_25px_55px_-18px_rgba(11,66,186,0.3)] backdrop-blur-xl ring-1 ring-white/[0.08] sm:-right-6 sm:top-[50%] sm:h-60 sm:w-44" />
      <div className="absolute right-6 top-[70%] h-40 w-28 rotate-[4deg] rounded-[24px] bg-white/[0.06] backdrop-blur-lg ring-1 ring-white/[0.06] sm:right-8 sm:top-[68%] sm:h-48 sm:w-36" />
      <div className="absolute right-10 top-[84%] h-32 w-24 rotate-[-2deg] rounded-[20px] bg-white/[0.05] backdrop-blur-md ring-1 ring-white/[0.05] sm:right-14 sm:top-[82%] sm:h-40 sm:w-30" />
    </div>
  );
}
