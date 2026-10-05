import type { Metadata } from "next";
import { ProjectPage } from "../../../components/projects/ProjectPage";

export const metadata: Metadata = {
  title: "Learny",
  description: "Conheça o projeto Learny e minha participação no grupo Kastle.",
};

export default function Learny() {
  return (
    <ProjectPage
      title="Learny"
      description="Learny é um aplicativo pensado para ensinar crianças com TEA (Transtorno do Espectro Autista), desenvolvido em grupo — o Kastle — durante os semestres na FATEC. O projeto conta com protótipos usáveis em diferentes linguagens de programação, desenvolvidos com atenção à acessibilidade e à arquitetura de software."
      info={{
        context: "Grupo Kastle — FATEC",
        technologies: "React · UX/UI · Figma",
        objective:
          "Desenvolver uma ferramenta de aprendizagem acessível para crianças com TEA.",
        github: "https://github.com/JorgeMassaru/learny-mobile",
      }}
    >
      <h2 className="text-xl font-semibold text-zinc-900">
        O processo
      </h2>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        Ao longo de 6 semestres, o Learny evoluiu de uma ideia até um material
        usável como nosso projeto de TCC, com paleta de cores, tipografia e
        componentes pensados para acolher o público infantil com TEA.
      </p>
    </ProjectPage>
  );
}