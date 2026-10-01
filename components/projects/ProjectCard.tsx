"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  stack: string;
  href?: string;
  image?: StaticImageData;
};

type ProjectCardProps = {
  project: Project;
  expanded: boolean;
  onHover: () => void;
};

export function ProjectCard({
  project,
  expanded,
  onHover,
}: ProjectCardProps) {
  function handleClick(e: React.MouseEvent) {
    if (!expanded) {
      e.preventDefault();
      onHover();
    }
  }

  const card = (
    <div
      onMouseEnter={onHover}
      onClick={project.href ? undefined : onHover}
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-[flex-grow] duration-500 ease-out ${
        expanded ? "flex-[2.2]" : "flex-1"
      }`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 25vw, 100vw"
          className="object-cover"
        />
      )}

      {/* Título visível quando o card está fechado */}
      {!expanded && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-white sm:p-5 sm:pt-12">
          <h3 className="text-base font-bold sm:text-lg">
            {project.title}
          </h3>
        </div>
      )}

      {/* Informações completas quando o card está expandido */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/65 to-transparent p-4 pt-16 text-white transition-opacity duration-300 sm:p-5 sm:pt-16 ${
          expanded
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        } sm:opacity-0 ${
          expanded ? "sm:opacity-100" : ""
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-wide text-white/70">
          {project.stack}
        </p>

        <h3 className="mt-1 text-base font-bold sm:text-lg">
          {project.title}
        </h3>

        <p className="mt-1 line-clamp-3 text-sm text-white/90">
          {project.description}
        </p>
      </div>
    </div>
  );

  if (!project.href) return card;

  return (
    <Link href={project.href} onClick={handleClick} className="contents">
      {card}
    </Link>
  );
}