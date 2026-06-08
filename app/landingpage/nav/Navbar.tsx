"use client";

import Link from "next/link";
import Image from "next/image";
import { useModal } from "../modals/ModalContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { openAuth } = useModal();

  return (
    <header className="w-full bg-white">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center px-6 sm:h-20 sm:px-10"
      >
        <Link
          href="/"
          className="flex flex-1 items-center gap-2.5 text-slate-900"
          aria-label="CareerGenix home"
        >
          <Image
            src="/logo.png"
            alt="CareerGenix logo"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover"
            priority
          />
          <span className="text-xl font-semibold tracking-tight">
            Career<span className="font-bold">Genix</span>
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-9 md:flex md:flex-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end">
          <button
            type="button"
            onClick={openAuth}
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#0B45BC] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#09399c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B45BC]"
          >
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
}
