import React from "react";
import styled from "styled-components";

import { ProjectCard } from "./ProjectCard";
import { FadeInWrapper } from "../Layout/FadeInWrapper";

import { IProject } from "../../interfaces/Project";

import { Device } from "../../constants/Device";

export const ProjectCardList: React.FC<{ projects: IProject[] }> = ({
  projects,
}) => {
  return (
    <Container>
      {projects.map((p, index) => (
        <div className="card" key={index}>
          <FadeInWrapper animation="fadeInUp" intersecting={0.8}>
            <ProjectCard {...p} />
          </FadeInWrapper>
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
    width: 33.3%;

    @media (max-width: ${Device.Tablet}) {
      width: 50%;
    }

    @media (max-width: ${Device.Mobile}) {
      width: 100%;
    }

    padding: 0 20px 60px;
    box-sizing: border-box;
  }
`;
