const projects = [
  {
    title: "Learny",
    description:
      "App para ensinar crianças com TEA (Transtorno do Espectro Autista), desenvolvido em grupo (Kastle) na FATEC, com protótipos usáveis já produzidos.",
    stack: "",
    href: "/projetos/learny",
  },
  {
    title: "Carteira de Investimentos",
    description:
      "Aplicação fullstack em Rust para gestão de carteira: cadastro de ativos, autenticação de usuário e histórico de transações de compra e venda.",
    stack: "Rust · Axum · SQLx/PostgreSQL · Askama",
    href: "https://github.com/JorgeMassaru/rust-fullstack-carteira-investimentos",
  },
  {
    title: "Comanda Menu",
    description:
      "App de serviço de comanda para restaurantes, desenvolvido em grupo como TCC do técnico em Desenvolvimento de Software no SENAI.",
    stack: "PHP",
    href: "",
  },
  {
    title: "Convite de Formatura Interativo",
    description:
      "Convite web animado para cerimônia de colação de grau, com caixa de presente animada e cartão com efeito de flip 3D.",
    stack: "Kotlin · Ktor",
    href: "",
  },
];

export default function Projetos() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Projetos</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Conheça alguns dos projetos que desenvolvi ao longo da minha formação
        e experiência.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Card = (
            <div className="flex h-full flex-col rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-400">
              <h2 className="text-lg font-semibold text-zinc-900">
                {project.title}
              </h2>
              {project.stack && (
                <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                  {project.stack}
                </p>
              )}
              <p className="mt-3 flex-1 text-sm text-zinc-700">
                {project.description}
              </p>
            </div>
          );

          return project.href ? (
            <a key={project.title} href={project.href}>
              {Card}
            </a>
          ) : (
            <div key={project.title}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}