import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

import { LinkButton } from "./LinkButton";
import { SectionTitle } from "./SectionTitle";

const data = [
  {
    title:
      "토스 프론트엔드 라이브러리 오픈소스 Slash의 메인테이너로 활동하고 있습니다.",
    links: [
      {
        title: "활동 목록",
        to: "https://github.com/toss/slash/issues?q=involves%3AHoseungJang",
      },
    ],
  },
  {
    title: "아이디어를 얻으면 오픈소스로 만들어 공개하고 있습니다.",
    links: [
      {
        title: "오픈소스 목록",
        to: "https://github.com/HoseungJang/opensources/blob/main/ko.md",
      },
    ],
  },
];

export function ActivitySection() {
  return (
    <Container>
      <SectionTitle>Activities</SectionTitle>
      {data.map(({ title, links }) => (
        <FadeIn key={title} className="item-container">
          <div className="description font-regular">{title}</div>
          <ul className="buttons">
            {links.map((link) => (
              <li key={link.title}>
                <LinkButton className="link font-medium" to={link.to}>
                  {link.title}
                </LinkButton>
              </li>
            ))}
          </ul>
        </FadeIn>
      ))}
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
