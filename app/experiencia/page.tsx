const timeline = [
  {
    period: "LP 25/2",
    title: "Design Lead — Design System",
    description:
      "Responsável pela liderança de UX/UI do ciclo, conduzindo a construção de um Design System completo no Figma para o projeto do Laboratório de Práticas.",
  },
  {
    period: "LP 25/1",
    title: "Liderança de UX/UI",
    description:
      "Assumi mais responsabilidade no processo de design, orientando decisões de interface e consistência visual do produto acadêmico.",
  },
  {
    period: "LP 24/2",
    title: "Designer UX/UI",
    description:
      "Primeira experiência formal com design de produto em um ciclo de Laboratório de Práticas, cuidando de telas e fluxos no Figma.",
  },
  {
    period: "Cloud Computing II",
    title: "Infraestrutura na AWS",
    description:
      "Atividade prática de criação de VPC na AWS, documentada em um tutorial próprio com passo a passo e capturas de tela.",
  },
  {
    period: "FATEC",
    title: "Desenvolvimento de Software Multiplataforma (DSM)",
    description:
      "Formação em andamento, já nos últimos semestres, com passagem por front-end, back-end, cloud e engenharia de software.",
  },
];

export default function Experiencia() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Experiência</h1>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Minha trajetória acadêmica e profissional, do primeiro contato com
        design de produto até a liderança de Design Systems completos.
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