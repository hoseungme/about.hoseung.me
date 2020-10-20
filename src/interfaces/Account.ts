import * as icons from "react-icons/io";

export interface Account {
  icon: keyof typeof icons;
  name: string;
  link: string;
}
