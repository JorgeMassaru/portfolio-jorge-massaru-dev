"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  stack: string;
  href: string;
  image: StaticImageData;
};

type ProjectCardProps = {
  project: Project;
  expanded: boolean;
  onHover: () => void;
};

export function ProjectCard({ project, expanded, onHover }: ProjectCardProps) {
  const card = (
    <div
      onMouseEnter={onHover}
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-[flex-grow] duration-500 ease-out ${
        expanded ? "flex-[2.2]" : "flex-1"
      }`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 640px) 25vw, 50vw"
        className="object-cover"
      />

      {/* Overlay com as informações, só visível quando o card está expandido */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white transition-opacity duration-300 ${
          expanded ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <p className="text-xs font-medium uppercase tracking-wide text-white/70">
          {project.stack}
        </p>
        <h3 className="mt-1 text-lg font-bold">{project.title}</h3>
        <p className="mt-1 line-clamp-3 text-sm text-white/90">
          {project.description}
        </p>
      </div>
    </div>
  );

  if (!project.href) return card;

  return (
    <Link href={project.href} className="contents">
      {card}
    </Link>
  );
}