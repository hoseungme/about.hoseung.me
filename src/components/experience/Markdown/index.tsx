import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";
import styled from "styled-components";

import { AnchorBlock } from "./renderers/AnchorBlock";
import { CodeBlock } from "./renderers/CodeBlock";
import { ImageBlock } from "./renderers/ImageBlock";
import { BlockquoteBlock } from "./renderers/BlockquoteBlock";
import { UListBlock } from "./renderers/UListBlock";
import { OListBlock } from "./renderers/OListBlock";
import { LIBlock } from "./renderers/LIBlock";
import { ParagraphBlock } from "./renderers/ParagraphBlock";

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <S.Container>
      <ReactMarkdown
        remarkPlugins={[gfm, slug]}
        components={{
          a: AnchorBlock,
          code: CodeBlock,
          img: ImageBlock,
          blockquote: BlockquoteBlock,
          ul: UListBlock,
          ol: OListBlock,
          li: LIBlock,
          p: ParagraphBlock,
        }}
      >
        {content}
      </ReactMarkdown>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    font-size: 1rem;
    word-break: break-all;
  `,
};
