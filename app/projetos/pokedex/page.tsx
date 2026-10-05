import type { Metadata } from "next";
import { ProjectPage } from "../../../components/projects/ProjectPage";

export const metadata: Metadata = {
  title: "Pokédex",
  description:
    "Projeto acadêmico desenvolvido com Flask e PokeAPI para estudos de desenvolvimento web e integração com APIs.",
};

export default function Pokeapi() {
  return (
    <ProjectPage
      title="Pokédex"
      description="Aplicação web desenvolvida durante a graduação na FATEC para estudos de desenvolvimento com Flask, consumo de APIs e integração com banco de dados. O projeto utiliza a PokeAPI para consultar e exibir informações sobre Pokémon."
      info={{
        context: "Projeto acadêmico para estudos — FATEC",
        technologies: "Python · Flask · SQLite · PokeAPI",
        objective:
          "Praticar desenvolvimento web, consumo de APIs e integração com banco de dados.",
        github: "https://github.com/JorgeMassaru/pokedex_python",
      }}
    >
      <h2 className="text-xl font-semibold text-zinc-900">
        Sobre o projeto
      </h2>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        A aplicação foi desenvolvida como parte dos meus estudos na FATEC,
        com foco no aprendizado do framework Flask e no desenvolvimento de
        aplicações web em Python. O projeto utiliza a PokeAPI para obter
        informações dos Pokémon e apresenta esses dados em uma interface
        inspirada em uma Pokédex.
      </p>

      <p className="mt-3 text-lg text-zinc-700 text-justify">
        Além da integração com a API, o projeto também conta com
        funcionalidades de cadastro, edição e exclusão de Pokémon, paginação
        e armazenamento de dados utilizando SQLite e Flask-SQLAlchemy.
      </p>
    </ProjectPage>
  );
}