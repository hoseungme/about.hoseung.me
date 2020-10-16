import React from "react";
import styled from "styled-components";

import { Project } from "../../interfaces/Project";

import { Color } from "../../constants/Color";
import { OverlayCard } from "../Overlay/Card";

export const ProjectCard: React.FC<Project> = ({
  img,
  name,
  duration,
  ...others
}) => {
  return (
    <Container>
      <div className="project-info">
        <img src={img} alt="Project" />
        <OverlayCard {...others} />
      </div>
      <div className="name">{name}</div>
      <div className="duration">{duration}</div>
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
    box-shadow: 0 10px 15px ${Color.LightGrey};

    transition: transform 1s, box-shadow 1s;

    > .project-info {
      > div {
        opacity: 1;

        transition: opacity 1s;
      }
    }
  }

  > .project-info {
    position: relative;

    height: 450px;

    display: flex;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }

  > .name {
    margin: 10px 20px;

    color: ${Color.FontBlack};

    font-size: 25px;

    word-break: keep-all;
  }

  > .duration {
    margin: 10px 20px;

    color: ${Color.FontBlack};

    font-size: 15px;

    word-break: keep-all;
  }
`;
