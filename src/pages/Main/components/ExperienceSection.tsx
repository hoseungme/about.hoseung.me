import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";
import { format } from "date-fns";

export type ExperienceSectionData = {
  name: string;
  role: string;
  period: {
    start: Date;
    end: Date | null;
  };
  links: { title: string; to: string }[];
}[];

interface Props {
  data: ExperienceSectionData;
}

export function ExperienceSection({ data }: Props) {
  return (
    <Container>
      <SectionTitle>Experiences</SectionTitle>
      {data.map((experience, index) => (
        <FadeIn key={index} className="item-container">
          <div className="company font-bold">{experience.name}</div>
          <div className="role font-regular">{experience.role}</div>
          <div className="period font-medium">
            {format(experience.period.start, "yyyy.MM")} ~{" "}
            {experience.period.end != null
              ? format(experience.period.end, "yyyy.MM")
              : null}
          </div>
          <ul className="buttons">
            {experience.links.map((link, index) => (
              <li key={index}>
                <LinkButton className="link font-medium" to={link.to}>
                  {link.title}
                </LinkButton>
              </li>
            ))}
          </ul>
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

    > .company {
      font-size: 1.8rem;
    }

    > .role {
      margin: 0.2rem 0 0.4rem;
      font-size: 1.05rem;
    }

    > .period {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
    }

    > .buttons {
      display: flex;

      > li {
        padding: 0;
        font-size: 0.85rem;

        &::before {
          display: none;
        }

        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
