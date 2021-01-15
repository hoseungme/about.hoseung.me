import { IExperience } from "../../interfaces/section/Experience";

import catchFashionDetail from "../markdown/catch-fashion.md";

export const experiences: IExperience[] = [
  {
    info: {
      title: "CATCH FASHION",
      link: "https://www.catchfashion.com/",
    },
    duration: "2020.08",
    summary:
      "명품 이커머스 캐치패션과 어드민 페이지 개발을 담당하고 있습니다. React를 사용한 프론트엔드, AWS Lambda를 사용한 MSA 기반 백엔드를 개발하고 있습니다.",
    detail: catchFashionDetail,
  },
  {
    info: {
      title: "대덕 소프트웨어 마이스터고등학교",
      link: "http://dsmhs.djsch.kr/main.do",
    },
    duration: "2018.03",
    summary:
      "여러 프로젝트를 진행하며 개발 / 유지보수에 대해 공부하고, 협업에 대해 배웠습니다. 백엔드 개발을 중심적으로 공부하였습니다.",
  },
];
