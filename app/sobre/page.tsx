const skills = [
  {
    title: "Front-end",
    description:
      "Interfaces web modernas e responsivas, com foco em experiência do usuário e consistência visual.",
  },
  {
    title: "Back-end",
    description:
      "APIs e regras de negócio em Java, Rust e Python, com atenção a organização de código e testes.",
  },
  {
    title: "Cloud",
    description:
      "Infraestrutura e serviços em nuvem, incluindo AWS, aplicados a projetos acadêmicos e pessoais.",
  },
  {
    title: "Design de produto",
    description:
      "Liderança de UX/UI em projetos acadêmicos, da concepção ao Design System no Figma.",
  },
];

export default function Sobre() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Sobre mim</h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-700">
        Sou Jorge Massaru, estudante dos últimos semestres de Desenvolvimento
        de Software Multiplataforma (DSM) na FATEC. Atuo como desenvolvedor
        full stack, transitando entre front-end, back-end e cloud, sempre com
        um olhar de designer sobre o resultado final.
      </p>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Ao longo da faculdade, além de programar, assumi papéis de liderança
        de UX/UI em ciclos de Laboratório de Práticas, evoluindo de designer
        a responsável por Design Systems completos — experiência que molda a
        forma como penso e construo produtos até hoje.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-lg border border-zinc-200 p-6"
          >
            <h2 className="text-lg font-semibold text-zinc-900">
              {skill.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-700">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-xl font-semibold text-zinc-900">
          Fora do código
        </h2>
        <p className="mt-3 text-lg text-zinc-700">
          Sou apaixonado por cultura japonesa e adoro explorar esse universo
          nas horas livres — de tecnologia a viagens, é uma curiosidade que
          também me acompanha nos projetos.
        </p>
      </div>
    </section>
  );
}