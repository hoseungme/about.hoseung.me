import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { SkillCard } from "./SkillCard";

import { useValueByMedia } from "../../hooks/useValueByMedia";

import { ISkill } from "../../interfaces/Skill";

import { Device } from "../../constants/Device";

export const SkillCardList: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
  const columnSize = useValueByMedia({ desktop: 5, tablet: 5, mobile: 3 });

  return (
    <Container columnSize={columnSize}>
      {skills.map((skill, index) => (
        <TransitionContainer
          key={index}
          className="card"
          effect="fadeInToUp"
          delay={0.25 * (index % columnSize)}
        >
          <SkillCard {...skill} />
        </TransitionContainer>
      ))}
    </Container>
  );
};

const Container = styled.div<{ columnSize: number }>`
  width: ${({ columnSize }) => 140 * columnSize}px;

  display: flex;
  justify-content: center;

  > .card {
    width: 100px;

    padding: 0 20px 20px;
  }

  @media (max-width: ${Device.Mobile}px) {
    width: ${({ columnSize }) => 90 * columnSize}px;

    > .card {
      width: 70px;

      padding: 0 10px 20px;
    }
  }
`;
