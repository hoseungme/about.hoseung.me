import React from "react";
import styled from "styled-components";

import { ProjectCard } from "./ProjectCard";
import { TransitionContainer } from "../Layout/TransitionContainer";

import { useValueByMedia } from "../../hooks/useValueByMedia";

import { IProject } from "../../interfaces/Project";

export const ProjectCardList: React.FC<{ projects: IProject[] }> = ({
  projects,
}) => {
  const columnSize = useValueByMedia({ desktop: 3, tablet: 2, mobile: 1 });

  return (
    <Container columnSize={columnSize}>
      {projects.map((p, index) => (
        <TransitionContainer
          key={index}
          className="card"
          type="fadeInToUp"
          intersecting={0.4}
          delay={0.2 * (index % columnSize)}
        >
          <ProjectCard {...p} />
        </TransitionContainer>
      ))}
    </Container>
  );
};

const Container = styled.div<{ columnSize: number }>`
  width: 100%;

  display: flex;
  flex-flow: row wrap;

  margin: 20px 0;

  > .card {
    width: ${({ columnSize }) => 100 / columnSize}%;

    padding: 0 20px 60px;

    box-sizing: border-box;
  }
`;
