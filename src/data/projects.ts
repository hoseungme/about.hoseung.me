import { IProject } from "../interfaces/Project";

import referringImage from "../images/project/referring.png";
import coronaSolutionImage from "../images/project/corona-solution.png";

export const projects: IProject[] = [
  {
    img: referringImage,
    name: "읽다가 말아도 안심. 주소를 잊어도 안심. 프로젝트 Referring",
    duration: "2020.08 ~ 2020.10",
    description:
      "Reffering은 나만의 북마크 서비스 입니다. Chrome 브라우저의 북마크가 작은게 마음에 들지 않아서 만들어보게 되었습니다. 미디어쿼리를 쓰면서 반응형 웹을 접해보게 되었고, react-query 라이브러리를 사용할 때 Request Parameters가 operation ID에 따라서 추론되도록 만들면서 Typescript의 타입 추론에 대한 이해도를 한층 높힐 수 있었습니다. 이외에 간단한 애니메이션과 이벤트를 적용해보기도 했습니다. 서버는 Express와 fp-ts라는 함수형 라이브러리에 기반하여 개발했습니다.",
    references: [
      {
        name: "프로젝트 일지",
        link:
          "https://velog.io/@alvin/series/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Referring",
      },
      {
        name: "깃허브",
        link: "https://github.com/HoseungJang/Referring",
      },
    ],
    tags: ["Front-end"],
  },
  {
    img: coronaSolutionImage,
    name: "전국의 마스크 재고정보가 한눈에. 프로젝트 코로나 솔루션",
    duration: "2020.03 ~ 2020.07",
    description:
      "코로나 솔루션은 코로나 19 확진자 현황, 진료소 위치 정보를 제공해주는 서비스 입니다. 의존성 주입 적용, 디자인 패턴 등 유지보수를 용이하게 만들어주는 것들에 대해서 굉장히 많이 고민하였습니다. 또한 응답속도가 느리다는 문제를 인식하고 CloudFront 캐싱을 통해서 해결하는 등 서비스 개선에도 많은 노력을 기울였습니다. 그리고 Travis-CI, Docker를 사용하여 테스트 및 무중단 배포를 자동화하는 등 개발 편의성도 많이 고려하였습니다.",
    references: [
      {
        name: "깃허브",
        link: "https://github.com/HoseungJang/Corona-Solution-BackEnd",
      },
    ],
    tags: ["Back-end"],
  },
];
