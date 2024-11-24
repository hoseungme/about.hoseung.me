import { Markdown } from "@/components/Markdown";

export function Page({ content }: { content: string }) {
  return <Markdown>{content}</Markdown>;
}
