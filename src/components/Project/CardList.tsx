import React from "react";
import styled from "styled-components";

import { ProjectCard } from "./Card";

import { Project } from "../../interfaces/Project";

export const ProjectCardList: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <Container>
      {projects.map((p) => (
        <ProjectCard {...p} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;

  > * {
    width: 25%;
  }
`;
