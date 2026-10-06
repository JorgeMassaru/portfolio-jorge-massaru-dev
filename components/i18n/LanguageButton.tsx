"use client";

import { useLanguage } from "./LanguageContext";

export function LanguageButton() {
  const { language, setLanguage, t } = useLanguage();
  const isEnglish = language === "en";

  return (
    <button
      type="button"
      onClick={() => setLanguage(isEnglish ? "pt" : "en")}
      aria-label={
        isEnglish ? t.language.switchToPortuguese : t.language.switchToEnglish
      }
      aria-pressed={isEnglish}
      className="relative h-8 w-14 shrink-0 rounded-full bg-zinc-200 p-1 text-[0.6rem] font-bold transition-colors hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066ff]"
    >
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0066ff] text-white transition-transform duration-200 ${
          isEnglish ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isEnglish ? "EN" : "PT"}
      </span>
    </button>
  );
}
