import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { SkillCardList } from "./SkillCardList";

import { ISkill } from "../../interfaces/section/Skill";

import { Color } from "../../constants/Color";

export const SkillSection: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
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
