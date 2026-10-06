"use client";

import Image from "next/image";
import jorgeFoto from "../../app/images/jorge-foto.jpeg";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionTitle } from "../ui/SectionTitle";

const skills = [
  { nome: "GitHub", slug: "github", cor: "181717" },
  { nome: "HTML5", slug: "html5", cor: "E34F26" },
  { nome: "CSS3", slug: "css", cor: "1572B6" },
  { nome: "JavaScript", slug: "javascript", cor: "F7DF1E" },
  { nome: "React", slug: "react", cor: "61DAFB" },
  { nome: "TypeScript", slug: "typescript", cor: "3178C6" },
  { nome: "Next.js", slug: "nextdotjs", cor: "000000" },
  { nome: "Tailwind CSS", slug: "tailwindcss", cor: "06B6D4" },
  { nome: "Bootstrap", slug: "bootstrap", cor: "7952B3" },
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
  { nome: "Docker", slug: "docker", cor: "2496ED" },
  { nome: "Swagger", slug: "swagger", cor: "85EA2D" },
  { nome: "Figma", slug: "figma", cor: "F24E1E" },
];

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-[#0066ff] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-bold uppercase tracking-wide">
              {t.about.title}
            </h1>
            <p className="mt-6 text-left text-lg leading-relaxed sm:text-justify">
              {t.about.firstParagraph}
            </p>
            <p className="mt-4 text-left text-lg leading-relaxed sm:text-justify">
              {t.about.secondParagraph}
            </p>
          </div>

          <Image
            src={jorgeFoto}
            alt={t.about.imageAlt}
            className="h-40 w-40 shrink-0 rounded-full object-cover ring-4 ring-white sm:h-56 sm:w-56 lg:h-64 lg:w-64"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <SectionTitle>{t.about.skills}</SectionTitle>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-4 gap-3 sm:grid-cols-8 sm:gap-6">
          {skills.map((skill) => (
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

      <section className="bg-[#0066ff] px-6 py-20">
        <SectionTitle light>{t.about.education}</SectionTitle>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {t.about.educationItems.map((item) => (
            <div
              key={item.title}
              className="min-w-0 rounded-lg bg-[#0052cc] p-5 text-white sm:p-6"
            >
              <h3 className="break-words text-lg font-bold uppercase leading-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm uppercase text-white/70">
                {item.institution}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-[#0066ff]">
            {t.about.outsideCode}
          </h2>
          <p className="mt-3 text-left text-lg text-[#0066ff] sm:text-justify">
            {t.about.outsideParagraph}
          </p>
        </div>
      </section>
    </>
  );
}
