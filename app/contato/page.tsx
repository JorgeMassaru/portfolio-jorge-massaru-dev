import type { Metadata } from "next";
import { ContactPage } from "../../components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Jorge Massaru.",
};

export default function Contato() {
  return <ContactPage />;
}
