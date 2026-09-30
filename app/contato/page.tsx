"use client";

import { useState } from "react";
import { PageHeaderBlue } from "../../components/ui/PageHeaderBlue"

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
    value: "jorge.hashiguchi2005@gmail.com",
    href: "mailto:jorge.hashiguchi2005@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jorge-hashiguchi",
    href: "https://www.linkedin.com/in/jorge-hashiguchi/",
  },
  {
    label: "Telefone",
    value: "+55 (13) 99682-8069",
    href: "tel:+5513996828069",
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
    <section className="bg-[#0066ff] px-6 pb-24 pt-32 text-white">
       <PageHeaderBlue
        title="Contato"
        description="Entre em contato comigo — respondo o quanto antes."
      />

      {/* Cartão branco com um recorte azul-escuro por trás, dando profundidade */}
      <div className="relative mx-auto mt-16 max-w-6xl">
        <div className="absolute -bottom-6 -right-4 -top-6 left-4 -z-10 rounded-3xl bg-[#0052cc] sm:-right-6 sm:left-6" />

        <div className="rounded-3xl bg-white p-8 text-zinc-900 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Campo-armadilha anti-spam: invisível para pessoas, mas bots costumam preencher */}
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
                  className="block font-semibold text-zinc-900"
                >
                  Nome
                </label>
                <input
                  id="nome"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-[#0066ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-zinc-900"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-[#0066ff]"
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block font-semibold text-zinc-900"
                >
                  Conteúdo
                </label>
                <textarea
                  id="mensagem"
                  name="message"
                  rows={6}
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-[#0066ff]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-fit rounded-full bg-[#0066ff] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0052cc] disabled:cursor-not-allowed disabled:opacity-60"
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
                  className="rounded-xl border border-zinc-200 px-6 py-4 shadow-sm transition-colors hover:border-[#0066ff]"
                >
                  <p className="font-semibold text-zinc-900">{link.label}</p>
                  <p className="mt-1 text-sm text-zinc-500">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
