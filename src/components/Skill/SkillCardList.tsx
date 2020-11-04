import React, { useMemo } from "react";
import styled from "styled-components";
import { useMediaLayout } from "use-media";

import { SkillCard } from "./SkillCard";

import { ISkill } from "../../interfaces/Skill";
import { TransitionContainer } from "../Layout/TransitionContainer";
import { Device } from "../../constants/Device";

export const SkillCardList: React.FC<{ skills: ISkill[] }> = ({ skills }) => {
  const mobile = useMediaLayout({ maxWidth: Device.Mobile });

  const columnSize = useMemo(() => (mobile ? 3 : 5), [mobile]);

  return (
    <Container columnSize={columnSize}>
      {skills.map((skill, index) => (
        <TransitionContainer
          key={index}
          className="card"
          type="fadeInToUp"
          intersecting={0.8}
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
