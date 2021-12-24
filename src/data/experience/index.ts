import catchFashionDetail from "./catch-fashion.md";
import dsmDetail from "./dsm.md";

export interface ExperienceData {
  experiences: {
    id: string;
    detail: string;
    name: string;
    period: string;
    position: string;
    projects: {
      name: string;
      skills: string[];
      summary: string;
      descriptions: Array<[string, string[]]>;
    }[];
  }[];
}

export const experienceData: ExperienceData = {
  experiences: [
    {
      id: "catch-fashion",
      detail: catchFashionDetail,
      name: "CATCH FASHION",
      period: "2020.08 ~ 현재",
      position: "Frontend 개발자, Backend 개발자",
      projects: [
        {
          name: "캐치패션",
          summary:
            "월 수십만 유저가 방문하는 명품 이커머스 캐치패션을 개발했습니다.",
          skills: [
            "Typescript",
            "React",
            "CSS-in-JS (styled-components)",
            "RxJS",
            "serverless MSA (AWS Lambda)",
          ],
          descriptions: [
            [
              "Microservices Architecture로 설계된 serverless 백엔드 개발",
              [
                "팀에서 직접 개발한 AWS Lambda 전용 웹 프레임워크 corgi 사용",
                "https://github.com/serverless-seoul/corgi",
              ],
            ],
            [
              "Fully-typed한 개발 환경 구축",
              [
                "OpenAPI Specification로 API Client SDK 자동 생성",
                "Typescript의 타입 추론을 활용한 react-query 기반의 data fetcher/mutator 개발",
              ],
            ],
            [
              "각종 성능 이슈 파악 및 개선",
              [
                "변동이 적은 데이터에 Local Storage 기반 client-side 캐싱을 적용하여 렌더링 속도 개선",
                "Github Actions에 Lighthouse CI를 추가하고 퍼포먼스 점수를 근소하게 개선한 경험",
                "react-router에서 일으키는 불필요한 리렌더링을 React.memo, RxJS 등을 사용해 개선한 경험",
                "https://blog.hoseung.me/posts/ab8363df-6066-4f4d-af13-efbe8364f771",
                "https://blog.hoseung.me/posts/d850b3c1-6ffc-405b-a662-5046244df1fc",
              ],
            ],
            [
              "Storybook, Chromatic을 사용해 Visual Regression Test를 도입하여 예기치 못한 UI 변경에 대처",
              [
                "https://blog.hoseung.me/posts/83b91deb-55a5-404b-bf86-ab56b746a69f",
              ],
            ],
            [
              "웹뷰 환경의 Android, iOS앱을 개발한 경험",
              [
                "User-Agent를 파싱해서 적절한 UI 렌더링 (앱다운 유도 컨텐츠를 앱에서는 숨기는 등)",
                "Applike한 UI/UX에 대한 시도 (Route Animation, 2 depth 이상부터 로고 대신 Back Button 노출 등)",
              ],
            ],
          ],
        },
        {
          name: "웹 푸시 알림 서비스",
          summary:
            "웹 브라우저에서도 푸시 알림을 받을 수 있는 기능을 개발했습니다.",
          skills: [
            "Typescript",
            "React",
            "PWA (Service Worker, Web Push API)",
            "AWS Lambda",
          ],
          descriptions: [
            [
              "Service Worker, Web Push API를 사용해 푸시 알림 구현",
              [
                "https://blog.hoseung.me/posts/1cb02762-a7a8-4401-99e3-7913bea3ef07",
              ],
            ],
            ["백엔드 Notification 서비스에 웹 푸시 Sender 추가", []],
            [
              "푸시 알림 권한을 요청하는 모달 추가",
              [
                "User-Agent(웹 or 앱)에 따라 다르게 동작하도록 설계",
                "알림 받기를 거부한 유저들의 행동을 트래킹하고, 일정 조건마다 권한 요청 모달 재노출",
              ],
            ],
          ],
        },
        {
          name: "광고 랜딩 페이지",
          summary: "2021년 4분기 광고 랜딩 페이지를 개발했습니다.",
          skills: [
            "Typescript",
            "React",
            "AWS CDK, S3, Route53, Cloudfront, Lambda@Edge",
            "Redis",
          ],
          descriptions: [
            [
              "질문/답변/결과 데이터를 트리 구조로 설계",
              ["트리 노드의 타입에 따라 컴포넌트를 재귀적으로 렌더링"],
            ],
            ["Redis의 INCR을 사용해 방문자수 트래킹 및 노출", []],
            [
              "https://catch-fake.com -> https://catchfashion.com/catch-fake 리다이렉트 기능 개발",
              [
                "AWS CDK를 사용해 비슷한 기능에 재사용할 수 있게 템플릿화, 인프라 구축 자동화, 테스트 코드 작성",
              ],
            ],
          ],
        },
        {
          name: "카드사 프로모션 서비스 개발",
          summary:
            "유저가 현재 진행중인 카드사 프로모션에 카드를 등록할 수 있는 서비스를 개발했습니다.",
          skills: ["Typescript", "React", "AWS Lambda, DynamoDB"],
          descriptions: [
            [
              "프론트엔드, 백엔드 전체를 설계부터 개발, 배포, 유지보수까지 담당",
              [],
            ],
            [
              "도메인 특징에 따른 데이터 및 요청 -> 응답 -> 렌더링 플로우 설계",
              [
                "프로모션은 동시에 많이 진행하지 않으므로, 프로모션마다 개별적으로 카드 등록 데이터를 저장하지 않고, 리스트로 한번에 불러오도록 설계",
                "카드 등록 페이지에 들어오면 리스트를 불러오고, 특정 프로모션에 카드를 등록할 경우 리스트를 업데이트",
                "API 요청 플로우가 간단해지고, 리스트만 한 번 불러오면 그 뒤엔 추가적인 데이터 로딩이 없어 UI/UX 면에서도 이점을 얻음",
              ],
            ],
            [
              "여러곳에 흩어져서 관리가 힘들던 카드사 프로모션 데이터들을 하나로 정리",
              [
                "서비스 복잡도가 낮아지고, 실수할 가능성이 줄어들어 생산성 향상",
              ],
            ],
          ],
        },
      ],
    },
  ],
};

export const experienceDetailMap = new Map(
  experienceData.experiences
    .filter((e) => e.detail)
    .map((e) => [e.id, e.detail])
);
