import styled from "styled-components";

import { adaptive } from "../../../constants/colors";

import { FadeIn } from "../../../components/common/FadeIn";

import { SectionTitle } from "./SectionTitle";

export function SkillSection() {
  return (
    <Container>
      <SectionTitle>기술 및 역량 요약</SectionTitle>
      <ul>
        <FadeIn as="li">
          <p className="font-regular">
            Javascript ES6+와 <Highlight>Typescript</Highlight>에 익숙합니다.{" "}
            <Highlight>타입 추론</Highlight>을 적극 활용하여{" "}
            <Highlight>개발자 경험을 개선</Highlight>합니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>React</Highlight>를 사용한 CSR 기반 프론트엔드 개발에
            익숙합니다. <Highlight>React의 렌더링 성능</Highlight>을 개선한
            경험이 있습니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>Node.js</Highlight>와{" "}
            <Highlight>AWS의 서버리스 인프라</Highlight>를 활용한 백엔드 API
            개발, 데이터 파이프라인 구축, SEO 처리 경험이 있습니다.{" "}
            <Highlight>Github Actions</Highlight>로 CI/CD를 자동화하는 것에
            익숙합니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>Lighthouse CI</Highlight> 지표를 활용해 여러 방식으로
            웹을 최적화해본 경험이 있습니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>웹뷰</Highlight> 환경을 위한 User Agent 처리, Applike UI
            등 다양한 시도를 해본 경험이 있습니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>프론트엔드, 백엔드 전체</Highlight>에 걸친 설계, 개발,
            유지보수를 해본 경험이 있습니다.
          </p>
        </FadeIn>
      </ul>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  > ul > li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Highlight = styled.span.attrs({ className: "font-medium" })`
  color: ${adaptive.green2};
`;
