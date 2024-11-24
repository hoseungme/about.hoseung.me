import { Markdown } from "@/components/Markdown";
import { readFileSync } from "fs";
import { join } from "path";

export function Page({ id }: { id: string }) {
  const content = readFileSync(join(process.cwd(), `src/app/experiences/[id]/content/data/${id}.md`)).toString();

  return <Markdown>{content}</Markdown>;
}
