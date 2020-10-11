import React from "react";

import { ProjectCardList } from "../../components/Project/CardList";

import { projects } from "../../data/projects";

export const Main: React.FC = () => {
  return <ProjectCardList projects={projects} />;
};
