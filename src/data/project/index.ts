export interface ProjectData {
  projects: {
    name: string;
    skills: string[];
    description: string;
    links: string[];
  }[];
}

export const projectData: ProjectData = {
  projects: [
    {
      name: "개발 블로그",
      skills: [
        "Typescript",
        "React",
        "MySQL",
        "AWS Lambda, Lambda@Edge, S3, DynamoDB",
      ],
      description:
        "개발하면서 배우고 느낀 것들을 기록하기 위해 시작한 개인 블로그 프로젝트",
      links: [
        "블로그: https://blog.hoseung.me",
        "개발 일지: https://blog.hoseung.me/categories/bdeb0874-b9e2-4fa5-b6af-9e07b6bd97ca/posts",
        "백엔드 아키텍처: https://miro.com/app/board/o9J_laTyd80=/",
        "RDB 모델링: https://www.erdcloud.com/d/XrM5reMPurCNBreWr",
        "깃허브: https://github.com/hoseung-only",
      ],
    },
  ],
};
