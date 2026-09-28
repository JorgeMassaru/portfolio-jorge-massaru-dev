import Image from "next/image";
import jorgeFoto from "../images/jorge-foto.jpeg";

const habilidadesFrontend = [
  { nome: "GitHub", slug: "github", cor: "181717" },
  { nome: "HTML5", slug: "html5", cor: "E34F26" },
  { nome: "CSS3", slug: "css3", cor: "1572B6" },
  { nome: "JavaScript", slug: "javascript", cor: "F7DF1E" },
  { nome: "React", slug: "react", cor: "61DAFB" },
  { nome: "TypeScript", slug: "typescript", cor: "3178C6" },
  { nome: "Next.js", slug: "nextdotjs", cor: "000000" },
  { nome: "Tailwind CSS", slug: "tailwindcss", cor: "06B6D4" },
];

const habilidadesBackend = [
  { nome: "Java", slug: "openjdk", cor: "437291" },
  { nome: "PHP", slug: "php", cor: "777BB4" },
  { nome: "Python", slug: "python", cor: "3776AB" },
  { nome: "MySQL", slug: "mysql", cor: "4479A1" },
  { nome: "PostgreSQL", slug: "postgresql", cor: "4169E1" },
  { nome: "SQLite", slug: "sqlite", cor: "003B57" },
  { nome: "Rust", slug: "rust", cor: "000000" },
  { nome: "Figma", slug: "figma", cor: "F24E1E" },
];

const formacao = [
  {
    titulo: "Engenharia de Computação",
    instituicao: "Univesp",
    descricao: "Formação em andamento, em paralelo à atuação profissional.",
  },
  {
    titulo: "Desenvolvimento de Software Multiplataforma",
    instituicao: "FATEC Registro",
    descricao:
      "Concluído em julho de 2026, com passagem por front-end, back-end, cloud e engenharia de software.",
  },
  {
    titulo: "Técnico em Desenvolvimento de Software",
    instituicao: "SENAI Registro",
    descricao:
      'TCC em grupo: "Comanda Menu", um app de serviço de comanda para restaurantes, desenvolvido em PHP.',
  },
  {
    titulo: "Cursos extras",
    instituicao: "SENAI · FATEC · Santander",
    descricao:
      "Google Cloud Foundation, Desenvolvimento Front-end e o Bootcamp Santander de Rust e IA.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* Quem sou eu */}
      <section className="bg-[#0066ff] px-6 py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              Quem sou eu?
            </h1>

            <p className="mt-6 text-lg leading-relaxed">
              Sou Jorge Massaru, formado em Desenvolvimento de Software
              Multiplataforma (DSM) pela FATEC Registro e atualmente cursando
              Engenharia de Computação na Univesp. Busco oportunidades como
              desenvolvedor back-end, com uma base sólida construída no
              estágio na Compass UOL, onde programei bastante com Java e
              Spring Boot.
            </p>

            <p className="mt-4 text-lg leading-relaxed">
              Além do back-end, transito com conforto por front-end e cloud, e
              carrego um diferencial pouco comum: liderei ciclos de UX/UI em
              projetos acadêmicos na FATEC, evoluindo de designer a
              responsável por Design Systems completos — experiência que
              molda a forma como penso e construo produtos até hoje.
            </p>
          </div>

          <Image
            src={jorgeFoto}
            alt="Jorge Massaru na formatura"
            className="h-56 w-56 shrink-0 rounded-full object-cover ring-4 ring-white lg:h-64 lg:w-64"
          />
        </div>
      </section>

      {/* Habilidades */}
      <section className="bg-white px-6 py-20">
        <h2 className="text-center text-3xl font-bold uppercase text-[#0066ff]">
          Habilidades
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-4 gap-6 sm:grid-cols-8">
          {[...habilidadesFrontend, ...habilidadesBackend].map((skill) => (
            <div
              key={skill.nome}
              title={skill.nome}
              className="flex aspect-square items-center justify-center rounded-full border border-zinc-200 bg-white p-4 shadow-sm"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}/${skill.cor}`}
                alt={skill.nome}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="bg-[#0066ff] px-6 py-20">
        <h2 className="text-center text-3xl font-bold uppercase text-white">
          Formação
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {formacao.map((item) => (
            <div
              key={item.titulo}
              className="rounded-lg bg-[#0052cc] p-6 text-white"
            >
              <h3 className="text-lg font-bold uppercase">{item.titulo}</h3>
              <p className="text-sm uppercase text-white/70">
                {item.instituicao}
              </p>
              <p className="mt-3 text-sm text-white/90">{item.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fora do código */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-zinc-900">
            Fora do código
          </h2>
          <p className="mt-3 text-lg text-zinc-700">
            Sou apaixonado por cultura japonesa e adoro explorar esse universo
            nas horas livres — de tecnologia a viagens, é uma curiosidade que
            também me acompanha nos projetos.
          </p>
        </div>
      </section>
    </>
  );
}
