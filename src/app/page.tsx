import { Metadata } from "next";
import { Page } from "./content/Page";

export default function Home() {
  return <Page />;
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
