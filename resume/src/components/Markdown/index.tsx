import "github-markdown-css/github-markdown-dark.css";
import "./style.scss";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeRaw]}>
      {children}
    </ReactMarkdown>
  );
}
