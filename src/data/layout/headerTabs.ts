import { IoLogoGithub } from "react-icons/io";
import { ImBook } from "react-icons/im";

import { IHeaderTab } from "../../interfaces/layout/HeaderTab";

export const headerTabs: IHeaderTab[] = [
  {
    icon: IoLogoGithub,
    text: "github",
    link: "https://github.com/HoseungJang",
  },
  {
    icon: ImBook,
    text: "blog",
    link: "https://blog.hoseung.me/",
  },
];
