import { ReactNode, createElement } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import styled from "styled-components";

import { adaptive } from "constants/colors";

interface Props {
  children: string;
}

export function Markdown({ children }: Props) {
  return (
    <>
      <TableOfContents>{children}</TableOfContents>
      <div style={{ height: 24 }} />
      <Base
        components={{
          h1: HeadingElement,
          h2: HeadingElement,
          h3: HeadingElement,
          h4: HeadingElement,
          h5: HeadingElement,
          h6: HeadingElement,
        }}
        rehypePlugins={
          [
            rehypeRaw,
            rehypeSanitize(defaultSchema),
          ] as ReactMarkdown.PluggableList
        }
      >
        {children}
      </Base>
    </>
  );
}

function TableOfContents({ children }: Props) {
  const tableOfContents = createTableOfContents(children);

  return <Base>{tableOfContents}</Base>;
}

function createTableOfContents(markdown: string) {
  const headings = markdown
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((line) => {
      const depth = line.match(/#/g)!.length;
      const title = line.replace(/[#][^ ]* /g, "");
      const link = `#${createHeadingElementId(title)}`;
      return { depth, title, link };
    });
  const minDepth = Math.min(...headings.map((heading) => heading.depth));

  return [
    "---",
    ...headings.map((heading) => {
      const indent = "  ".repeat(heading.depth - minDepth);
      return `${indent}- [${heading.title}](${heading.link})`;
    }),
    "---",
  ].join("\n");
}

interface HeadingElementProps {
  node: { tagName: string };
  children: ReactNode[];
}

function HeadingElement(props: HeadingElementProps) {
  const innerText = props.children[0] as string;

  return createElement(props.node.tagName, {
    id: createHeadingElementId(innerText),
    children: innerText,
    style: { scrollMarginTop: 96 },
  });
}

function createHeadingElementId(innerText: string) {
  return innerText.replace(/\s/g, "_");
}

const Base = styled(ReactMarkdown)`
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
