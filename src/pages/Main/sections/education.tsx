import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

export function EducationSection() {
  return (
    <Container>
      <SectionTitle>Educations</SectionTitle>
      <FadeIn className="item-container">
        <div className="name font-bold">대덕소프트웨어마이스터고등학교</div>
        <div className="period font-medium">2018.03 ~ 2021.01</div>
        <LinkButton
          className="link-to-homepage font-medium"
          to="https://dsmhs.djsch.kr"
        >
          홈페이지
        </LinkButton>
      </FadeIn>
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
