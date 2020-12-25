import React from "react";
import styled from "styled-components";

import { ExperienceCard } from "./ExperienceCard";
import { TransitionContainer } from "../Layout/TransitionContainer";

import { IExperience } from "../../interfaces/section/Experience";

import { Color } from "../../constants/Color";

export const ExperienceCardList: React.FC<{ experiences: IExperience[] }> = ({
  experiences,
}) => {
  return (
    <Container>
      {experiences.map((experience, index) => (
        <div key={index} className="card">
          <TransitionContainer
            effect="fadeInUp"
            duration={0.5}
            translateY={30}
            intersectionOptions={{ rootMargin: "-200px" }}
          >
            <ExperienceCard {...experience} />
          </TransitionContainer>
          <div className="marker" />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  padding: 150px 0;

  border-right: 2px solid ${Color.DarkMint};

  &:before {
    content: "";

    position: absolute;

    top: 0;
    right: -2px;

    width: 2px;
    height: 150px;

    background: linear-gradient(${Color.DarkWhite}, ${Color.DarkMint});
  }

  &:after {
    content: "";

    position: absolute;

    bottom: 0;
    right: -2px;

    width: 2px;
    height: 150px;

    background: linear-gradient(${Color.DarkMint}, ${Color.DarkWhite});
  }

  > .card {
    position: relative;

    padding-right: 30px;

    box-sizing: border-box;

    > .marker {
      position: absolute;

      top: 5px;
      right: -7px;

      width: 8px;
      height: 8px;

      border: 2px solid ${Color.DarkMint};
      border-radius: 50%;

      background-color: ${Color.White};
    }

    &:not(:last-child) {
      padding-bottom: 150px;
    }
  }
`;
