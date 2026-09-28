import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import assinaturaJorge from "./images/jorge-assinatura.png";
import jorgeFoto from "./images/jorge-foto.jpeg";
import "./css/home_css.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Home() {
  return (
    <section className={`${montserrat.className} home`}>
      {/* Assinatura decorativa */}
  
      {/* Texto */}
      <div className="sobre_div">
        <h1 className="titulo">Jorge Massaru</h1>
        <p className="subtitulo">
          Desenvolvedor Júnior, Designer e Back-end Developer
        </p>
      </div>

      {/* Pílula branca com foto + botão */}
      <div className="foto_pilula">
        <Image
          src={jorgeFoto}
          alt="Jorge Massaru na formatura"
          priority
          sizes="(min-width: 1024px) 30vw, 52vw"
          className="foto"
        />

        <Link href="/sobre" aria-label="Conheça mais sobre mim" className="botao_seta">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icone_seta"
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
