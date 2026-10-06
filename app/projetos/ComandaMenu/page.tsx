import type { Metadata } from "next";
import { ProjectDetailPage } from "../../../components/pages/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Comanda Menu",
  description:
    "Projeto acadêmico de atendimento por comandas com PHP e MySQL.",
};

export default function ComandaMenu() {
  return <ProjectDetailPage project="comanda" />;
}
