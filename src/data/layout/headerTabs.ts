import { IoLogoGithub } from "react-icons/io";
import { AiFillMediumSquare } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import { IHeaderTab } from "../../interfaces/layout/HeaderTab";

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
    icon: FaLinkedin,
    text: "linkedin",
    link: "https://www.linkedin.com/in/%ED%98%B8%EC%8A%B9-%EC%9E%A5-b71413203/",
  },
];
