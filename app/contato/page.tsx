"use client";

import { useState } from "react";

// Pegue sua chave gratuita em https://web3forms.com (só precisa confirmar o e-mail)
const WEB3FORMS_ACCESS_KEY = "5b13f8d6-3c6a-4bf6-8372-2c869975761f"; // TODO: substituir

const links = [
  {
    label: "GitHub",
    value: "github.com/JorgeMassaru",
    href: "https://github.com/JorgeMassaru",
  },
  {
    label: "E-mail",
    value: "jorge.hashiguchi2005@gmail.com", // TODO: trocar pelo seu e-mail real
    href: "mailto:jorge.hashiguchi2005@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jorge-hashiguchi", // TODO: trocar pelo seu LinkedIn real
    href: "https://linkedin.com/in/jorge-hashiguchi",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contato() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Contato</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Entre em contato comigo — respondo o quanto antes.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Campo-armadilha anti-spam: fica invisível para pessoas, mas bots costumam preencher */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-zinc-700"
            >
              Nome
            </label>
            <input
              id="nome"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-zinc-700"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 outline-none focus:border-zinc-900"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 w-fit rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-700">
              Mensagem enviada com sucesso! Obrigado pelo contato.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-700">
              Não foi possível enviar agora. Tente novamente em instantes.
            </p>
          )}
        </form>

        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-400"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
                {link.label}
              </p>
              <p className="mt-1 text-zinc-900">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}