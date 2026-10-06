import type { Metadata } from "next";
import Image from "next/image";
import jorgeFoto from "../images/jorge-foto.jpeg";
import { SectionTitle } from "../../components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória, habilidades e formação de Jorge Massaru.",
};

// Habilidades apresentadas em cada grupo da página.
const habilidadesFrontend = [
  { nome: "GitHub", slug: "github", cor: "181717" },
  { nome: "HTML5", slug: "html5", cor: "E34F26" },
  { nome: "CSS3", slug: "css", cor: "1572B6" },
  { nome: "JavaScript", slug: "javascript", cor: "F7DF1E" },
  { nome: "React", slug: "react", cor: "61DAFB" },
  { nome: "TypeScript", slug: "typescript", cor: "3178C6" },
  { nome: "Next.js", slug: "nextdotjs", cor: "000000" },
  { nome: "Tailwind CSS", slug: "tailwindcss", cor: "06B6D4" },
  { nome: "Bootstrap", slug: "bootstrap", cor: "7952B3" },
];

const habilidadesBackend = [
  { nome: "Java", slug: "openjdk", cor: "437291" },
  { nome: "PHP", slug: "php", cor: "777BB4" },
  { nome: "Python", slug: "python", cor: "3776AB" },
  { nome: "Rust", slug: "rust", cor: "000000" },
  { nome: "Spring Boot", slug: "springboot", cor: "6DB33F" },
  { nome: "Flask", slug: "flask", cor: "000000" },
  { nome: "Django", slug: "django", cor: "092E20" },
  { nome: "MySQL", slug: "mysql", cor: "4479A1" },
  { nome: "MariaDB", slug: "mariadb", cor: "003545" },
  { nome: "MongoDB", slug: "mongodb", cor: "47A248" },
  { nome: "SQLite", slug: "sqlite", cor: "003B57" },
  { nome: "PostgreSQL", slug: "postgresql", cor: "4169E1" },
  { nome: "RabbitMQ", slug: "rabbitmq", cor: "FF6600" },
];

const habilidadesFerramentas = [
  { nome: "Docker", slug: "docker", cor: "2496ED" },
  { nome: "Swagger", slug: "swagger", cor: "85EA2D" },
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
    titulo: "Técnico em Desenvolvimento de Sistemas",
    instituicao: "SENAI Registro",
    descricao:
      'Projeto Integrador: "Comanda Menu", um app de serviço de comanda para restaurantes, desenvolvido em PHP. Balança Solidária, um projeto com Arduino que mede peso e envia dados para um app web.',
  },
  {
    titulo: "Cursos extras",
    instituicao: "SENAI · FATEC · Santander",
    descricao:
      "Google Cloud Foundation, Desenvolvimento Front-end e o Bootcamp Santander de Rust e IA, entre outros cursos de curta duração.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* Apresentação pessoal. */}
      <section className="bg-[#0066ff] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold uppercase tracking-wide">
              Quem sou eu?
            </h1>

            <p className="mt-6 text-left text-lg leading-relaxed sm:text-justify">
              Sou Jorge Massaru, formado em Desenvolvimento de Software
              Multiplataforma (DSM) pela FATEC Registro e atualmente cursando
              Engenharia de Computação na Univesp. Busco oportunidades como
              desenvolvedor back-end, com uma base sólida construída no
              estágio na Compass UOL, onde programei bastante com Java e
              Spring Boot.
            </p>

            <p className="mt-4 text-left text-lg leading-relaxed sm:text-justify">
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
            className="h-40 w-40 shrink-0 rounded-full object-cover ring-4 ring-white sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </div>
      </section>

      {/* Tecnologias e ferramentas. */}
      <section className="bg-white px-6 py-20">
        <SectionTitle>Habilidades</SectionTitle>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-4 gap-3 sm:grid-cols-8 sm:gap-6">
          {[
            ...habilidadesFrontend,
            ...habilidadesBackend,
            ...habilidadesFerramentas,
          ].map((skill) => (
            <div
              key={skill.nome}
              title={skill.nome}
              className="flex aspect-square items-center justify-center rounded-full border border-zinc-200 bg-white p-2 shadow-sm sm:p-3"
            >
              <Image
                src={`https://cdn.simpleicons.org/${skill.slug}/${skill.cor}`}
                alt={skill.nome}
                width={64}
                height={64}
                unoptimized
                className="h-3/4 w-3/4 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Formação acadêmica e cursos complementares. */}
      <section className="bg-[#0066ff] px-6 py-20">
        <SectionTitle light>Formação</SectionTitle>

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

              <p className="mt-3 text-sm text-white/90">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Interesses pessoais. */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0066ff]">
            Fora do código
          </h2>

          <p className="mt-3 text-left text-lg text-[#0066ff] sm:text-justify">
            Sou apaixonado por cultura japonesa e adoro explorar esse universo
            nas horas livres — de tecnologia a viagens, é uma curiosidade que
            também me acompanha nos projetos.
          </p>
        </div>
      </section>
    </>
  );
}