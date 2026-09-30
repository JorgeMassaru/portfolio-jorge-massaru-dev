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
    <section
      className={`${montserrat.className} relative flex min-h-[calc(100svh-3.9rem)] flex-col justify-center gap-10 overflow-hidden bg-[#0066ff] pb-16 pt-[44vw] text-white lg:flex-row lg:items-center lg:gap-0 lg:py-0`}
    >

      {/* Texto */}
      <div className="relative z-10 px-6 lg:flex-1 lg:pl-[9vw] lg:pr-0">
        <h1 className="text-[length:clamp(1.75rem,2.3vw,3.5rem)] font-bold uppercase leading-tight">
          Jorge Massaru
        </h1>
        <p className="mt-3 max-w-[28rem] text-[length:clamp(1rem,1.35vw,1.75rem)] font-medium uppercase leading-snug lg:max-w-[28vw]">
          Desenvolvedor Júnior, Designer e Back-end Developer
        </p>
      </div>

      {/* Pílula branca com foto + botão */}
      <div className="relative z-10 ml-6 flex items-center gap-4 rounded-l-full bg-white py-4 pl-4 pr-4 lg:ml-auto lg:gap-[6vw] lg:py-[3vw] lg:pl-[3.4vw] lg:pr-[5.3vw]">
        <Image
          src={jorgeFoto}
          alt="Jorge Massaru na formatura"
          priority
          sizes="(min-width: 1024px) 30vw, 52vw"
          className="pointer-events-none aspect-square w-[52vw] shrink-0 rounded-full object-cover shadow-[0_0_8px_rgba(0,0,0,0.3)] ring-2 ring-zinc-300 lg:w-[30vw]"
        />

        <Link
          href="/sobre"
          aria-label="Conheça mais sobre mim"
          className="flex aspect-square w-[16vw] shrink-0 items-center justify-center rounded-full bg-[#0066ff] text-white transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066ff] lg:w-[7.8vw]"
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
