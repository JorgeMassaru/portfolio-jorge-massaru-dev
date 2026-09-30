import { ProjectColumn } from "../../components/layout/projects/ProjectColumn";
import { PageHeader } from "../../components/ui/PageHeader";
import learnyImage from "../images/projects/learny.png";
import carteiraImage from "../images/projects/learny.png";
import comandaImage from "../images/projects/learny.png";
import conviteImage from "../images/projects/learny.png";

const projects = [
  {
    title: "Learny",
    description:
      "App para ensinar crianças com TEA (Transtorno do Espectro Autista), desenvolvido em grupo (Kastle) na FATEC, com protótipos usáveis já produzidos.",
    stack: "React · UX/UI · Figma",
    href: "/projetos/learny",
    image: learnyImage,
  },
  {
    title: "Carteira de Investimentos",
    description:
      "Aplicação fullstack em Rust para gestão de carteira: cadastro de ativos, autenticação de usuário e histórico de transações de compra e venda.",
    stack: "Rust · Axum · SQLx/PostgreSQL · Askama",
    href: "https://github.com/JorgeMassaru/rust-fullstack-carteira-investimentos",
    image: carteiraImage,
  },
  {
    title: "Comanda Menu",
    description:
      "App de serviço de comanda para restaurantes, desenvolvido em grupo como TCC do técnico em Desenvolvimento de Software no SENAI.",
    stack: "PHP · MySQL",
    href: "",
    image: comandaImage,
  },
  {
    title: "Convite de Formatura Interativo",
    description:
      "Convite web animado para cerimônia de colação de grau, com caixa de presente animada e cartão com efeito de flip 3D.",
    stack: "HTML · CSS · JavaScript",
    href: "",
    image: conviteImage,
  },
];

export default function Projetos() {
  // 4 projetos reais, 2 por coluna — cada coluna alterna qual card fica
  // grande (com informações) e qual fica só como imagem, no hover.
  const columns = [projects.slice(0, 2), projects.slice(2, 4)];

  return (
    <section className="min-h-svh bg-white px-6 pb-20 pt-32">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <PageHeader
            title="Projetos"
            description="Conheça alguns dos projetos que desenvolvi ao longo da minha formação e experiência."
          />
        </header>
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {columns.map((column, i) => (
          <ProjectColumn key={i} projects={column} />
        ))}
      </div>
    </section>
  );
}