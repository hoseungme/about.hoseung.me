import React from "react";

import { ProjectCard } from "./Card";

import { Project } from "../../interfaces/Project";

export const ProjectCardList: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <>
      {projects.map((p) => (
        <ProjectCard {...p} />
      ))}
    </>
  );
};
