import type { Metadata } from "next";
import { ProjectPage } from "../../../components/projects/ProjectPage";

import telaXadrez from "./images/xadrez_image.png";

export const metadata: Metadata = {
  title: "Sistema de Xadrez",
  description:
    "Sistema de xadrez desenvolvido em Java como projeto acadêmico.",
};

export default function Xadrez() {
  return (
    <ProjectPage
      title="Sistema de Xadrez"
      description="Sistema de xadrez desenvolvido em Java como projeto acadêmico, com foco na aplicação de conceitos de programação orientada a objetos e desenvolvimento de uma aplicação para partidas de xadrez."
      info={{
        context: "Projeto do curso de Java",
        technologies: "Java",
        objective:
          "Praticar programação orientada a objetos e desenvolver a lógica de uma partida de xadrez.",
        github: "https://github.com/JorgeMassaru/chess-system-java",
      }}
      images={[
        {
          src: telaXadrez,
          alt: "Tela do sistema de xadrez",
        },
      ]}
    >
      <h2 className="text-xl font-semibold text-zinc-900">
        Sobre o projeto
      </h2>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        O Sistema de Xadrez foi desenvolvido em Java como projeto acadêmico,
        com foco no aprendizado e aplicação de conceitos de programação
        orientada a objetos.
      </p>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        Durante o desenvolvimento, trabalhei na implementação da lógica do
        jogo, movimentação das peças e regras necessárias para o funcionamento
        de uma partida de xadrez.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-zinc-900">
        Minha participação
      </h2>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        Fui responsável pelo desenvolvimento do sistema em Java, trabalhando
        principalmente na implementação da lógica do jogo e na aplicação dos
        conceitos de programação orientada a objetos.
      </p>
    </ProjectPage>
  );
}