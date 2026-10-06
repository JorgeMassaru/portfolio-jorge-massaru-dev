import type { Metadata } from "next";
import { ProjectDetailPage } from "../../../components/pages/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Pokédex",
  description:
    "Projeto acadêmico desenvolvido com Flask e PokeAPI para estudos de desenvolvimento web e integração com APIs.",
};

export default function Pokeapi() {
  return <ProjectDetailPage project="pokedex" />;
}
