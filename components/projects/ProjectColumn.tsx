"use client";

import { useState } from "react";
import { ProjectCard, type Project } from "./ProjectCard";

export function ProjectColumn({ projects }: { projects: Project[] }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="flex h-[22rem] flex-col gap-4 sm:h-[28rem] sm:gap-6 lg:h-[34rem]">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          expanded={index === expandedIndex}
          onHover={() => setExpandedIndex(index)}
        />
      ))}
    </div>
  );
}