"use client";

import type { StaticImageData } from "next/image";
import { ProjectPage } from "../projects/ProjectPage";
import { useLanguage } from "../i18n/LanguageContext";
import learnyHome from "../../app/projetos/learny/images/tela_fase_1.png";
import learnyStages from "../../app/projetos/learny/images/fase_1_atv.png";
import learnyParents from "../../app/projetos/learny/images/tela_pais_feedback.png";
import pokedexScreen from "../../app/projetos/pokedex/images/pokedex_img.png";
import pokedexApi from "../../app/projetos/pokedex/images/api_pokemon.png";
import chessScreen from "../../app/projetos/xadrez/images/xadrez_image.png";

type ProjectId = "comanda" | "pokedex" | "learny" | "chess";

const projectImages: Record<ProjectId, StaticImageData[]> = {
  comanda: [],
  pokedex: [pokedexScreen, pokedexApi],
  learny: [learnyHome, learnyStages, learnyParents],
  chess: [chessScreen],
};

export function ProjectDetailPage({ project }: { project: ProjectId }) {
  const { t } = useLanguage();
  const detail = t.projects.details[project];
  const images = projectImages[project].map((src, index) => ({
    src,
    alt: detail.imageAlts[index],
  }));

  return (
    <ProjectPage
      title={detail.title}
      description={detail.description}
      info={{
        context: detail.context,
        technologies: detail.technologies,
        objective: detail.objective,
        github: projectGithub[project],
      }}
      images={images}
    >
      {detail.sections.map((section) => (
        <section key={section.title} className="mb-8 last:mb-0">
          <h2 className="text-xl font-semibold text-zinc-900">
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-3 text-lg text-justify text-zinc-700"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </ProjectPage>
  );
}

const projectGithub: Record<ProjectId, string> = {
  comanda: "https://github.com/JorgeMassaru/comanda_menu",
  pokedex: "https://github.com/JorgeMassaru/pokedex_python",
  learny: "https://github.com/JorgeMassaru/learny-mobile",
  chess: "https://github.com/JorgeMassaru/chess-system-java",
};
