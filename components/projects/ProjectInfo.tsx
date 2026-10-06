"use client";

import { useLanguage } from "../i18n/LanguageContext";

type ProjectInfoProps = {
  context: string;
  technologies: string;
  objective: string;
  github: string;
};

export function ProjectInfo({
  context,
  technologies,
  objective,
  github,
}: ProjectInfoProps) {
  const { t } = useLanguage();

  return (
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border border-zinc-200 p-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          {t.projects.context}
        </h2>
        <p className="mt-2 text-zinc-900">{context}</p>
      </div>

      <div className="rounded-lg border border-zinc-200 p-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          {t.projects.technologies}
        </h2>
        <p className="mt-2 text-zinc-900">{technologies}</p>
      </div>

      <div className="rounded-lg border border-zinc-200 p-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          {t.projects.objective}
        </h2>
        <p className="mt-2 text-zinc-900">{objective}</p>
      </div>

      <div className="rounded-lg border border-zinc-200 p-6">
        <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">
          {t.projects.projectLink}
        </h2>

        <a
          href={github}
          className="mt-2 block break-all text-zinc-900 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {github.replace("https://", "")}
        </a>
      </div>
    </div>
  );
}