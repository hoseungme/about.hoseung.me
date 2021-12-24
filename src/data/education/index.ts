export interface EducationData {
  educations: { name: string; period: string; descriptions: string[] }[];
}

export const educationData: EducationData = {
  educations: [
    {
      name: "대덕소프트웨어 마이스터고등학교",
      period: "2018.03 ~ 2021.01",
      descriptions: [
        "장기간 유지보수하는 프로젝트 중심으로 웹 개발을 공부했습니다.",
        "중단 없는 웹 서비스와 자동화에 관심을 갖고 개발했습니다.",
      ],
    },
  ],
};
