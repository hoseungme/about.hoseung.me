import { readFileSync } from "fs";
import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { join } from "path";
import { Page } from "./content/Page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Experience({ params }: Props) {
  try {
    const { id } = await params;
    const content = readFileSync(join(process.cwd(), `src/app/experiences/[id]/data/${id}.md`)).toString();
    return <Page content={content} />;
  } catch {
    permanentRedirect("/");
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const name = (() => {
    switch (id) {
      case "mirror": {
        return "Mirror";
      }
      case "viva-republica": {
        return "Toss";
      }
      case "catch-fashion": {
        return "Catch Fashion";
      }
      default: {
        throw new Error("404");
      }
    }
  })();
  const title = `장호승 이력서 - ${name}`;
  return { title, openGraph: { title } };
}
