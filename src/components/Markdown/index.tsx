import "github-markdown-css/github-markdown-light.css";
import "./style.scss";

import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import { createElement } from "react";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown className="markdown-body" urlTransform={(url) => url} components={headingComponents} rehypePlugins={[rehypeRaw]}>
      {children}
    </ReactMarkdown>
  );
}

const headingComponents = (["h1", "h2", "h3", "h4", "h5", "h6"] as const).reduce((components, name) => {
  components[name] = (props) => createElement(name, { ...props, node: undefined, id: (props.children?.toString() ?? "").toLowerCase().replace(/[^a-z가-힣\d\s]/g, "").replace(/\s/g, "-") });
  return components;
}, {} as Components);
