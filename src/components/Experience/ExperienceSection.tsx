import React from "react";
import styled from "styled-components";
import { Device } from "../../constants/Device";
import { experiences } from "../../data/section/experiences";

import { IExperience } from "../../interfaces/section/Experience";
import { ExperienceCardList } from "./ExperienceCardList";

export const ExperienceSection: React.FC<{
  experiences: IExperience[];
}> = () => {
  return (
    <Container>
      <ExperienceCardList experiences={experiences} />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: ${Device.Tablet}px) {
    justify-content: flex-start;

    margin-left: 30%;
  }

  @media (max-width: ${Device.Mobile}px) {
    justify-content: flex-start;

    margin-left: 8%;
  }
`;
