import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../common/TransitionContainer";
import { ProjectCard } from "./ProjectCard";

import { useValueByMedia } from "../../hooks/useValueByMedia";

import { GA } from "../../services/ga";

import { IProject } from "../../interfaces/section/Project";

export const ProjectCardList: React.FC<{ projects: IProject[] }> = ({
  projects,
}) => {
  const columnSize = useValueByMedia({ desktop: 3, tablet: 2, mobile: 1 });

  return (
    <Container columnSize={columnSize}>
      {projects.map((project, index) => (
        <TransitionContainer
          key={index}
          className="card"
          effect="fadeInUp"
          delay={0.2 * (index % columnSize)}
          onInView={() =>
            GA.trackProjectSectionEvent({
              action: "Card Viewd",
              label: project.title,
            })
          }
        >
          <ProjectCard {...project} />
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
