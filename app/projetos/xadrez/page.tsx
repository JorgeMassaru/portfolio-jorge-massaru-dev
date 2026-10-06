import type { Metadata } from "next";
import { ProjectDetailPage } from "../../../components/pages/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Sistema de Xadrez",
  description:
    "Sistema de xadrez desenvolvido em Java como projeto acadêmico.",
};

export default function Xadrez() {
  return <ProjectDetailPage project="chess" />;
}
