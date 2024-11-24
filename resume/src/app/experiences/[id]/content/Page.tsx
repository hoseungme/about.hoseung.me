import { Markdown } from "@/components/Markdown";
import { readFileSync } from "fs";
import { permanentRedirect } from "next/navigation";
import { join } from "path";

export function Page({ id }: { id: string }) {
  try {
    const content = readFileSync(join(process.cwd(), `src/app/experiences/[id]/data/${id}.md`)).toString();
    return <Markdown>{content}</Markdown>;
  } catch {
    permanentRedirect("/");
  }
}
