import Link from "next/link";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectGallery } from "./ProjectGallery";
import type { StaticImageData } from "next/image";

type ProjectImage = {
  src: StaticImageData;
  alt: string;
};

type ProjectPageProps = {
  title: string;
  description: string;
  info: {
    context: string;
    technologies: string;
    objective: string;
    github: string;
  };
  images?: ProjectImage[];
  children: React.ReactNode;
};

export function ProjectPage({
  title,
  description,
  info,
  images,
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

      {images && images.length > 0 && (
        <ProjectGallery images={images} />
      )}
    </section>
  );
}