import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import { GA } from "../services/ga";

import { experienceDetailMap } from "../data/experience";

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
      <Markdown content={experienceDetailMap.get(id)!} />
      <div ref={bottomRef} />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 25% 20px;

  ${Media.Tablet} {
    padding: 0 20% 20px;
  }

  ${Media.Mobile} {
    padding: 0 2% 20px;
  }
`;
