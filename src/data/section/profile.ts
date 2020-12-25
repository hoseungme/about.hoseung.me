import { IProfile } from "../interfaces/Profile";

import profileImage from "../images/profile/profile.png";

export const profile: IProfile = {
  image: profileImage,
  motto: "기록은 나를 빛낸다.😎",
  comment: "안녕하세요. 웹 프론트엔드 / 백엔드 개발자 장호승입니다.",
  links: [
    {
      text: "깃허브",
      link: "https://github.com/HoseungJang",
    },
    {
      text: "개발 일지",
      link: "https://velog.io/@alvin/series/development-report",
    },
  ],
};
