import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import jorgeFoto from "./images/jorge-foto.jpeg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Home() {
  return (
    // Página inicial: apresentação e chamada para a página Sobre.
    <section
      className={`${montserrat.className} relative flex min-h-[calc(100svh-3.9rem)] flex-col justify-center gap-10 overflow-hidden bg-[#0066ff] py-16 text-white lg:flex-row lg:items-center lg:gap-0 lg:py-0`}
    >
      {/* Identidade e área de atuação. */}
      <div className="relative z-10 px-6 lg:flex-1 lg:pl-[9vw] lg:pr-0">
        <h1 className="text-[length:clamp(1.75rem,2.3vw,3.5rem)] font-bold uppercase leading-tight">
          Jorge Massaru
        </h1>
        <p className="mt-3 max-w-[28rem] text-[length:clamp(1rem,1.35vw,1.75rem)] font-medium uppercase leading-snug lg:max-w-[28vw]">
          Desenvolvedor de Software · Foco em Back-end
        </p>
      </div>

      {/* Retrato e acesso direto à apresentação completa. */}
      <div className="relative z-10 ml-4 flex items-center gap-3 rounded-l-full bg-white py-3 pl-3 pr-3 sm:ml-6 sm:gap-4 sm:py-4 sm:pl-4 sm:pr-4 lg:ml-auto lg:gap-[6vw] lg:py-[3vw] lg:pl-[3.4vw] lg:pr-[5.3vw]">
        <Image
          src={jorgeFoto}
          alt="Jorge Massaru na formatura"
          priority
          sizes="(min-width: 1024px) 30vw, 52vw"
          className="pointer-events-none aspect-square w-[45vw] shrink-0 rounded-full object-cover shadow-[0_0_8px_rgba(0,0,0,0.3)] ring-2 ring-zinc-300 sm:w-[52vw] lg:w-[30vw]"
        />

        <Link
          href="/sobre"
          aria-label="Conheça mais sobre mim"
          className="flex aspect-square w-[14vw] shrink-0 items-center justify-center rounded-full bg-[#0066ff] text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066ff] sm:w-[16vw] lg:w-[7.8vw]"
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