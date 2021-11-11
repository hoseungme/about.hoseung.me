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
    imageURLs: [
      "/images/skill/react.png",
      "/images/skill/rxjs.png",
      "/images/skill/aws.png",
    ],
    details: [
      "React 기반의 반응형 프론트엔드 애플리케이션을 구축한 경험이 있습니다.",
      "웹뷰 기반의 iOS, Android 애플리케이션을 운영한 경험이 있습니다. User-Agent에 따라 적합한 UI를 제공할 수 있습니다.",
      "styled-components를 사용한 CSS-in-JS 기법을 적극 활용한 경험이 있습니다.",
      "react-query를 사용해서 fully-typed된 data fetcher를 구현한 경험이 있고, local storage 기반의 client-side API cache, paginated API 상에서의 prefetch 등 여러 부가 기능을 추가한 경험이 있습니다.",
      "CSS의 transition, animation을 활용해 부드럽고 인터랙티브한 UI를 제공할 수 있습니다.",
      "웹 폰트를 다운받아 font-face를 활용해 다뤄본 경험이 있습니다.",
      "Storybook에 Chromatic이라는 서비스를 연결해서 visual regression test를 구현한 경험이 있습니다.",
      "React에서 컴포넌트 분리, Lazy Rendering, RxJS, React.memo 등을 통해 불필요한 렌더링 성능 저하를 개선한 경험이 있습니다.",
      "Lighthouse CI를 활용하여 퍼포먼스 점수를 개선해본 경험이 있습니다.",
      "AWS의 serverless 인프라(Lambda, Lambda@Edge, CloudFront 등)를 적극 활용하여 CSR 환경에서의 SEO, 테스트 환경 등을 구축한 경험이 있습니다.",
      "Webpack을 직접 설정해서 배포해본 경험이 있고, 코드 스플리팅을 통한 번들 경량화, contenthash를 활용한 캐싱 패턴 등 Webpack의 활용 방법을 간단히 이해하고 있습니다.",
      "브라우저에서 Service Worker를 활용해 Web Push Notification을 구현한 경험이 있습니다.",
    ],
  },
  {
    title: "백엔드",
    imageURLs: [
      "/images/skill/nodejs.png",
      "/images/skill/mysql.png",
      "/images/skill/redis.png",
      "/images/skill/aws.png",
    ],
    details: [
      "Node.js, Typescript 백엔드를 개발한 경험이 있습니다.",
      "완전한 serverless, MSA 백엔드 시스템에서 개발한 경험이 있습니다.",
      "serverless framework를 사용해 클라우드 인프라 구축을 자동화한 경험이 있습니다.",
      "MySQL, DynamoDB 등 SQL, NoSQL DB들의 용도를 구분하여 사용할 수 있습니다.",
      "DynamoDB의 query, index를 활용해서 페이지네이션과 CRUD API를 구현한 경험이 있습니다. TTL을 활용해서 API 요청 Limit를 걸어본 경험이 있습니다.",
      "Redis를 사용해서 백엔드 로직의 결과물을 캐싱하고, 간단한 방문자수 트래커를 구현한 경험이 있습니다.",
      "S3을 안전하게 활용한 경험이 있습니다. Presigned Post를 통해 객체를 업로드하고, CloudFront와 OAI로 private S3 content를 제공할 수 있습니다.",
    ],
  },
  {
    title: "DevOps",
    imageURLs: ["/images/skill/githubactions.png", "/images/skill/docker.png"],
    details: [
      "Docker, EC2, NginX를 사용하여 무중단 CI/CD 자동화를 구축하고 유지보수한 경험이 있습니다.",
      "Github Actions을 사용하여 무중단 CI/CD 자동화를 구축하고 유지보수한 경험이 있습니다.",
      "Open API Specification을 파싱하여 자동으로 API client SDK를 생성해본 경험이 있습니다.",
      "Docker를 활용해서 테스트 환경을 구축한 경험이 있습니다.",
    ],
  },
];
