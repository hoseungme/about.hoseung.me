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
  title: "Hoseung Jang\nSoftware Engineer",
  descriptions: [
    "Focus on impact: I always think what will my work result in.",
    "Thoughtful Problem Solving: I always work towards finding the most reasonable and simplest solution for problems.",
    "User experiences first: I always think how much does my work make lives of people better, so give feedbacks on flaws of design, find out technically improvable points in my product.",
    "Open to learning new things: I enjoy to learn new things because I want to ship products in high-quality and to be fast-paced, in any technical fields.",
  ],
};

const skillSectionData: SkillSectionData = {
  descriptions: [
    "Web development using **React + TypeScript.**",
    "Back-end development using **Node.js + AWS**(especially serverless services such as Lambda, DynamoDB)",
    "**Performance optimization for web applications**, such as minimizing the size of bundles, eliminating unnecessary re-render, etc.",
    "**Improvement productivity for 100+ developers**, by maintaining 100+ libraries, making technical standards.",
  ],
};

const experienceSectionData: ExperienceSectionData = [
  {
    name: "Viva Republica (Toss)",
    role: "Front-end Engineer",
    period: {
      start: new Date("2022-05-09T00:00:00+09:00"),
      end: null,
    },
    links: [{ title: "See Details", to: "/en/experiences/viva-republica" }],
  },
  {
    name: "Catch Fashion",
    role: "Front-end Engineer / Back-end Engineer",
    period: {
      start: new Date("2020-08-18T00:00:00+09:00"),
      end: new Date("2022-04-18T00:00:00+09:00"),
    },
    links: [{ title: "See Details", to: "/en/experiences/catch-fashion" }],
  },
];

const activitySectionData: ActivitySectionData = [
  {
    title: "Making and sharing beautiful UI/UX interactions",
    links: [
      {
        title: "See all crafts",
        to: "https://craft.hoseung.me",
      },
    ],
  },
  {
    title:
      "Maintainer of web development libraries open source of my company Toss",
    links: [
      {
        title: "See all PR & Issues",
        to: "https://github.com/toss/slash/issues?q=involves%3Ahoseungme",
      },
    ],
  },
  {
    title: "Open source contributions",
    links: [
      {
        title: "See all contributions",
        to: "https://github.com/hoseungme/opensources/blob/main/README.md",
      },
    ],
  },
];

const educationSectionData: EducationSectionData = [
  {
    name: "Daedeok Software-Meister High School",
    period: {
      start: new Date("2018-03-02T00:00:00+09:00"),
      end: new Date("2021-01-13T13:00:00+09:00"),
    },
    link: { title: "See Homepage(Korean)", to: "https://dsmhs.djsch.kr" },
  },
];

export function MainEn() {
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
