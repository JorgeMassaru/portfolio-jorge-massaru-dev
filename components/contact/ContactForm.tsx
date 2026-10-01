"use client";

import { useState } from "react";

// Chave de integração usada pelo cliente Web3Forms para enviar o formulário.
const WEB3FORMS_ACCESS_KEY = "5b13f8d6-3c6a-4bf6-8372-2c869975761f";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result: { success?: boolean } = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Campo-armadilha usado pelo serviço para filtrar envios automatizados. */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="nome" className="block font-semibold text-zinc-900">
          Nome
        </label>
        <input
          id="nome"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 outline-none focus:border-[#0066ff]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-zinc-900">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
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

      {status !== "idle" && (
        <p
          aria-live="polite"
          role={status === "error" ? "alert" : "status"}
          className={`text-sm ${
            status === "error"
              ? "text-red-700"
              : status === "sent"
                ? "text-green-700"
                : "text-zinc-600"
          }`}
        >
          {status === "sending" && "Enviando mensagem..."}
          {status === "sent" &&
            "Mensagem enviada com sucesso! Obrigado pelo contato."}
          {status === "error" &&
            "Não foi possível enviar agora. Tente novamente em instantes."}
        </p>
      )}
    </form>
  );
}