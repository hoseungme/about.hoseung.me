import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

export interface ProfileSectionData {
  title: string;
  descriptions: string[];
}

interface Props {
  data: ProfileSectionData;
}

export function ProfileSection({ data }: Props) {
  return (
    <Container>
      <FadeIn as="p" className="title font-bold">
        {data.title}
      </FadeIn>
      <FadeIn as="ul" className="descriptions">
        {data.descriptions.map((description, index) => (
          <li key={index}>
            <p className="font-medium">{description}</p>
          </li>
        ))}
      </FadeIn>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  > .title {
    font-size: 60px;
    margin: 2em 0 2em;
    background: linear-gradient(var(--green0), var(--green2));
    -webkit-background-clip: text;
    color: transparent;
    white-space: pre-line;

    @media screen and (max-width: 650px) {
      font-size: 35px;
    }
  }

  > .descriptions > li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;
