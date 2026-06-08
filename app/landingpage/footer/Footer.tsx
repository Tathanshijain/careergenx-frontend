const featureLinks = [
  { label: "Profile Scaling", href: "#profile-scaling" },
  { label: "Interview Preparation", href: "#interview-preparation" },
  { label: "ATS Analysis", href: "#ats-analysis" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0056E2] pt-24 text-white sm:pt-28 lg:pt-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
          <div className="flex flex-col gap-5">
            <h3 className="text-sm font-bold tracking-wide sm:text-base">
              FEATURES
            </h3>
            <ul className="flex flex-col gap-2.5">
              {featureLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-wide text-white/70 transition-colors hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-8 sm:items-end">
            <a
              href="#contact"
              className="text-sm font-bold tracking-wide transition-colors hover:text-white/80 sm:text-base"
            >
              CONTACT
            </a>
            <a
              href="#pricing"
              className="text-sm font-bold tracking-wide transition-colors hover:text-white/80 sm:pb-2 sm:text-base"
            >
              PRICING
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 text-[11px] uppercase tracking-wide text-white/70 sm:mt-20 sm:flex-row sm:gap-6 sm:text-xs">
          <span>© 2026 CAREERGENIX · ALL RIGHTS RESERVED</span>
          <a
            href="#privacy"
            className="transition-colors hover:text-white"
          >
            PRIVACY POLICY
          </a>
          <a
            href="#terms"
            className="transition-colors hover:text-white"
          >
            TERMS OF SERVICE
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="relative mt-6 sm:mt-8"
      >
        <h2 className="select-none whitespace-nowrap text-center font-bold leading-[0.85] tracking-tight text-white text-[22vw] sm:text-[18vw]">
          <span className="block translate-y-[15%]">CareerGenix</span>
        </h2>
      </div>
    </footer>
  );
}
