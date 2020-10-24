import React, { useMemo } from "react";
import styled from "styled-components";
import { useMediaLayout } from "use-media";

import { ProjectCard } from "./ProjectCard";
import { FadeInWrapper } from "../Layout/FadeInWrapper";

import { IProject } from "../../interfaces/Project";

import { Device } from "../../constants/Device";

export const ProjectCardList: React.FC<{ projects: IProject[] }> = ({
  projects,
}) => {
  const desktop = useMediaLayout({ minWidth: Device.Tablet + 1 });
  const tablet = useMediaLayout({ minWidth: Device.Mobile + 1 });

  const columnSize = useMemo(() => (desktop ? 3 : tablet ? 2 : 1), [
    desktop,
    tablet,
  ]);

  return (
    <Container columnSize={columnSize}>
      {projects.map((p, index) => (
        <div className="card" key={index}>
          <FadeInWrapper
            animation="fadeInUp"
            animationDelay={0.2 * (index % columnSize)}
            intersecting={0.4}
          >
            <ProjectCard {...p} />
          </FadeInWrapper>
        </div>
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
