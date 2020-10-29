import React from "react";
import styled from "styled-components";

import { ISkill } from "../../interfaces/Skill";

import { Device } from "../../constants/Device";
import { Color } from "../../constants/Color";

export const SkillCard: React.FC<ISkill> = ({ img, name }) => {
  return (
    <Container>
      <div className="image">
        <img src={img} />
      </div>
      <div className="name">{name}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  > .image {
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
    font-weight: 500;
    color: ${Color.FontBlack};
  }

  @media (max-width: ${Device.Mobile}px) {
    > .image {
      width: 70px;
      height: 70px;

      padding: 5px;
    }
  }
`;
