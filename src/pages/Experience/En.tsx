import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Container } from "./components/Container";
import { Markdown } from "./components/Markdown";
import { Experiences } from "./contents";

export function ExperienceEn() {
  const { id } = useParams<{ id: string }>();
  const experience = Experiences.find((e) => e.id === id)!.en;

  return (
    <Container>
      <Title>{experience.name}</Title>
      <Markdown>{experience.markdown}</Markdown>
    </Container>
  );
}

const Title = styled.h1`
  margin-bottom: 16px;
`;
