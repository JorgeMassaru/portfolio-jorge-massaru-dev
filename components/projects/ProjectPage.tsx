import Link from "next/link";
import { ProjectInfo } from "./ProjectInfo";

type ProjectPageProps = {
  title: string;
  description: string;
  info: {
    context: string;
    technologies: string;
    objective: string;
    github: string;
  };
  children: React.ReactNode;
};

export function ProjectPage({
  title,
  description,
  info,
  children,
}: ProjectPageProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32">
      <Link
        href="/projetos"
        className="text-sm text-zinc-500 hover:text-zinc-900"
      >
        ← Voltar para projetos
      </Link>

      <h1 className="mt-4 text-3xl font-bold text-zinc-900">{title}</h1>

      <p className="mt-6 max-w-6xl text-lg text-zinc-700 text-justify">
        {description}
      </p>

      <ProjectInfo {...info} />

      <div className="mt-16 max-w-6xl">{children}</div>
    </section>
  );
}