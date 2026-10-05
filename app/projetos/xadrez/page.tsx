import type { Metadata } from "next";
import { ProjectPage } from "../../../components/projects/ProjectPage";

export const metadata: Metadata = {
  title: "Comanda Menu",
  description:
    "Projeto acadêmico de atendimento por comandas com PHP e MySQL.",
};

export default function ComandaMenu() {
  return (
    <ProjectPage
      title="Comanda Menu"
      description="Comanda Menu é uma aplicação para apoiar o serviço por comandas em restaurantes. O projeto foi desenvolvido em grupo durante o curso Técnico em Desenvolvimento de Sistemas no SENAI Registro."
      info={{
        context: "Projeto acadêmico em grupo — SENAI Registro",
        technologies: "PHP · MySQL",
        objective:
          "Organizar o atendimento por comandas em restaurantes.",
        github: "https://github.com/JorgeMassaru/comanda_menu",
      }}
    >
      <h2 className="text-xl font-semibold text-zinc-900">
        Sobre o projeto
      </h2>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        A aplicação foi criada como projeto de conclusão do curso técnico,
        em equipe, usando PHP e MySQL. Eu fui o desenvolvedor Front-end.
      </p>
    </ProjectPage>
  );
}