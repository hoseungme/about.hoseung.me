import React from "react";
import styled from "styled-components";

import { Project } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const ProjectCard: React.FC<Project> = ({
  img,
  name,
  duration,
  description,
  references,
}) => {
  return (
    <Container>
      <img src={img} alt="Project" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;

  overflow: hidden;

  border-radius: 6px;

  box-shadow: 0 0 15px ${Color.LightGrey};

  > img {
    width: 100%;
    height: 450px;

    object-fit: cover;
  }
`;
