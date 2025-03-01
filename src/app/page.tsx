import "./page.style.scss";

import { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { Markdown } from "@/components/Markdown";

export default function Home() {
  const content = readFileSync(join(process.cwd(), "src/data/index.md")).toString();
  return <Markdown>{content}</Markdown>;
}

const title = "장호승 이력서";
const description = "소프트웨어 엔지니어 장호승 입니다.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};
