"use client";

import { useLanguage } from "../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-auto w-full border-t border-zinc-200 bg-zinc-950 text-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm">
        <p>© {new Date().getFullYear()} Jorge Massaru</p>
        <p>{t.footer.role}</p>
      </div>
    </footer>
  );
}
