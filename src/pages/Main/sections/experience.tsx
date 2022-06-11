import styled from "styled-components";

import { FadeIn } from "../../../components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

export function ExperienceSection() {
  return (
    <Container>
      <SectionTitle>커리어 요약</SectionTitle>
      <FadeIn className="item-container">
        <div className="company font-bold">비바리퍼블리카 (토스)</div>
        <div className="role font-regular">프론트엔드 엔지니어</div>
        <div className="period font-medium">2022.05 ~ 현재</div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="/experiences/viva-republica"
            >
              자세히 보기
            </LinkButton>
          </li>
        </ul>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="company font-bold">스마일벤처스 (캐치패션)</div>
        <div className="role font-regular">프론트엔드/백엔드 엔지니어</div>
        <div className="period font-medium">2020.08 ~ 2022.04</div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="https://medium.com/@kurtlee/serverless%EB%A1%9C-e-commerce-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%B8%94%EB%9E%99%ED%94%84%EB%9D%BC%EC%9D%B4%EB%8D%B0%EC%9D%B4-%ED%8A%B8%EB%9E%98%ED%94%BD-%EC%8D%B0-%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85%EC%97%90%EC%84%9C-cto%EB%8A%94-%EB%AD%98-%ED%95%98%EB%8A%94-%EC%9E%90%EB%A6%AC%EC%9D%B8%EA%B0%80-a6f9d9beb930"
            >
              팀 소개
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="/experiences/catch-fashion"
            >
              자세히 보기
            </LinkButton>
          </li>
        </ul>
      </FadeIn>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  > .item-container {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    > .company {
      font-size: 1.8rem;
    }

    > .role {
      margin: 0.2rem 0 0.4rem;
      font-size: 1.05rem;
    }

    > .period {
      margin-bottom: 0.8rem;
      font-size: 0.9rem;
    }

    > .buttons {
      display: flex;

      > li {
        padding: 0;
        font-size: 0.85rem;

        &::before {
          display: none;
        }

        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
