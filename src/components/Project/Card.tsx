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
      <div className="name">{name}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-radius: 6px;

  box-shadow: 0 0 15px ${Color.LightGrey};

  &:hover {
    transform: translateY(-1.5%);
    transition: transform 1s;
  }

  > img {
    width: 100%;
    height: 450px;

    object-fit: cover;
  }

  > .name {
    margin: 10px 20px;

    color: ${Color.FontBlack};

    font-size: 25px;

    word-break: keep-all;
  }
`;
