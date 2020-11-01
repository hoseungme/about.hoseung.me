export interface IProfile {
  profileImage: string;
  motto: string;
  comment: string;
  links: {
    name: string;
    link: string;
  }[];
}
