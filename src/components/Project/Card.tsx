import React from "react";

import { Project } from "../../interfaces/Project";

export const ProjectCard: React.FC<Project> = ({
  img,
  name,
  duration,
  description,
  references,
}) => {
  return (
    <div>
      <div>{img}</div>
      <div>{name}</div>
      <div>{duration}</div>
      <div>{description}</div>
    </div>
  );
};
