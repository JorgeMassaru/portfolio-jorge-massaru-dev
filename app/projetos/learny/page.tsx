import type { Metadata } from "next";
import { ProjectDetailPage } from "../../../components/pages/ProjectDetailPage";

export const metadata: Metadata = {
  title: "Learny",
  description: "Conheça o projeto Learny e minha participação no grupo Kastle.",
};

export default function Learny() {
  return <ProjectDetailPage project="learny" />;
}
