import styled from "styled-components";

import { TransitionContainer } from "../common/TransitionContainer";
import { List } from "./List";

import { Skill } from "../../data/skill";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface SkillSectionProps {
  skills: Skill[];
}

export function SkillSection({ skills }: SkillSectionProps) {
  return (
    <Container>
      <header>
        <TransitionContainer
          className="topic"
          effect="fadeInDown"
          translateY={50}
        >
          MY SKILLS
        </TransitionContainer>
        <TransitionContainer
          className="title"
          effect="fadeInDown"
          delay={0.2}
          translateY={50}
          duration={0.2}
          intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
        >
          저는 이런 기술을 가지고 있어요!
        </TransitionContainer>
      </header>
      <List skills={skills} />
    </Container>
  );
}

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10% 0;

  box-sizing: border-box;

  > header {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    > .topic {
      width: fit-content;

      margin-bottom: 20px;

      font-size: 0.85rem;
      font-weight: 700;

      color: ${Color.DarkMint};
    }

    > .title {
      width: 100%;

      margin-bottom: 80px;

      font-size: 1.4rem;
      font-weight: 600;
    }
  }

  > .content {
    width: 100%;
  }

  ${Media.Mobile} {
    > header > .title {
      margin-bottom: 40px;
    }
  }
`;
