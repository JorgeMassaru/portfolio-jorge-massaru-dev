"use client";

import { useLanguage } from "../i18n/LanguageContext";
import { ProjectColumn } from "../projects/ProjectColumn";
import type { Project } from "../projects/ProjectCard";
import { PageHeader } from "../ui/PageHeader";
import learnyImage from "../../app/images/projects/learny.png";
import comandaImage from "../../app/images/projects/comanda.png";
import chessImage from "../../app/images/projects/xadrez.jpg";
import pokedexImage from "../../app/images/projects/pokedex_image.png";

const projectImages = [learnyImage, pokedexImage, chessImage, comandaImage];
const projectRoutes = [
  "/projetos/learny",
  "/projetos/pokedex",
  "/projetos/xadrez",
  "/projetos/ComandaMenu",
];

export function ProjectsPage() {
  const { t } = useLanguage();
  const projects: Project[] = t.projects.cards.map((card, index) => ({
    ...card,
    image: projectImages[index],
    href: projectRoutes[index],
  }));
  const columns = [projects.slice(0, 2), projects.slice(2, 4)];

  return (
    <section className="min-h-svh bg-white px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <PageHeader
          title={t.projects.title}
          description={t.projects.description}
        />
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {columns.map((column) => (
          <ProjectColumn key={column[0].title} projects={column} />
        ))}
      </div>
    </section>
  );
}
