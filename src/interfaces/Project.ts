export interface IProject {
  img: string;
  title: string;
  duration: string;
  description: string;
  references: { text: string; link: string }[];
  tags: string[];
}
