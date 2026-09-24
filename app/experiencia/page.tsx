const timeline = [
  {
    period: "Univesp",
    title: "Engenharia de Computação",
    description: "Formação em andamento, em paralelo à atuação profissional.",
  },
  {
    period: "FATEC Registro",
    title: "Desenvolvimento de Software Multiplataforma (DSM)",
    description:
      "Formação concluída em julho de 2026, com passagem por front-end, back-end, cloud e engenharia de software.",
  },
  {
    period: "Compass UOL",
    title: "Estágio — Projeto de Bolsas",
    description:
      "Programei bastante com Java e Spring Boot durante a FATEC, ganhando prática real de back-end em um ambiente profissional.",
  },
  {
    period: "LP 25/2",
    title: "Líder de Design",
    description:
      "Responsável pela criação e manutenção do Design System do projeto: paleta de cores, tipografia, componentes e padrões visuais para toda a equipe. Entregável: Design System completo.",
  },
  {
    period: "LP 25/1",
    title: "Designer do CMS",
    description:
      "Responsável pelo design completo da interface do módulo CMS, garantindo consistência visual e boa experiência de uso. Entregável: Interface CMS.",
  },
  {
    period: "LP 24/2",
    title: "Designer da Tribo Principal",
    description:
      "Responsável pela conceituação visual principal do projeto. Criei o manual da marca e produzi referências para orientar os demais designers da equipe. Entregável: Manual de Marca e Diretrizes Visuais.",
  },
  {
    period: "Cursos extras",
    title: "Cloud e Front-end",
    description:
      "Implementação de Serviços em Nuvem (Google Cloud Foundation) no SENAI, atividade prática de VPC na AWS (Cloud Computing II), Desenvolvimento Front-end no SENAI e na FATEC, e o Bootcamp Santander de Rust e IA.",
  },
  {
    period: "SENAI Registro",
    title: "Técnico em Desenvolvimento de Software",
    description:
      'TCC em grupo: "Comanda Menu", um app de serviço de comanda para restaurantes, desenvolvido em PHP.',
  },
];

export default function Experiencia() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Experiência</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Minha trajetória acadêmica e profissional: do técnico em
        Desenvolvimento de Software no SENAI à formação em DSM na FATEC, com
        estágio em back-end na Compass UOL e liderança de Design System em
        paralelo.
      </p>

      <ol className="mt-16 space-y-10 border-l border-zinc-200 pl-8">
        {timeline.map((item) => (
          <li key={item.period} className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900" />
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
              {item.period}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900">
              {item.title}
            </h2>
            <p className="mt-2 max-w-2xl text-zinc-700">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}