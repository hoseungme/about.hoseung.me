export interface IProfile {
  profileImage: string;
  motto: string;
  comment: string;
  links: {
    text: string;
    link: string;
  }[];
}
