"use client";

import { useState } from "react";
import { ProjectCard, type Project } from "./ProjectCard";

export function ProjectColumn({ projects }: { projects: Project[] }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div className="flex h-[34rem] flex-col gap-6">
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