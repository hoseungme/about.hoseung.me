export interface Skill {
  title: string;
  imageURLs: string[];
  details: string[];
}

export const skills: Skill[] = [
  {
    title: "언어",
    imageURLs: ["/images/skill/javascript.png", "/images/skill/typescript.png"],
    details: [
      "Javascript의 ES6+ 문법에 익숙합니다.",
      "Typescript에 익숙하고, 타입 추론을 능숙하게 활용할 수 있습니다.",
    ],
  },
  {
    title: "프론트엔드",
    imageURLs: ["/images/skill/react.png", "/images/skill/aws.png"],
    details: [
      "React 기반의 반응형 프론트엔드 애플리케이션을 구축한 경험이 있습니다.",
      "웹뷰 기반의 iOS, Android 애플리케이션을 운영한 경험이 있습니다. User-Agent를 파싱해서 적절한 UI를 제공했습니다.",
      "styled-components를 사용한 CSS-in-JS 기법을 적극 활용한 경험이 있습니다.",
      "react-query, swr등에 기반하여 fully-typed된 data fetcher를 구현한 경험이 있고, local storage 기반의 client-side API cache, paginated API 상에서의 prefetch 등 여러 부가 기능을 추가한 경험이 있습니다.",
      "Storybook과 Chromatic을 사용해서 visual regression test를 구현한 경험이 있습니다.",
      "React에서 컴포넌트 분리, Lazy Rendering, RxJS, React.memo 등을 통해 불필요한 렌더링 성능 저하를 개선한 경험이 있습니다.",
      "AWS의 serverless 인프라(Lambda, Lambda@Edge, CloudFront 등)를 적극 활용하여 CSR 환경에서의 SEO, 테스트 환경 등을 구축한 경험이 있습니다.",
      "Webpack을 직접 설정해서 배포해본 경험이 있고, 코드 스플리팅을 통한 번들 경량화, contenthash를 활용한 캐싱 패턴 등 Webpack의 활용 방법을 적절히 이해하고 있습니다.",
      "브라우저에서 Service Worker를 활용해 Web Push Notification을 구현한 경험이 있습니다.",
    ],
  },
  {
    title: "백엔드",
    imageURLs: [
      "/images/skill/nodejs.png",
      "/images/skill/mysql.png",
      "/images/skill/aws.png",
    ],
    details: [
      "Node.js 환경에서 Typescript로 백엔드를 개발할 수 있습니다.",
      "완전한 serverless, MSA 백엔드 시스템에서 개발한 경험이 있습니다. serverless framework를 사용해 클라우드 인프라 구축을 자동화할 수 있습니다.",
      "MySQL, DynamoDB 등 SQL, NoSQL DB들의 용도를 구분하여 사용할 수 있습니다.",
      "DynamoDB의 query, scan, index, TTL 등을 활용하여 API를 설계한 경험이 있습니다.",
      "S3에 Presigned Post를 통해 이미지를 업로드하고, CloudFront와 OAI로 제공한 경험이 있습니다.",
    ],
  },
  {
    title: "DevOps",
    imageURLs: ["/images/skill/githubactions.png", "/images/skill/docker.png"],
    details: [
      "Docker, EC2, NginX를 사용하여 무중단 CI/CD 자동화를 구축하고 유지보수한 경험이 있습니다.",
      "serverless framework, Github Actions을 사용하여 무중단 CI/CD 자동화를 구축하고 유지보수한 경험이 있습니다.",
      "Open API Specification을 자동 생성하고 파싱하여 자동으로 API client SDK를 생성해본 경험이 있습니다.",
    ],
  },
];
