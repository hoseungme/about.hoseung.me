import React, { useState } from "react";
import styled from "styled-components";

import { Project } from "../../interfaces/Project";

import { Color } from "../../constants/Color";
import { OverlayCard } from "../Overlay/Card";
import { Device } from "../../constants/Device";

export const ProjectCard: React.FC<Project> = ({
  img,
  name,
  duration,
  ...others
}) => {
  const [overlayVisible, setOverlayvisible] = useState(false);

  return (
    <Container>
      <div
        className="project-info"
        onClick={() => setOverlayvisible(!overlayVisible)}
      >
        <img src={img} alt="Project" />
        {overlayVisible && <OverlayCard {...others} />}
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
    transform: translateY(-1%);
    box-shadow: 0 5px 15px ${Color.LightGrey};

    transition: transform 1s, box-shadow 1s;
  }

  > .project-info {
    position: relative;

    height: 400px;

    @media (max-width: ${Device.Tablet}) {
      height: 350px;
    }

    @media (max-width: ${Device.Mobile}) {
      height: 200px;
    }

    display: flex;

    cursor: pointer;

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
