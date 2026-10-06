"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageButton } from "../i18n/LanguageButton";

// Rotas exibidas no menu principal.
const links = [
  { href: "/sobre", label: "sobre" },
  { href: "/projetos", label: "projetos" },
  { href: "/experiencia", label: "experiencia" },
  { href: "/contato", label: "contato" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [hasScrolled, setHasScrolled] = useState(false);
  const isScrolled = pathname !== "/" && hasScrolled;

  useEffect(() => {
    if (pathname === "/") return;

    const updateScrollState = () => setHasScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-transparent transition-all duration-200 ${
        isScrolled ? "px-2 py-3 sm:px-4" : "px-3 py-4 sm:px-6 sm:py-5"
      }`}
    >
      {/* Div de fora: é ela que é "a pílula branca" — o padding aqui é a
          margem real entre a borda branca e o conteúdo de dentro. */}
      <div
        className={`mx-auto w-full max-w-full rounded-full bg-white shadow-sm transition-all duration-200 sm:w-fit ${
          isScrolled ? "p-1.5" : "p-2"
        }`}
      >
        {/* Div de dentro: só ela rola horizontalmente, sem padding próprio —
            assim o espaço da div de fora nunca é "comido" pelo scroll. */}
        <div className="flex min-w-0 items-center gap-1 rounded-full">
          <Link
            href="/"
            aria-label={t.nav.homeLabel}
            title={t.nav.homeLabel}
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
          <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto rounded-full [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-none">
            {links.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`shrink-0 rounded-full text-xs uppercase tracking-wide transition-all duration-200 ${
                    isScrolled
                      ? "px-2.5 py-1.5 sm:px-4"
                      : "px-3 py-2 sm:px-5"
                  } ${
                    active
                      ? "bg-[#0066ff] font-bold text-white"
                      : "font-normal text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {t.nav[link.label]}
                </Link>
              );
            })}
          </div>
          <LanguageButton />
        </div>
      </div>
    </nav>
  );
}