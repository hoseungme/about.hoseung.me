import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { ValuesCard } from "./ValuesCard";

import { IValues } from "../../interfaces/section/Values";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const ValuesSection: React.FC<{ values: IValues[] }> = ({ values }) => {
  return (
    <Container>
      <summary>
        <TransitionContainer
          className="topic"
          effect="fadeInDown"
          duration={0.2}
          translateY={50}
          intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
        >
          WHO AM I
        </TransitionContainer>
        <div className="info">
          <TransitionContainer
            className="title"
            effect="fadeInDown"
            delay={0.2}
            duration={0.2}
            translateY={50}
            intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
          >
            저는 이런 사람입니다.
          </TransitionContainer>
        </div>
      </summary>
      <aside>
        {values.map((props, index) => (
          <TransitionContainer
            key={index}
            className="card"
            effect="fadeInDown"
            delay={0.1 * index}
            duration={0.5}
            intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
          >
            <ValuesCard key={index} page={index + 1} {...props} />
          </TransitionContainer>
        ))}
      </aside>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 10% 13%;

  background-color: ${Color.WhiteGrey};

  > summary {
    margin-right: 8%;

    > .topic {
      margin-bottom: 20px;

      font-size: 0.85rem;
      font-weight: 700;

      color: ${Color.DarkMint};
    }

    > .info {
      > .title {
        font-size: 1.35rem;
        font-weight: 700;
        word-break: keep-all;

        color: ${Color.Black};
      }
    }
  }

  > aside {
    width: 500px;
    > card {
      width: 100%;
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    > aside {
      width: 300px;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    > summary {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin-right: 0;
      margin-bottom: 50px;

      > .topic {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    > aside {
      width: 100%;
    }
  }
`;
