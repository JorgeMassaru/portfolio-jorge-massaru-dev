import type { Metadata } from "next";
import { ProjectColumn } from "../../components/projects/ProjectColumn";
import type { Project } from "../../components/projects/ProjectCard";
import { PageHeader } from "../../components/ui/PageHeader";
import learnyImage from "../images/projects/learny.png";
import comandaImage from "../images/projects/comanda.png";
import XadrezImagem from "../images/projects/xadrez.jpg";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de software e design desenvolvidos por Jorge Massaru.",
};

// Conteúdo dos projetos exibidos nos cartões abaixo.
const projects: Project[] = [
  {
    title: "Learny",
    description:
      "App para ensinar crianças com TEA (Transtorno do Espectro Autista), desenvolvido em grupo (Kastle) na FATEC, com protótipos usáveis já produzidos.",
    stack: "React · UX/UI · Figma",
    href: "/projetos/learny",
    image: learnyImage,
  },
  {
    title: "Sistema de Xadrez",
    description:
      "Aplicação Back-end em Java, com arquitetura REST, para gerenciar partidas de xadrez, incluindo persistência de dados em banco Mysql.",
    stack: "Java · Spring Boot · Mysql",
    href: "https://github.com/JorgeMassaru/java-chess",
    image: XadrezImagem
  },
  {
    title: "Comanda Menu",
    description:
      "App de serviço de comanda para restaurantes, desenvolvido em grupo como TCC do técnico em Desenvolvimento de Software no SENAI.",
    stack: "PHP · MySQL",
    href: "/projetos/ComandaMenu",
    image: comandaImage,
  },
];

export default function Projetos() {
  // Divide os cartões em duas colunas para manter a composição visual.
  const columns = [projects.slice(0, 2), projects.slice(2, 4)];

  return (
    <section className="min-h-svh bg-white px-6 pb-20 pt-32">
      {/* Título e contexto da página. */}
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <PageHeader
            title="Projetos"
            description="Conheça alguns dos projetos que desenvolvi ao longo da minha formação e experiência."
          />
        </header>
      </div>

      {/* Lista visual dos projetos, agrupada em colunas interativas. */}
      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {columns.map((column) => (
          <ProjectColumn key={column[0].title} projects={column} />
        ))}
      </div>
    </section>
  );
}