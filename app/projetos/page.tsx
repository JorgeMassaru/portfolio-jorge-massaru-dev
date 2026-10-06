import type { Metadata } from "next";
import { ProjectsPage } from "../../components/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos de software e design desenvolvidos por Jorge Massaru.",
};

export default function Projetos() {
  return <ProjectsPage />;
}
