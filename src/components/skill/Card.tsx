import styled from "styled-components";

import { Skill } from "../../data/skill";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const { imageURL, name } = skill;
  return (
    <Container>
      <div className="image">
        <img src={imageURL} alt="Skill" />
      </div>
      <div className="name">{name}</div>
      <div className="background" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  > .image {
    z-index: 1;

    width: 100px;
    height: 100px;

    padding: 10px;

    box-sizing: border-box;

    > img {
      width: 100%;
      height: 100%;

      object-fit: contain;
    }
  }

  > .name {
    z-index: 1;

    font-weight: 500;
    color: ${Color.LightBlack};
  }

  > .background {
    position: absolute;

    top: 50%;
    left: 50%;

    z-index: 0;

    width: 1px;
    height: 1px;
  }

  ${Media.Mobile} {
    > .image {
      width: 70px;
      height: 70px;

      padding: 5px;
    }

    > .background {
      position: absolute;

      top: 50%;
      left: 50%;

      z-index: 0;

      width: 1px;
      height: 1px;

      box-shadow: 0 0 40px 10px ${Color.Mint};
    }
  }
`;
