import type { Metadata } from "next";
import { AboutPage } from "../../components/pages/AboutPage";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória, habilidades e formação de Jorge Massaru.",
};

export default function Sobre() {
  return <AboutPage />;
}
