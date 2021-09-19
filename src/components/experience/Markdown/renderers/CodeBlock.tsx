import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  className?: string;
  children: ReactNode;
}

export function CodeBlock({ className, children }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={className?.replace("language-", "")}
      style={vscDarkPlus}
    >
      {children}
    </SyntaxHighlighter>
  );
}
