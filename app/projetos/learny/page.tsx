import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learny",
  description: "Conheça o projeto Learny e minha participação no grupo Kastle.",
};

export default function Learny() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
      <Link
        href="/projetos"
        className="text-sm text-zinc-500 hover:text-zinc-900"
      >
        ← Voltar para projetos
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-zinc-900">Learny</h1>

      <p className="mt-6 max-w-6xl text-lg text-zinc-700 text-justify">
        Learny é um aplicativo pensado para ensinar crianças com TEA
        (Transtorno do Espectro Autista), desenvolvido em grupo — o Kastle —
        durante os semestres na FATEC. O projeto conta com protótipos usáveis
        em diferentes linguagens de programação, desenvolvidos com atenção à
        acessibilidade e à arquitetura de software.
      </p>

      {/* Resumo do time, da contribuição e do estado do projeto. */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Time
          </h2>
          <p className="mt-2 text-zinc-900">Grupo Kastle — FATEC</p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Meu papel
          </h2>
          <p className="mt-2 text-zinc-900">
            Liderança de Projeto e Design UX/UI
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Status
          </h2>
          <p className="mt-2 text-zinc-900">Protótipos usáveis</p>
        </div>
           <div className="rounded-lg border border-zinc-200 p-6">
             <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Link do projeto
          </h2>
          <a href="https://github.com/JorgeMassaru/learny-mobile" className="mt-2 text-zinc-900" target="_blank" rel="noopener noreferrer">
            <p>github.com/JorgeMassaru/learny-mobile</p>
          </a>
        </div>
      </div>
      

      {/* Evolução do projeto ao longo dos semestres. */}
      <div className="mt-16 max-w-6xl">
        <h2 className="text-xl font-semibold text-zinc-900">O processo</h2>
        <p className="mt-3 text-lg text-zinc-700 text-justify">
          Ao longo de 6 semestres, o Learny evoluiu de um simples idéia até um material usável como nosso projeto de TCC — com paleta de cores, tipografia e
          componentes pensados para acolher o público infantil com TEA.
        </p>
      </div>
    </section>
  );
}
