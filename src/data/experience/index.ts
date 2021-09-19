import catchFashionDetail from "./catch-fashion.md";
import dsmDetail from "./dsm.md";

export interface Experience {
  id: string;
  title: string;
  duration: string;
  summary: string;
  detail?: string;
}

export const experiences: Experience[] = [
  {
    id: "catch-fashion",
    title: "CATCH FASHION",
    duration: "2020.08",
    summary:
      "명품 이커머스 캐치패션과 어드민 페이지 개발을 담당하고 있어요. React를 사용한 프론트엔드, AWS Lambda를 사용한 MSA 기반 백엔드를 개발하고 있답니다.",
    detail: catchFashionDetail,
  },
  {
    id: "dsm",
    title: "대덕 소프트웨어 마이스터고등학교",
    duration: "2018.03",
    summary:
      "여러 프로젝트를 진행하며 개발 / 유지보수에 대해 공부하고, 협업에 대해 배웠으며, 백엔드 개발을 중심적으로 공부했어요.",
    detail: dsmDetail,
  },
];

export const experienceDetailMap = new Map(
  experiences.filter((e) => e.detail).map((e) => [e.id, e.detail])
);
