import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { ProjectCardList } from "./ProjectCardList";

import { IProject } from "../../interfaces/section/Project";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const ProjectSection: React.FC<{ projects: IProject[] }> = ({
  projects,
}) => {
  return (
    <Container>
      <header>
        <TransitionContainer
          className="topic"
          effect="fadeInDown"
          translateY={50}
          duration={0.2}
          intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
        >
          MY PROJECTS
        </TransitionContainer>
        <div className="info">
          <TransitionContainer
            className="title"
            effect="fadeInDown"
            delay={0.2}
            duration={0.2}
            intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
          >
            <h1>프로젝트 둘러보기</h1>
          </TransitionContainer>
          <TransitionContainer
            className="description"
            effect="fadeInUp"
            delay={0.4}
            duration={0.2}
            intersectionOptions={{ rootMargin: "-250px 0px -250px 0px" }}
          >
            <p>새로운 것을 배우고 싶을 때면</p>
            <p>서브 프로젝트를 진행합니다.</p>
            <p>그러다 보면 마치 프로그래밍을</p>
            <p>처음 배울 때로 돌아가는 기분이 드는데,</p>
            <p>이는 개발이 질릴 날이 없도록 만들어주죠.</p>
          </TransitionContainer>
        </div>
      </header>
      <article>
        <ProjectCardList projects={projects} />
      </article>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;

  padding: 5% 10%;

  box-sizing: border-box;

  > header {
    display: flex;
    flex-direction: column;

    padding: 5% 3%;

    > .topic {
      margin-bottom: 20px;

      font-size: 0.85rem;
      font-weight: 700;

      color: ${Color.DarkMint};
    }

    > .info {
      display: flex;

      > .title {
        width: fit-content;

        margin-right: 10%;

        word-break: keep-all;

        color: ${Color.Black};

        > h1 {
          margin: 0;
        }
      }

      > .description {
        display: flex;
        flex-direction: column;

        font-size: 1rem;

        word-break: break-all;

        color: ${Color.LightBlack};

        > * {
          margin: 3px 0;
        }
      }
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    padding: 5% 2%;

    > header {
      align-items: center;

      > .info {
        flex-direction: column;
        align-items: center;

        > .title {
          width: fit-content;

          margin-right: 0;
          margin-bottom: 20px;
        }

        > .description {
          text-align: center;

          word-break: keep-all;
        }
      }
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    padding: 5% 1%;
  }
`;
