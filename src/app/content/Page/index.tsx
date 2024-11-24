import "./style.scss";

import { Markdown } from "@/components/Markdown";
import { readFileSync } from "fs";
import { join } from "path";

export function Page() {
  const content = readFileSync(join(process.cwd(), "src/app/content/Page/content.md")).toString();

  return (
    <div className="pt-4">
      <Markdown>{content}</Markdown>
    </div>
  );
}
