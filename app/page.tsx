"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import jorgeFoto from "./images/jorge-foto.jpeg";
import { useLanguage } from "../components/i18n/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Home() {
  const { t } = useLanguage();

  return (
    // Página inicial: apresentação e chamada para a página Sobre.
    <section
      className={`${montserrat.className} relative flex min-h-[calc(100svh-3.9rem)] flex-col justify-center gap-10 overflow-hidden bg-[#0066ff] pb-16 pt-28 text-white sm:pt-32 lg:flex-row lg:items-center lg:gap-0 lg:px-[3vw] lg:pb-0 lg:pt-24`}
    >
      {/* Identidade e área de atuação. */}
      <div className="relative z-10 px-6 lg:flex-1 lg:pl-[5vw] lg:pr-0">
        <h1 className="text-[length:clamp(1.5rem,2vw,3rem)] font-bold uppercase leading-tight">
          {t.home.title}
        </h1>
        <p className="mt-2 w-full min-w-0 text-[length:clamp(0.9rem,1.15vw,1.4rem)] font-medium uppercase leading-snug">
          {t.home.subtitle}
        </p>
      </div>

      {/* Retrato e acesso direto à apresentação completa. */}
      <div className="relative z-10 ml-3 flex items-center gap-2 rounded-l-full bg-white py-2 pl-2 pr-2 after:absolute after:bottom-0 after:left-full after:top-0 after:w-0 after:bg-white after:content-[''] sm:ml-5 sm:gap-3 sm:py-3 sm:pl-3 sm:pr-3 lg:ml-auto lg:gap-[4.5vw] lg:py-[2.25vw] lg:pl-[2.5vw] lg:pr-[4vw] lg:after:w-[3vw]">
        <Image
          src={jorgeFoto}
          alt={t.home.imageAlt}
          priority
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 38vw"
          className="pointer-events-none aspect-square w-[38vw] shrink-0 rounded-full object-cover shadow-[0_0_8px_rgba(0,0,0,0.3)] ring-2 ring-zinc-300 sm:w-[44vw] lg:w-[24vw]"
        />

        <Link
          href="/sobre"
          aria-label={t.home.aboutLabel}
          className="flex aspect-square w-[12vw] shrink-0 items-center justify-center rounded-full bg-[#0066ff] text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066ff] sm:w-[14vw] lg:w-[6.5vw]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[60%]"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}