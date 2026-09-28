"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/experiencia", label: "Histórico" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-5">
      <div className="mx-auto flex w-fit max-w-full items-center gap-1 rounded-full bg-white p-2 shadow-sm">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                active
                  ? "bg-[#0066ff] text-white"
                  : "text-zinc-400 hover:text-zinc-600"
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
