import { useParams } from "react-router-dom";
import { Container } from "./components/Container";
import { Markdown } from "./components/Markdown";
import { Experiences } from "./contents";

export function ExperienceKo() {
  const { id } = useParams<{ id: string }>();
  const experience = Experiences.find((e) => e.id === id)?.ko ?? "";

  return (
    <Container>
      <Markdown>{experience}</Markdown>
    </Container>
  );
}
