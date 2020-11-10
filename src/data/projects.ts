import { IProject } from "../interfaces/Project";

import referringImage from "../images/project/referring.png";
import diaryImage from "../images/project/diary.png";
import myLittleCookImage from "../images/project/my-little-cook.png";
import coNoteImage from "../images/project/co-note.png";
import coronaSolutionImage from "../images/project/corona-solution.png";
import apartmentPriceAPIImage from "../images/project/apartment-price-api.png";
import dsmMarketImage from "../images/project/dsm-market.png";

export const projects: IProject[] = [
  {
    img: referringImage,
    title: "읽다가 말아도 안심. 주소를 잊어도 안심. 프로젝트 Referring",
    duration: "2020.08 ~ 2020.10",
    description:
      "Reffering은 나만의 북마크 서비스 입니다. operation id에 따라 request paramters가 자동 추론되게 만들어 보면서 Typescript의 타입 추론에 대한 이해도를 한층 높힐 수 있었고, 반응형 웹을 처음 만들어 보았습니다. 서버는 fp-ts라는 함수형 라이브러리와 Express를 사용하여 개발했고, Docker를 활용했습니다.",
    references: [
      {
        text: "프로젝트 일지",
        link:
          "https://velog.io/@alvin/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Referring",
      },
      {
        text: "프론트엔드, 백엔드 코드",
        link: "https://github.com/HoseungJang/Referring/",
      },
    ],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: diaryImage,
    title: "개발만 기록하니? 오늘 하루도 기록해. 프로젝트 Diary",
    duration: "2020.08 ~ 2020.08",
    description:
      "Diary는 간단한 일기장 프로젝트 입니다. 리액트를 처음 써보았던 프로젝트 였고, infinite scrolling을 구현하면서 viewport, intersection observer 등 웹 개발에 있어서 기초적인 개념들을 많이 배웠습니다.",
    references: [
      {
        text: "프론트엔드, 백엔드 코드",
        link: "https://github.com/HoseungJang/diary",
      },
    ],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: myLittleCookImage,
    title: "특별한 레시피를 찾으시나요? 프로젝트 My Little Cook",
    duration: "2020.07 ~ 2020.08",
    description:
      "My Little Cook은 요리 레시피를 제공해주는 서비스입니다. 서버리스 백엔드에 처음 입문했고, AWS Lambda를 기반으로 개발했습니다. serverless framework를 사용해서 인프라를 구축하고, 배포했습니다. Auth, User, Fridge, Recipe로 백엔드 서비스를 나누어서 개발했습니다.",
    references: [],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: coNoteImage,
    title: "어디서든 함께해. 프로젝트 CoNote",
    duration: "2020.07 ~ 2020.08",
    description:
      "CoNote는 실시간 웹 자바스크립트 에디터 입니다. Microsoft의 Monaco Editor를 기반하였고, Socket.io를 사용해 접속자들에게 편집된 코드가 실시간으로 반영될 수 있도록 하였습니다.",
    references: [
      {
        text: "프론트엔드, 백엔드 코드",
        link: "https://github.com/HoseungJang/CoNote",
      },
    ],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: coronaSolutionImage,
    title: "전국의 마스크 재고정보가 한눈에. 프로젝트 코로나 솔루션",
    duration: "2020.03 ~ 2020.07",
    description:
      "코로나 솔루션은 코로나 19 확진자 현황, 진료소 위치 정보를 제공해주는 서비스 입니다. CloudFront 캐싱을 통해서 응답이 느렸던 문제를 해결하거나 Docker, NginX를 사용한 Blue-Green 무중단 배포 자동화를 구축하는 등, 4월 출시 이후 3개월 동안 약 70명의 유저들을 대상으로 유지보수 하며 사용자 경험과 서비스 개선에 많은 노력을 기울였습니다.",
    references: [
      {
        text: "백엔드 코드",
        link: "https://github.com/HoseungJang/Corona-Solution-BackEnd",
      },
    ],
    tags: ["Back-end"],
  },
  {
    img: apartmentPriceAPIImage,
    title: "공시가격 정보를 한눈에. 공동주택 공시가격 API",
    duration: "2020.01 ~ 2020.03",
    description:
      "고등학교 2학년 겨울방학 때 주식회사 집토스에서 인턴으로 근무하며 진행했던 토이 프로젝트 입니다. 프론트엔드 개발에 JQuery를 사용했고, CI/CD 자동화 프로세스를 처음 구축해 보았습니다. 약 1300만개의 대용량 데이터를 다루었기 때문에 인덱싱 등의 성능 개선에 많은 노력을 기울였습니다.",
    references: [],
    tags: ["Front-end", "Back-end"],
  },
  {
    img: dsmMarketImage,
    title: "빠르고 간편한 교내 중고거래. 프로젝트 대마장터",
    duration: "2019.08 ~ 2020.01",
    description:
      "대마장터는 기숙사 생활 때문에 밖에서 물건을 사오거나, 자신의 물건을 처분하기가 힘든 학생들을 위해 만들어진 대덕 소프트웨어 마이스터고등학교 교내 중고거래 서비스 입니다. 개발을 시작한 이래로 처음 진행했던 프로젝트이고, 2020년 1월에 서비스를 중단했지만, 그 전까지 3개월 간 리팩토링을 하며 서비스의 개선과 유지보수에 대해 배워볼 수 있었습니다.",
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
