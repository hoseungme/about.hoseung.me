import { IProject } from "../../interfaces/section/Project";

import blogImage from "../../images/project/blog.png";
import resumeImage from "../../images/project/resume.png";
import referringImage from "../../images/project/referring.png";
import coronaSolutionImage from "../../images/project/corona-solution.png";
import dsmMarketImage from "../../images/project/dsm-market.png";

export const projects: IProject[] = [
  {
    img: blogImage,
    title: "나만의 공간. 개인 블로그 프로젝트",
    duration: "2020.12 ~ 진행중",
    description:
      "저의 개인 블로그를 만드는 프로젝트에요. 글에 대한 각종 통계, 알람 서비스 등 블로그에 관련된 여러 기능을 직접 커스터마이징하고 싶어서 시작하게 되었답니다. 현재 프로젝트 진행중에 있어요.",
    activities: [
      "Microservice 아키텍처에 기반한 백엔드 시스템 설계",
      "Serverless Framework를 활용한 인프라 구축 및 배포 자동화",
      "ERD를 사용한 데이터베이스 모델링",
      "BDD에 기반한 테스트 코드를 Mocha, Chai, SuperTest로 작성",
      "Docker를 활용한 테스트 환경 분리",
      "마이크로서비스 간 호출할 수 있는 client 라이브러리 개발 및 Github Package Registry에 private으로 배포",
      "프론트엔드 전용 API client를 자동 생성하는 CLI 패키지 개발",
      "어드민 페이지 개발, Docker로 배포하여 로컬에서만 사용",
      "Presigned POST 기반 AWS S3 이미지 업로드 기능 개발",
    ],
    references: [
      {
        text: "프로젝트 일지",
        link:
          "https://velog.io/@alvin/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Blog",
      },
      {
        text: "백엔드 시스템 아키텍처",
        link: "https://miro.com/app/board/o9J_laTyd80=/",
      },
      {
        text: "RDB 테이블 구조",
        link: "https://www.erdcloud.com/d/XrM5reMPurCNBreWr",
      },
      {
        text: "깃허브 Organization",
        link: "https://github.com/hoseung-only",
      },
    ],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: resumeImage,
    title: "나를 소개합니다. 개인 레주메 프로젝트",
    duration: "2020.10 ~ 2020.11",
    description:
      "저의 개인 웹사이트 프로젝트에요. 형식적인 이력서 보단 부드러운 인터랙션이 포함된 깔끔한 소개 페이지로 스스로를 어필하고 싶어서 시작하게 되었답니다.",
    activities: [
      "다른 레주메 사이트, 회사 소개 페이지, 개인 블로그 등을 참고하여 깔끔한 UI와 부드러운 인터랙션에 대해 학습",
      "Intersection Observer를 적극 활용한 UI 구현",
      "React Context를 활용한 전역 모달 인터페이스 구현",
      "AWS S3, CloudFront를 사용해서 배포",
      "Google Analytics를 활용한 유저 행동 트래킹",
    ],
    references: [
      {
        text: "프로젝트 일지",
        link:
          "https://velog.io/@alvin/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Rsum",
      },
      {
        text: "프론트엔드 코드",
        link: "https://github.com/hoseung-only/about.hoseung.me",
      },
    ],
    tags: ["Front-end"],
  },
  {
    img: referringImage,
    title: "읽다가 말아도 안심. 주소를 잊어도 안심. 프로젝트 Referring",
    duration: "2020.08 ~ 2020.10",
    description:
      "Referring은 나만의 북마크 서비스에요. 크롬 브라우저에서 북마크를 항상 사용하는데, 크롬 처럼 브라우저 상단에 뭉쳐있는 것 보단 한 눈에 모아 볼 수 있는게 더 좋을 것 같아 시작하게 되었답니다.",
    activities: [
      "operation ID에 따라 Request Parameters가 자동 추론되게 하여 개발자 경험 향상 및 Typescript의 추론에 대한 이해도 향상",
      "스마트폰, 태블릿, 데스크탑 3종류의 크기를 기준으로 하여 스타일을 다르게 반영해보며 반응형 웹에 대한 지식 습득",
      "fp-ts라는 함수형 프로그래밍 라이브러리의 Either 타입을 활용한 express 서버 개발",
      "Docker를 사용하여 독립적인 프로젝트 환경 운영",
    ],
    references: [
      {
        text: "프로젝트 일지",
        link:
          "https://velog.io/@alvin/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Referring",
      },
      {
        text: "프론트엔드, 백엔드 코드",
        link: "https://github.com/HoseungJang/Referring",
      },
    ],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: coronaSolutionImage,
    title: "전국의 마스크 재고정보가 한눈에. 프로젝트 코로나 솔루션",
    duration: "2020.03 ~ 2020.07",
    description:
      "코로나 솔루션은 코로나 19 확진자 현황, 진료소 위치 정보를 제공해주는 서비스에요. 다른 개발자 분들이 코로나 사태에 많이 기여하시는 것에 동기부여가 되어 시작하게 되었답니다.",
    activities: [
      "Typescript, express를 사용한 서버 개발, DI 패턴을 활용",
      "CheerIO를 사용한 크롤러 개발",
      "의료시설의 주소를 지오코딩하여 좌표값을 추출해오는 스크립트 개발",
      "응답 속도가 느린 문제를 인식하고, AWS의 CloudFront로 캐싱을 도입하여 개선",
      "Travis CI, AWS CodeDeploy를 사용한 테스트 자동화",
      "NginX, Docker를 활용하여 Blue/Green 방식의 무중단 배포 자동화",
      "Swagger를 사용한 API 문서화 및 공유",
      "4개월간 약 80명의 유저에게 서비스하고, 유지보수 및 개선",
    ],
    references: [
      {
        text: "프로젝트 일지",
        link:
          "https://velog.io/@alvin/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%BD%94%EB%A1%9C%EB%82%98-%EC%86%94%EB%A3%A8%EC%85%98",
      },
      {
        text: "백엔드 코드",
        link: "https://github.com/HoseungJang/Corona-Solution-BackEnd",
      },
    ],
    tags: ["Back-end"],
  },
  {
    img: dsmMarketImage,
    title: "빠르고 간편한 교내 중고거래. 프로젝트 대마장터",
    duration: "2019.08 ~ 2020.01",
    description:
      "대마장터는 기숙사 생활 때문에 밖에서 물건을 사오거나, 자신의 물건을 처분하기가 힘든 학생들을 위해 만들어진 대덕 소프트웨어 마이스터고등학교 교내 중고거래 서비스에요.",
    activities: [
      "서비스 전체 백엔드 시스템 개발",
      "AWS EC2에 배포",
      "약 3개월간 끊임없이 리팩토링 하며 읽기 좋은 코드에 대한 고민",
    ],
    references: [
      {
        text: "구글 플레이 스토어",
        link:
          "https://play.google.com/store/apps/details?id=com.dsm.dsmmarketandroid",
      },
      {
        text: "백엔드 코드",
        link: "https://github.com/HoseungJang/dsm-market",
      },
    ],
    tags: ["Back-end"],
  },
];
