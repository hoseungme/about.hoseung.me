import styled from "styled-components";

import { adaptive } from "constants/colors";

import { FadeIn } from "components/common/FadeIn";

import { SectionTitle } from "./SectionTitle";

export interface SkillSectionData {
  descriptions: string[];
}

interface Props {
  data: SkillSectionData;
}

export function SkillSection({ data }: Props) {
  return (
    <Container>
      <SectionTitle>Skills</SectionTitle>
      <ul>
        {data.descriptions.map((description, index) => (
          <FadeIn key={index} as="li">
            <p className="font-regular">{renderDescription(description)}</p>
          </FadeIn>
        ))}
      </ul>
    </Container>
  );
}

function renderDescription(description: string) {
  return description.split("**").map((str, index) => {
    if (index % 2 === 1) {
      return <Highlight key={index}>{str}</Highlight>;
    }

    return <span key={index}>{str}</span>;
  });
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  > ul > li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Highlight = styled.span.attrs({ className: "font-medium" })`
  color: ${adaptive.green2};
`;
