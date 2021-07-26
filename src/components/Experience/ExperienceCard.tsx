import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

import { IExperience } from "../../interfaces/section/Experience";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const ExperienceCard: React.FC<
  IExperience & { position: "left" | "right" }
> = ({ id, title, duration, summary, detail, position }) => {
  return (
    <Container
      style={{ alignItems: position === "left" ? "flex-end" : "flex-start" }}
    >
      <div className="duration">{duration}</div>
      <div className="title">{title}</div>
      <div
        className="summary"
        style={{ textAlign: position === "left" ? "right" : "left" }}
      >
        {summary}
      </div>
      {detail && (
        <Link className="link" to={`/experience/${id}`}>
          자세히보기
          <BiLinkExternal />
        </Link>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  > .duration {
    margin-bottom: 3px;

    font-size: 1.1rem;
    color: ${Color.DarkMint};
  }

  > .title {
    height: fit-content;

    margin-bottom: 8px;

    font-size: 1.3rem;
    font-weight: 500;
    color: ${Color.Black};
    text-decoration: none;
    word-break: keep-all;
  }

  > .summary {
    width: 350px;

    font-size: 1rem;
    line-height: 30px;
    color: ${Color.DarkGrey};
  }

  > .link {
    display: flex;
    align-items: center;

    margin-top: 4px;

    font-size: 1.1rem;
    color: ${Color.Blue};
    text-decoration: none;

    transition: color 0.1s;

    &:hover {
      color: ${Color.BlueHover};
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    > .summary {
      width: 300px;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    > .summary {
      width: 250px;
      line-height: 25px;
    }
  }
`;
