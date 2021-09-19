import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { GA } from "../services/ga";

import { experienceDetailMap } from "../data/experience";

import { Color } from "../constants/Color";
import { Media } from "../constants/Media";

import { Markdown } from "../components/experience/Markdown";

export function ExperienceDetail() {
  const { id } = useParams<{ id: string }>();

  const [bottomRef, bottomInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (bottomInView) {
      GA.trackExperienceDetailEventParams({ action: "All Content Viewed" });
    }
  }, [bottomInView]);

  return (
    <Container>
      <Link className="back-button" to="/">
        <BiArrowBack />
        메인으로 돌아가기
      </Link>
      <div className="content">
        <Markdown content={experienceDetailMap.get(id)!} />
      </div>
      <div ref={bottomRef} />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 25% 20px;

  > .back-button {
    display: flex;
    align-items: center;

    margin-top: 20px;

    font-size: 1.3rem;
    font-weight: 500;
    color: ${Color.Blue};
    text-decoration: none;

    transition: color 0.1s;

    &:hover {
      color: ${Color.BlueHover};
    }

    > :first-child {
      margin-right: 4px;
    }
  }

  ${Media.Tablet} {
    padding: 0 20% 20px;
  }

  ${Media.Mobile} {
    padding: 0 2% 20px;
  }
`;
