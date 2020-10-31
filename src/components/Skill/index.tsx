import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { SkillCardList } from "./SkillCardList";

import { ISkill } from "../../interfaces/Skill";
import { Color } from "../../constants/Color";

export const Skill: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
  return (
    <Container>
      <header>
        <TransitionContainer
          className="topic"
          type="fadeInToDown"
          intersecting={1}
        >
          My Skills
        </TransitionContainer>
      </header>
      <main>
        <SkillCardList skills={skills} />
      </main>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

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
