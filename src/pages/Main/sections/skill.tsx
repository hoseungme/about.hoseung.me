import styled from "styled-components";

import { adaptive } from "constants/colors";

import { FadeIn } from "components/common/FadeIn";

import { SectionTitle } from "./SectionTitle";

export function SkillSection() {
  return (
    <Container>
      <SectionTitle>Skills</SectionTitle>
      <ul>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>Javascript</Highlight>와{" "}
            <Highlight>Typescript</Highlight>에 익숙합니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>React 기반의 CSR/SSR 프론트엔드 개발</Highlight>에
            익숙하고, 리렌더링 최적화, 번들 경량화 등 기본적인{" "}
            <Highlight>웹 성능 최적화</Highlight> 경험이 있습니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>Node.js 기반의 백엔드 개발</Highlight> 경험이 있습니다.
            Lambda, DynamoDB 등 <Highlight>AWS의 서버리스 인프라</Highlight>에
            익숙합니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>Node.js의 Module System</Highlight>인 CJS/ESM을 이해하고,
            두 Module System 모두에 호환 가능한 라이브러리를 운영 해본 경험이
            있습니다.
          </p>
        </FadeIn>
        <FadeIn as="li">
          <p className="font-regular">
            <Highlight>웹뷰 환경</Highlight>의 모바일 웹 제품 개발 경험이
            있습니다. User-Agent 파싱, 앱브릿지 통신, meta 태그 파싱 등{" "}
            <Highlight>네이티브와 웹이 상호작용하는 패턴</Highlight>에 매우
            익숙합니다.
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
