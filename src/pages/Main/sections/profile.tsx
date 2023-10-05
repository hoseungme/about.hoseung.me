import styled from "styled-components";

import { FadeIn } from "components/common/FadeIn";

const data = {
  title: "안녕하세요.\n소프트웨어 엔지니어\n장호승입니다.",
  descriptions: [
    "주어진 작업을 왜 하는지 이해하는 것을 중요하게 생각합니다.",
    "투명하게 일하며 서로 신뢰하는 조직을 좋아합니다.",
    "문제에 대해 가장 간단하면서도 합리적인 해결책을 찾기 위해 노력합니다.",
    "UI, UX에 대해 이야기하고 개선하는 과정을 좋아합니다.",
    "아름다운 UI/UX 인터랙션 구현에 관심이 많습니다.",
    "특정 분야에 한정지어 일하는 것 보단 새로운 것을 배워나가며 일하는 것을 좋아합니다.",
    "현역 산업기능요원으로 복무중입니다. (2024.01 종료)",
  ],
};

export function ProfileSection() {
  return (
    <Container>
      <FadeIn as="p" className="title font-bold">
        {data.title}
      </FadeIn>
      <FadeIn as="ul" className="descriptions">
        {data.descriptions.map((description, index) => (
          <li key={index}>
            <p className="font-medium">{description}</p>
          </li>
        ))}
      </FadeIn>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  > .title {
    font-size: 60px;
    margin: 2em 0 2em;
    background: linear-gradient(var(--green0), var(--green2));
    -webkit-background-clip: text;
    color: transparent;
    white-space: pre-line;

    @media screen and (max-width: 650px) {
      font-size: 35px;
    }
  }

  > .descriptions > li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;
