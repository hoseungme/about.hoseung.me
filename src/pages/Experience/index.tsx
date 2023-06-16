import React from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import styled from "styled-components";

import { adaptive } from "constants/colors";

import catchFashion from "./catch-fashion.md";
import vivaRepublica from "./viva-republica.md";

const data = [
  {
    id: "catch-fashion",
    title: "스마일벤처스 커리어 상세 페이지 입니다.",
    detail: catchFashion,
  },
  {
    id: "viva-republica",
    title: "비바리퍼블리카 (토스) 커리어 상세 페이지 입니다.",
    detail: vivaRepublica,
  },
];

const detailMap = new Map(
  data.map(({ id, title, detail }) => [id, { title, detail }])
);

export function Experience() {
  const { id } = useParams<{ id: string }>();
  const { title, detail } = React.useMemo(() => detailMap.get(id)!, [id]);
  return (
    <Container>
      <p className="title">{title}</p>
      <Markdown
        rehypePlugins={
          [
            rehypeRaw,
            rehypeSanitize(defaultSchema),
          ] as ReactMarkdown.PluggableList
        }
      >
        {detail}
      </Markdown>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  > .title {
    margin: 1.5rem 0 2.5rem;
  }
`;

const Markdown = styled(ReactMarkdown)`
  a {
    color: ${adaptive.green2};
    font-weight: 500;
    transition: color 0.1s;

    &:hover {
      color: ${adaptive.green3};
    }
  }

  ul {
    margin: 0.8rem 0;

    > li {
      margin: 0.4rem 0;
    }
  }
`;
