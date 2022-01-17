export interface ProfileData {
  title: string;
  descriptions: string[];
  contacts: { type: "link" | "string"; label: string; value: string }[];
}

export const profileData: ProfileData = {
  title: "안녕하세요. 좋은 경험을 추구하는 개발자 장호승입니다.",
  descriptions: [
    "주어진 작업의 이유를 중요하게 생각합니다.",
    "기록하고 돌아보고 개선하는 과정을 좋아합니다.",
    "자동화로 생산성을 높히는 것에 관심이 많습니다.",
    "하고싶은 일에 도전해볼 수 있는 조직을 좋아합니다.",
    "수평적이고 화기애애하며 투명한 조직을 좋아합니다.",
    "현역 산업기능요원으로 복무중입니다.",
  ],
  contacts: [
    { type: "link", label: "GITHUB", value: "https://github.com/HoseungJang" },
    { type: "link", label: "BLOG", value: "https://blog.hoseung.me" },
    { type: "string", label: "EMAIL", value: "hsjang.dev@gmail.com" },
  ],
};
