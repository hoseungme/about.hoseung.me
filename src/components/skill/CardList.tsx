import styled from "styled-components";

import { TransitionContainer } from "../common/TransitionContainer";
import { SkillCard } from "./Card";

import { useValueByMedia } from "../../hooks/useValueByMedia";

import { ISkill } from "../../interfaces/section/Skill";

import { Media } from "../../constants/Media";

interface SkillCardListProps {
  skills: ISkill[];
}

export function SkillCardList({ skills }: SkillCardListProps) {
  const columnSize = useValueByMedia({ desktop: 5, tablet: 5, mobile: 3 });

  return (
    <Container columnSize={columnSize}>
      {skills.map((skill, index) => (
        <TransitionContainer
          key={index}
          className="card"
          effect="fadeInUp"
          delay={0.25 * (index % columnSize)}
        >
          <SkillCard skill={skill} />
        </TransitionContainer>
      ))}
    </Container>
  );
}

const Container = styled.div<{ columnSize: number }>`
  width: ${({ columnSize }) => 140 * columnSize}px;

  display: flex;
  justify-content: center;

  > .card {
    width: 100px;

    padding: 0 20px 20px;
  }

  ${Media.Mobile} {
    width: ${({ columnSize }) => 90 * columnSize}px;

    > .card {
      width: 70px;

      padding: 0 10px 20px;
    }
  }
`;
