export interface Project {
  img: string;
  name: string;
  duration: string;
  description: string;
  references: { name: string; link: string }[];
  tags: string[];
}
