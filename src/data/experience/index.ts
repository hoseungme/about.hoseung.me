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
            "월 30만 이상의 신규 유저가 방문하는 명품 이커머스 캐치패션을 개발했습니다.",
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
                "AWS Lambda에 querystring으로 array가 제대로 전달되지 않는 문제 해결 https://blog.hoseung.me/posts/d202b504-b369-434b-b6bc-4f0afe89e56b",
              ],
            ],
            [
              "AB 테스트와 데이터 중심의 UI/UX 개선",
              [
                "'쇼핑하기' 페이지를 '카테고리' 페이지로 이름 변경 -> 신규가입 11%, 상품 조회 14%, 구매전환 26% 등 모든 긍정 수치가 기존 대비 크게 증가",
                "상품 페이지의 정품 보장 문구를 상단으로 이동 -> 신규가입 3%, 구매전환 4% 증가",
                "특정 작업이 비즈니스적으로 어떤 결과를 불러일으킬지 고민하고, 결과 중심으로 사고하고 선택하려 노력",
              ],
            ],
            [
              "각종 성능 이슈 파악 및 개선",
              [
                "변동이 적은 데이터에 Local Storage 기반 client-side 캐싱을 적용하여 렌더링 속도 개선 (약 50 ~ 500 밀리초의 API 응답 대기 시간 절약, 렌더링이 동기 방식으로 즉시 이루어져 깜빡임 사라짐)",
                "Github Actions에 Lighthouse CI를 추가하고 퍼포먼스 점수를 근소하게 개선한 경험 (Chrome dev tools 기준 40점대에서 60점대로 개선)",
                "특정 변경이 UI에 예기치 못한 사이드 이펙트를 일으켰을 때, 빠르게 파악할 수 있도록 Visual Regression Test 도입(https://blog.hoseung.me/posts/83b91deb-55a5-404b-bf86-ab56b746a69f)",
                "react-router에서 일으키는 불필요한 리렌더링을 React.memo, RxJS를 사용해 개선한 경험 (react-dev-tools의 Profier의 highlight 기능을 사용해 측정)",
                "https://blog.hoseung.me/posts/ab8363df-6066-4f4d-af13-efbe8364f771",
                "https://blog.hoseung.me/posts/d850b3c1-6ffc-405b-a662-5046244df1fc",
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
            [
              "푸시 알림 서비스 사용률 개선",
              [
                "기존에는 앱을 설치해야만 푸시 알림을 받을 수 있었지만, 웹을 사용하는 유저도 푸시 알림을 받아볼 수 있게됨",
                "알림 받기를 거부한 유저들의 행동을 트래킹하고, 일정 조건마다 권한 요청 모달 재노출",
                "푸시 알림 구독을 생성하는 API의 호출 횟수가 평균 600 -> 1200으로 증가",
              ],
            ],
          ],
        },
        {
          name: "광고 랜딩 페이지",
          summary: "2021년 하반기 광고 랜딩 페이지를 개발했습니다.",
          skills: [
            "Typescript",
            "React",
            "AWS CDK, S3, Route53, Cloudfront, Lambda@Edge",
            "Redis",
          ],
          descriptions: [
            [
              "질문/답변/결과 데이터를 트리 구조로 설계 -> 트리 노드의 타입에 따라 컴포넌트를 재귀적으로 렌더링",
              [],
            ],
            [
              "HTML video element로 mp4 동영상 컨텐츠 제공",
              [
                "iOS의 자동재생 차단 이슈를 https://webkit.org/blog/6784/new-video-policies-for-ios를 참고해 해결",
              ],
            ],
            [
              "https://catch-fake.com -> https://catchfashion.com/catch-fake 리다이렉트 기능 개발",
              [
                "AWS S3, CloudFront, Route53을 사용해 리다이렉션 구축",
                "AWS CDK를 사용해 인프라 자동화, 테스트 코드 작성 및 비슷한 기능에 재사용할 수 있도록 템플릿화",
              ],
            ],
            [
              "2021년 9월 ~ 2021년 12월까지 유저 방문 횟수 약 10만회 (페이지 뷰 API의 호출 횟수 기준)",
              [],
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
              "프론트엔드, 백엔드 전체를 설계부터 개발, 배포, 유지보수 담당",
              [
                "팀에서 개발한 dynamorm(https://github.com/serverless-seoul/dynamorm)이라는 오픈소스를 사용해 DynamoDB 테이블 정의, serverless framework를 사용해 배포",
                "BDD 방식의 테스트코드 작성 -> 유저 입장에서 나올 수 있는 유효한 시나리오들을 생각해볼 수 있었음 -> 개발자 입장에서도 비즈니스 로직을 빠르게 이해하는데에 도움이 됨",
              ],
            ],
            [
              "도메인 특징에 따른 데이터 및 요청 -> 응답 -> 렌더링 플로우 설계",
              [
                "프로모션은 동시에 많이 진행하지 않으므로, 데이터를 프로모션마다 개별적으로 불러오지 않고, 리스트로 한번에 불러오도록 설계",
                "API 요청 플로우가 간단해지고, 리스트만 한 번 불러오면 그 뒤엔 추가적인 데이터 로딩이 없어 UX 면에서 이점을 얻음",
              ],
            ],
            [
              "여러곳에 흩어져서 관리가 힘들던 카드사 프로모션 데이터들을 하나로 정리",
              [
                "서비스 복잡도가 낮아지고, 변경시 실수할 가능성이 줄어들어 생산성 향상",
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
