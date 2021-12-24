export interface SkillData {
  skills: {
    category: string;
    items: string[];
  }[];
}

export const skillData: SkillData = {
  skills: [
    {
      category: "Frontend",
      items: [
        "Typescript, SCSS",
        "React",
        "CSS-in-JS (styled-components)",
        "react-query, swr",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js, Typescript",
        "MySQL, AWS DynamoDB, typeorm",
        "serverless framework",
        "Microservices Architecture",
      ],
    },
    {
      category: "Devops",
      items: [
        "AWS S3, CloudFront, Route53, Lambda, Lambda@Edge",
        "Github Actions",
        "Docker",
        "mocha, chai",
      ],
    },
  ],
};
