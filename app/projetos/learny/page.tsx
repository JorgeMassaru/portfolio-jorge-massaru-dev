import Link from "next/link";

export default function Learny() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <Link
        href="/projetos"
        className="text-sm text-zinc-500 hover:text-zinc-900"
      >
        ← Voltar para projetos
      </Link>

      <h1 className="mt-4 text-4xl font-bold text-zinc-900">Learny</h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-700">
        Learny é um aplicativo pensado para ensinar crianças com TEA
        (Transtorno do Espectro Autista), desenvolvido em grupo — o Kastle —
        durante os ciclos de Laboratório de Práticas na FATEC. O projeto já
        conta com protótipos usáveis, construídos com bastante atenção ao
        design da experiência.
      </p>

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
            Liderança de UX/UI e Design System
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-6">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
            Status
          </h2>
          <p className="mt-2 text-zinc-900">Protótipos usáveis</p>
        </div>
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-xl font-semibold text-zinc-900">O processo</h2>
        <p className="mt-3 text-lg text-zinc-700">
          Ao longo de três ciclos de Laboratório de Práticas, o design do
          Learny evoluiu de referências visuais e manual de marca até um
          Design System completo — com paleta de cores, tipografia e
          componentes pensados para acolher o público infantil com TEA.
        </p>
      </div>
    </section>
  );
}
