import { format } from "date-fns";
import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

export type EducationSectionData = {
  name: string;
  period: {
    start: Date;
    end: Date;
  };
  link: { title: string; to: string };
}[];

interface Props {
  data: EducationSectionData;
}

export function EducationSection({ data }: Props) {
  return (
    <Container>
      <SectionTitle>Educations</SectionTitle>
      {data.map((education) => (
        <FadeIn className="item-container">
          <div className="name font-bold">{education.name}</div>
          <div className="period font-medium">
            {format(education.period.start, "yyyy.MM")} ~{" "}
            {format(education.period.end, "yyyy.MM")}
          </div>
          <LinkButton
            className="link-to-homepage font-medium"
            to={education.link.to}
          >
            {education.link.title}
          </LinkButton>
        </FadeIn>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  > .item-container {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    > .name {
      font-size: 1.8rem;
    }

    > .period {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
    }

    > .link-to-homepage {
      font-size: 0.85rem;
    }
  }
`;
