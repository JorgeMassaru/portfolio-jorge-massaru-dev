import type { Metadata } from "next";
import { ExperiencePage } from "../../components/pages/ExperiencePage";

export const metadata: Metadata = {
  title: "Histórico",
  description: "Experiências acadêmicas e profissionais de Jorge Massaru.",
};

export default function Experiencia() {
  return <ExperiencePage />;
}
