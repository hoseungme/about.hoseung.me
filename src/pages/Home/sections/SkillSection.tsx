import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../../../components/Layout/TransitionContainer";
import { SkillCardList } from "../../../components/Skill/SkillCardList";

import { ISkill } from "../../../interfaces/Skill";

import { Color } from "../../../constants/Color";

export const SkillSection: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
  return (
    <Container>
      <header>
        <TransitionContainer
          className="topic"
          type="fadeInToDown"
          intersecting={1}
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
};

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10% 0;

  box-sizing: border-box;

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
