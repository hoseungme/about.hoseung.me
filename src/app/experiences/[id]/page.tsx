import { Page } from "./content/Page";

export default async function Experience({ params }: { params: Promise<{ id: string }> }) {
  return <Page id={(await params).id} />;
}
