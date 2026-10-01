import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comanda Menu",
  description: "Projeto acadêmico de atendimento por comandas com PHP e MySQL.",
};

export default function ComandaMenu() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
      <Link
        href="/projetos"
        className="text-sm text-zinc-500 hover:text-zinc-900"
      >
        ← Voltar para projetos
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-zinc-900">Comanda Menu</h1>

      <p className="mt-6 max-w-6xl text-lg text-zinc-700 text-justify">
        Comanda Menu é uma aplicação para apoiar o serviço por comandas em
        restaurantes. O projeto foi desenvolvido em grupo durante o curso
        Técnico em Desenvolvimento de Sistemas no SENAI Registro.
      </p>

      {/* Contexto, tecnologias e objetivo do projeto. */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Contexto
          </h2>
          <p className="mt-2 text-zinc-900">Projeto acadêmico em grupo — SENAI Registro</p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Tecnologias
          </h2>
          <p className="mt-2 text-zinc-900">PHP · MySQL</p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Objetivo
          </h2>
          <p className="mt-2 text-zinc-900">Organizar o atendimento por comandas em restaurantes.</p>
        </div>
      </div>

      <div className="mt-16 max-w-6xl">
        <h2 className="text-xl font-semibold text-zinc-900">Sobre o projeto</h2>
        <p className="mt-3 text-lg text-zinc-700 text-justify">
          A aplicação foi criada como projeto de conclusão do curso técnico,
          em equipe, usando PHP e MySQL. Eu fui o Desv Front-end.
        </p>
      </div>
    </section>
  );
}
