export interface IProject {
  img: string;
  title: string;
  duration: string;
  description: string;
  activities: string[];
  references: { text: string; link: string }[];
  tags: string[];
}
