import "github-markdown-css/github-markdown-light.css";
import "./style.scss";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown className="markdown-body" urlTransform={(url) => url} rehypePlugins={[rehypeRaw]}>
      {children}
    </ReactMarkdown>
  );
}
