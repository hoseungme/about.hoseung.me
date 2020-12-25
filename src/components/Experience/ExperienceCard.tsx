import React from "react";
import styled from "styled-components";

import { IExperience } from "../../interfaces/section/Experience";

import { Color } from "../../constants/Color";

export const ExperienceCard: React.FC<IExperience> = ({
  info,
  duration,
  detail,
}) => {
  return (
    <Container>
      <div className="duration">{duration}</div>
      <a className="name" href={info.link}>
        {info.name}
      </a>
      <div className="detail">{detail}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > .duration {
    margin-bottom: 3px;

    font-size: 1.1rem;
    color: ${Color.DarkMint};
  }

  > .name {
    height: fit-content;

    margin-bottom: 8px;

    font-size: 1.3rem;
    font-weight: 500;
    color: ${Color.Black};
    text-decoration: none;

    transition: color 0.1s;

    &:hover,
    &:active {
      color: ${Color.BlackTransparency50};
    }
  }

  > .detail {
    width: 350px;

    font-size: 1rem;
    line-height: 30px;
    color: ${Color.DarkGrey};
    text-align: right;
  }
`;
