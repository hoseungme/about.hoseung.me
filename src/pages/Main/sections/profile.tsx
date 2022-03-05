import styled from "styled-components";

import { FadeIn } from "../../../components/common/FadeIn";

const data = {
  title: "안녕하세요.\n좋은 경험을 추구하는\n장호승입니다.",
  descriptions: [
    "주어진 작업의 이유를 중요하게 생각합니다.",
    "기록하고 돌아보고 개선하는 과정을 좋아합니다.",
    "자동화로 생산성을 높히는 것에 관심이 많습니다.",
    "하고싶은 일에 도전해볼 수 있는 조직을 좋아합니다.",
    "수평적이고 화기애애하며 투명한 조직을 좋아합니다.",
    "현역 산업기능요원으로 복무중입니다.",
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
