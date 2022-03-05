import styled from "styled-components";

import { FadeIn } from "../../../components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

export function OpensourceSection() {
  return (
    <Container>
      <SectionTitle>오픈소스 기여</SectionTitle>
      <FadeIn className="item-container">
        <div className="name font-bold">개인 블로그</div>
        <div className="description font-regular">
          개발하면서 배우고 느낀 내용들을 정리하고, 커뮤니티에 공유하고
          있습니다.
        </div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="https://blog.hoseung.me/"
            >
              자세히 보기
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="https://blog.hoseung.me/tags/%EA%B0%9C%EC%9D%B8%20%EB%B8%94%EB%A1%9C%EA%B7%B8"
            >
              개발 일지
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="https://github.com/hoseung-only"
            >
              깃허브
            </LinkButton>
          </li>
        </ul>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="name font-bold">typed-express</div>
        <div className="description font-regular">
          Node.js 웹 프레임워크 Express.js를 type-safe하게 사용하고, 라우트를
          순회하여 OpenAPI Specification을 자동 생성해주는 프로젝트
        </div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="https://github.com/HoseungJang/typed-express"
            >
              깃허브
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="https://blog.hoseung.me/2021-12-22-fully-typed-backend"
            >
              개발 일지
            </LinkButton>
          </li>
        </ul>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="name font-bold">request-typer</div>
        <div className="description font-regular">
          백엔드에서 API 스펙을 정의하기 위한 JSON Schema Builder, 타입
          Validatior, OpenAPI Specification Builder 라이브러리 프로젝트
        </div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="https://github.com/HoseungJang/request-typer"
            >
              깃허브
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="https://blog.hoseung.me/2021-12-18-request-typer"
            >
              개발 일지
            </LinkButton>
          </li>
        </ul>
      </FadeIn>
      <FadeIn className="item-container">
        <div className="name font-bold">oas-api-client</div>
        <div className="description font-regular">
          OpenAPI Specification을 받아서 API Client SDK를 자동 생성해주는
          프로젝트
        </div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="https://github.com/HoseungJang/oas-api-client"
            >
              깃허브
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="https://blog.hoseung.me/2021-05-01-api-client-sdk"
            >
              개발 일지
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

    > .name {
      font-size: 1.8rem;
    }

    > .description {
      margin: 0.2rem 0 0.8rem;
      font-size: 1.05remrem;
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
