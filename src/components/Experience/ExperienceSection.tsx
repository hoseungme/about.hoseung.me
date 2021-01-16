import React from "react";
import styled from "styled-components";

import { IExperience } from "../../interfaces/section/Experience";
import { ExperienceCardList } from "./ExperienceCardList";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const ExperienceSection: React.FC<{
  experiences: IExperience[];
}> = ({ experiences }) => {
  return (
    <Container>
      <div className="summary">
        <div className="topic">EXPERIENCE</div>
        <div className="title">저는 이런 경험을 쌓아왔습니다.</div>
      </div>
      <ExperienceCardList experiences={experiences} />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  padding: 200px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .summary {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;

    > .topic {
      width: fit-content;

      margin-bottom: 10px;

      font-weight: 700;
      color: ${Color.DarkMint};
    }

    > .title {
      font-size: 1.35rem;
      font-weight: 700;
      color: ${Color.Black};
      word-break: keep-all;
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    align-items: flex-start;

    padding: 150px 0;
    margin-left: 30%;

    > .summary {
      align-items: flex-start;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    align-items: flex-start;

    padding: 100px 0;
    margin-left: 8%;

    > .summary {
      align-items: flex-start;
    }
  }
`;
