import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { ExperienceCard } from "./Card";
import { TransitionContainer } from "../common/TransitionContainer";

import { useValueByMedia } from "../../hooks/useValueByMedia";

import { IExperience } from "../../interfaces/section/Experience";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

export const ExperienceCardList: React.FC<{ experiences: IExperience[] }> = ({
  experiences,
}) => {
  const isMobile = useValueByMedia({
    desktop: false,
    tablet: true,
    mobile: true,
  });

  return (
    <Container>
      {experiences.map((experience, index) => {
        const isPositionLeft = isMobile ? false : index % 2 === 0;

        return (
          <li
            key={index}
            className={classNames("card", {
              left: isPositionLeft,
              right: !isPositionLeft,
            })}
          >
            <TransitionContainer
              effect="fadeInUp"
              duration={0.3}
              translateY={30}
              intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
            >
              <ExperienceCard
                position={isPositionLeft ? "left" : "right"}
                {...experience}
              />
            </TransitionContainer>
            <div className="marker" />
          </li>
        );
      })}
    </Container>
  );
};

const Container = styled.ul`
  position: relative;

  width: 2px;

  display: flex;
  flex-direction: column;

  padding: 200px 0;

  background-color: ${Color.DarkMint};

  list-style: none;

  &:before {
    content: "";

    position: absolute;

    top: 0;

    width: 2px;
    height: 200px;

    background: linear-gradient(${Color.DarkWhite}, ${Color.DarkMint});
  }

  &:after {
    content: "";

    position: absolute;

    bottom: 0;

    width: 2px;
    height: 200px;

    background: linear-gradient(${Color.DarkMint}, ${Color.DarkWhite});
  }

  > .card {
    position: relative;

    width: fit-content;

    &.left {
      left: -430px;

      > .marker {
        right: -87px;
      }
    }

    &.right {
      right: -80px;

      > .marker {
        left: -85px;
      }
    }

    > .marker {
      position: absolute;

      top: 5px;

      width: 8px;
      height: 8px;

      border: 2px solid ${Color.DarkMint};
      border-radius: 50%;

      background-color: ${Color.White};
    }

    &:not(:last-child) {
      padding-bottom: 250px;
    }
  }

  ${Media.Tablet} {
    > .card {
      &.left {
        left: -350px;

        > .marker {
          right: -57px;
        }
      }

      &.right {
        right: -50px;

        > .marker {
          left: -55px;
        }
      }
    }
  }

  ${Media.Mobile} {
    > .card {
      &.right {
        right: -40px;

        > .marker {
          left: -45px;
        }
      }

      &:not(:last-child) {
        padding-bottom: 100px;
      }
    }
  }
`;
