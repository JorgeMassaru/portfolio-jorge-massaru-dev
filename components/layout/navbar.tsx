"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/experiencia", label: "Histórico" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const isScrolled = pathname !== "/" && hasScrolled;

  useEffect(() => {
    if (pathname === "/") return;

    const updateScrollState = () => setHasScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [pathname]);

  if (pathname === "/") return null;

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-transparent transition-all duration-200 ${
        isScrolled ? "px-4 py-3" : "px-6 py-5"
      }`}
    >
      <div
        className={`mx-auto flex w-fit max-w-full items-center gap-1 rounded-full bg-white shadow-sm transition-all duration-200 ${
          isScrolled ? "p-1.5" : "p-2"
        }`}
      >
        <Link
          href="/"
          aria-label="Página inicial"
          title="Página inicial"
          className={`flex shrink-0 items-center justify-center rounded-full bg-zinc-300 text-white transition-colors hover:bg-zinc-400 ${
            isScrolled ? "h-8 w-8" : "h-9 w-9"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v11h14V9" />
            <path d="M9 20v-6h6v6" />
          </svg>
        </Link>
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full text-xs uppercase tracking-wide transition-all duration-200 ${
                isScrolled ? "px-4 py-1.5" : "px-5 py-2"
              } ${
                active
                  ? "bg-[#0066ff] font-bold text-white"
                  : "font-normal text-zinc-400 hover:text-zinc-600"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
