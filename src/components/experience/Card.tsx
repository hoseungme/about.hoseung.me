import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

import { Experience } from "../../data/experience";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface ExperienceCardProps {
  position: "left" | "right";
  experience: Experience;
}

export function ExperienceCard({ position, experience }: ExperienceCardProps) {
  const { id, title, duration, summary, detail } = experience;
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
}

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
    font-weight: 400;
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

  ${Media.Tablet} {
    > .summary {
      width: 300px;
    }
  }

  ${Media.Mobile} {
    > .summary {
      width: 250px;
      line-height: 25px;
    }
  }
`;
