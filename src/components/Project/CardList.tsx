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
        <div className="card">
          <ProjectCard {...p} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;

  margin: 20px 0;

  > .card {
    width: 25%;

    @media (max-width: 950px) {
      width: 50%;
    }

    @media (max-width: 450px) {
      width: 100%;
    }

    padding: 0 10px 60px;
    box-sizing: border-box;
  }
`;
