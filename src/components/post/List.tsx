import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { Media } from "../../constants/Media";

import { TransitionContainer } from "../common/TransitionContainer";
import { Card, CardPlaceholder } from "./Card";

interface ListProps {
  columnSize: number;
  posts: Models.PostListShow["data"];
}

export function List({ columnSize, posts }: ListProps) {
  return (
    <Container columnSize={columnSize}>
      {posts.map((post, index) => (
        <li key={post.id}>
          <TransitionContainer
            className="content-wrapper"
            effect="fadeInUp"
            delay={0.2 * (index % columnSize)}
            translateY={25}
            duration={0.6}
            intersectionOptions={{ rootMargin: "-250px 0px -100px 0px" }}
          >
            <Card post={post} />
          </TransitionContainer>
        </li>
      ))}
    </Container>
  );
}

interface ListPlaceholderProps {
  columnSize: number;
  count: number;
}

export function ListPlaceholder({ columnSize, count }: ListPlaceholderProps) {
  return (
    <Container columnSize={columnSize}>
      {new Array(count).fill(null).map((_, index) => (
        <li key={index}>
          <div className="content-wrapper">
            <CardPlaceholder />
          </div>
        </li>
      ))}
    </Container>
  );
}

const Container = styled.ul<{ columnSize: number }>`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  align-items: stretch;

  > li {
    width: calc(
      ${({ columnSize }) =>
        `(100% - (25px * ${columnSize - 1})) / ${columnSize}`}
    );

    ${Media.Tablet} {
      width: calc(
        ${({ columnSize }) =>
          `(100% - (20px * ${columnSize - 1})) / ${columnSize}`}
      );
    }

    ${Media.Mobile} {
      width: 100%;
    }

    display: flex;

    &:not(:nth-child(${({ columnSize }) => columnSize}n)) {
      margin-right: 25px;

      ${Media.Tablet} {
        margin-right: 20px;
      }

      ${Media.Mobile} {
        margin-right: 0;
      }
    }

    &:nth-last-child(n + ${({ columnSize }) => columnSize + 1}) {
      margin-bottom: 40px;
    }

    > .content-wrapper {
      width: 100%;
    }
  }
`;
