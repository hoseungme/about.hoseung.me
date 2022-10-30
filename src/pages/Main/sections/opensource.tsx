import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

export function OpensourceSection() {
  return (
    <Container>
      <SectionTitle>오픈소스 기여</SectionTitle>
      <FadeIn className="item-container">
        <div className="description font-regular">
          토스 프론트엔드 라이브러리 오픈소스인 Slash의 메인테이너로 활동하고
          있습니다.
        </div>
        <ul className="buttons">
          <li>
            <LinkButton
              className="link font-medium"
              to="https://github.com/toss/slash"
            >
              Slash Github
            </LinkButton>
          </li>
          <li>
            <LinkButton
              className="link font-medium"
              to="https://github.com/toss/slash/pulls?q=involves%3AHoseungJang"
            >
              기여한 PR 및 Issue 목록
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

    > .description {
      margin: 0.2rem 0 0.8rem;
      font-size: 1.05rem;
    }

    > .buttons {
      display: flex;
      flex-flow: row wrap;

      > li {
        flex-shrink: 0;
        padding: 0;
        font-size: 0.85rem;

        &::before {
          display: none;
        }

        &:not(:last-child) {
          margin: 0 0.5rem 0.5rem 0;
        }
      }
    }
  }
`;
