import { IoLogoGithub } from "react-icons/io";
import { AiFillMediumSquare } from "react-icons/ai";
import { FaBook } from "react-icons/fa";

import { IHeaderTab } from "../interfaces/HeaderTab";

export const headerTabs: IHeaderTab[] = [
  {
    icon: IoLogoGithub,
    text: "github",
    link: "https://github.com/HoseungJang",
  },
  {
    icon: AiFillMediumSquare,
    text: "medium",
    link: "https://medium.com/@HoseungJang",
  },
  {
    icon: FaBook,
    text: "velog",
    link: "https://velog.io/@alvin/series",
  },
];
