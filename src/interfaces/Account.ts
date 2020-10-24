import * as icons from "react-icons/io";

export interface IAccount {
  icon: keyof typeof icons;
  name: string;
  link: string;
}
