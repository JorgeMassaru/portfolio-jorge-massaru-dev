"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { translations, type Language } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.pt;
};

const pageTitles: Record<string, keyof typeof translations.pt.metadata> = {
  "/": "home",
  "/sobre": "about",
  "/experiencia": "experience",
  "/projetos": "projects",
  "/contato": "contact",
  "/projetos/ComandaMenu": "comanda",
  "/projetos/learny": "learny",
  "/projetos/pokedex": "pokedex",
  "/projetos/xadrez": "chess",
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title =
      translations[language].metadata[pageTitles[pathname] ?? "home"];
  }, [language, pathname]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }

  return context;
}
