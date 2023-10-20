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
    <Base
      rehypePlugins={
        [
          rehypeRaw,
          rehypeSanitize(defaultSchema),
        ] as ReactMarkdown.PluggableList
      }
    >
      {children}
    </Base>
  );
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
