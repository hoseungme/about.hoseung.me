import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock: React.FC<{
  language: string;
  value: string;
}> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {value}
    </SyntaxHighlighter>
  );
};
