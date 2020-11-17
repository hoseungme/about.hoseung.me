import * as icons from "react-icons/io";

export interface IHeaderTab {
  icon: keyof typeof icons;
  text: string;
  link: string;
}
