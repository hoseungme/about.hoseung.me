import styled from "styled-components";

import {
  ProfileSection,
  ProfileSectionData,
} from "./components/ProfileSection";
import { SkillSection, SkillSectionData } from "./components/SkillSection";
import {
  ExperienceSection,
  ExperienceSectionData,
} from "./components/ExperienceSection";
import {
  ActivitySection,
  ActivitySectionData,
} from "./components/ActivitySection";
import {
  EducationSection,
  EducationSectionData,
} from "./components/EducationSection";

const profileSectionData: ProfileSectionData = {
  title: "안녕하세요.\n소프트웨어 엔지니어\n장호승입니다.",
  descriptions: [
    "주어진 작업을 왜 하는지 이해하는 것을 중요하게 생각합니다.",
    "투명하게 일하며 서로 신뢰하는 조직을 좋아합니다.",
    "문제에 대해 가장 간단하면서도 합리적인 해결책을 찾기 위해 노력합니다.",
    "UI, UX에 대해 이야기하고 개선하는 과정을 좋아합니다.",
    "아름다운 UI/UX 인터랙션 구현에 관심이 많습니다.",
    "특정 분야에 한정지어 일하는 것 보단 새로운 것을 배워나가며 일하는 것을 좋아합니다.",
    "현역 산업기능요원으로 복무중입니다. (2024.01 종료)",
  ],
};

const skillSectionData: SkillSectionData = {
  descriptions: [
    "**JavaScript**와 **TypeScript**에 익숙합니다.",
    "**React 기반의 CSR/SSR 프론트엔드 개발**에 익숙하고, 리렌더링 최적화, 번들 경량화 등 기본적인 **웹 성능 최적화** 경험이 있습니다.",
    "**Node.js 기반의 백엔드 개발** 경험이 있습니다. Lambda, DynamoDB 등 **AWS의 서버리스 인프라**에 익숙합니다.",
    "Node.js의 Module System인 CJS/ESM을 이해하고, **두 Module System 모두에 호환 가능한 라이브러리를 운영** 해본 경험이 있습니다.",
    "**웹뷰 환경**의 모바일 웹 제품 개발 경험이 있습니다. User-Agent 파싱, 앱브릿지 통신, meta 태그 파싱 등 **네이티브와 웹이 상호작용하는 패턴**에 매우 익숙합니다.",
  ],
};

const experienceSectionData: ExperienceSectionData = [
  {
    name: "비바리퍼블리카 (토스)",
    role: "프론트엔드 엔지니어",
    period: {
      start: new Date("2022-05-09T00:00:00+09:00"),
      end: null,
    },
    links: [{ title: "자세히 보기", to: "/experiences/viva-republica" }],
  },
  {
    name: "스마일벤처스 (캐치패션)",
    role: "프론트엔드/백엔드 엔지니어",
    period: {
      start: new Date("2020-08-18T00:00:00+09:00"),
      end: new Date("2022-04-18T00:00:00+09:00"),
    },
    links: [{ title: "자세히 보기", to: "/experiences/catch-fashion" }],
  },
];

const activitySectionData: ActivitySectionData = [
  {
    title:
      "재미있고, 아름다우며, 도전적인 UI/UX 인터랙션을 구현하여 공유하고 있습니다.",
    links: [
      {
        title: "확인하기",
        to: "https://craft.hoseung.me",
      },
    ],
  },
  {
    title:
      "토스 프론트엔드 라이브러리 오픈소스 Slash의 메인테이너로 활동하고 있습니다.",
    links: [
      {
        title: "활동 목록",
        to: "https://github.com/toss/slash/issues?q=involves%3AHoseungJang",
      },
    ],
  },
  {
    title: "아이디어를 얻으면 오픈소스로 만들어 공개하고 있습니다.",
    links: [
      {
        title: "오픈소스 목록",
        to: "https://github.com/HoseungJang/opensources/blob/main/ko.md",
      },
    ],
  },
];

const educationSectionData: EducationSectionData = [
  {
    name: "대덕소프트웨어마이스터고등학교",
    period: {
      start: new Date("2018-03-02T00:00:00+09:00"),
      end: new Date("2021-01-13T13:00:00+09:00"),
    },
    link: { title: "홈페이지", to: "https://dsmhs.djsch.kr" },
  },
];

export function MainKo() {
  return (
    <Container>
      <ProfileSection data={profileSectionData} />
      <SkillSection data={skillSectionData} />
      <ExperienceSection data={experienceSectionData} />
      <ActivitySection data={activitySectionData} />
      <EducationSection data={educationSectionData} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
