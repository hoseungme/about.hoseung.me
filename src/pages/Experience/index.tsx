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
    detail: catchFashion,
  },
  {
    id: "viva-republica",
    detail: vivaRepublica,
  },
];

const detailMap = new Map(data.map(({ id, detail }) => [id, { detail }]));

export function Experience() {
  const { id } = useParams<{ id: string }>();
  const { detail } = React.useMemo(() => detailMap.get(id)!, [id]);
  return (
    <Container>
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

  padding: 1.5rem 0;
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
