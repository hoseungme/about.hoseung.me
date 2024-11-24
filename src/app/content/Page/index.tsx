import "./style.scss";

import { Markdown } from "@/components/Markdown";

export function Page({ content }: { content: string }) {
  return (
    <div className="pt-4">
      <Markdown>{content}</Markdown>
    </div>
  );
}
