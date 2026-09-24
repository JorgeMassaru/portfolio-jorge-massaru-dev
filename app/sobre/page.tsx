const skills = [
  {
    title: "Back-end",
    description:
      "Java com Spring Boot (usado no estágio na Compass UOL), PHP, Python com Flask, e bancos de dados como MySQL, PostgreSQL, SQLite e NoSQL.",
  },
  {
    title: "Front-end",
    description:
      "Interfaces web modernas e responsivas com Next.js, JavaScript/TypeScript, HTML, CSS e Tailwind.",
  },
  {
    title: "Cloud",
    description:
      "Google Cloud Foundation e AWS, aplicados em atividades práticas de infraestrutura durante a formação.",
  },
  {
    title: "Design de produto",
    description:
      "Liderança de UX/UI em projetos acadêmicos, da concepção ao Design System completo no Figma.",
  },
];

const formacao = [
  {
    title: "Engenharia de Computação — Univesp",
    period: "Em andamento",
  },
  {
    title: "Desenvolvimento de Software Multiplataforma — FATEC Registro",
    period: "Concluído em julho de 2026",
  },
  {
    title: "Técnico em Desenvolvimento de Software — SENAI Registro",
    period: "Concluído",
  },
  {
    title: "Cursos extras",
    period:
      "Implementação de Serviços em Nuvem (Google Cloud Foundation) e Desenvolvimento Front-end, ambos no SENAI e na FATEC; Bootcamp Santander de Rust e IA",
  },
];

export default function Sobre() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold text-zinc-900">Sobre mim</h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-700">
        Sou Jorge Massaru, formado em Desenvolvimento de Software
        Multiplataforma (DSM) pela FATEC Registro e atualmente cursando
        Engenharia de Computação na Univesp. Busco oportunidades como
        desenvolvedor back-end, com uma base sólida construída no estágio na
        Compass UOL, onde programei bastante com Java e Spring Boot.
      </p>

      <p className="mt-4 max-w-2xl text-lg text-zinc-700">
        Além do back-end, transito com conforto por front-end e cloud, e
        carrego um diferencial pouco comum: liderei ciclos de UX/UI em
        projetos acadêmicos na FATEC, evoluindo de designer a responsável por
        Design Systems completos — experiência que molda a forma como penso
        e construo produtos até hoje.
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
        <h2 className="text-xl font-semibold text-zinc-900">Formação</h2>
        <ul className="mt-4 space-y-3">
          {formacao.map((item) => (
            <li key={item.title}>
              <p className="text-zinc-900">{item.title}</p>
              <p className="text-sm text-zinc-500">{item.period}</p>
            </li>
          ))}
        </ul>
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