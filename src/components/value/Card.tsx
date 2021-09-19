import styled from "styled-components";

import { Value } from "../../data/value";

import { Color } from "../../constants/Color";

interface ValueCardProps {
  page: number;
  value: Value;
}

export function ValueCard({ page, value }: ValueCardProps) {
  const { title, description } = value;
  return (
    <Container>
      <div className="title">
        <div className="page">{page}.</div>
        <div className="values">{title}</div>
      </div>
      <div className="description">{description}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  > .title {
    width: fit-content;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 10px;

    > .page {
      flex: 0;

      margin-right: 15px;

      font-size: 1.8rem;

      color: ${Color.Grey};
    }

    > .values {
      font-size: 1.3rem;

      color: ${Color.LightBlack};
    }
  }

  > .description {
    padding-top: 25px;
    padding-bottom: 60px;

    box-sizing: border-box;

    border-top: 1px solid ${Color.Grey};

    color: ${Color.LightBlack};
  }
`;
