import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

export type ActivitySectionData = {
  title: string;
  links: { title: string; to: string }[];
}[];

interface Props {
  data: ActivitySectionData;
}

export function ActivitySection({ data }: Props) {
  return (
    <Container>
      <SectionTitle>Activities</SectionTitle>
      {data.map(({ title, links }, index) => (
        <FadeIn key={index} className="item-container">
          <div className="description font-regular">{title}</div>
          <ul className="buttons">
            {links.map((link) => (
              <li key={link.title}>
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

    > .description {
      margin: 0.2rem 0 0.8rem;
      font-size: 1.05rem;
    }

    > .buttons {
      display: flex;
      flex-flow: row wrap;

      > li {
        flex-shrink: 0;
        padding: 0;
        font-size: 0.85rem;

        &::before {
          display: none;
        }

        &:not(:last-child) {
          margin: 0 0.5rem 0.5rem 0;
        }
      }
    }
  }
`;
