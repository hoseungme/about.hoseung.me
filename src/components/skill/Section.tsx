import styled from "styled-components";

import { TransitionContainer } from "../common/TransitionContainer";
import { SkillCardList } from "./CardList";

import { Skill } from "../../data/skill";

import { Color } from "../../constants/Color";

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
      </header>
      <article>
        <SkillCardList skills={skills} />
      </article>
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

  background-color: ${Color.WhiteGrey};

  > header {
    > .topic {
      width: fit-content;

      margin-bottom: 20px;

      font-size: 0.85rem;
      font-weight: 700;

      color: ${Color.DarkMint};
    }
  }
`;
