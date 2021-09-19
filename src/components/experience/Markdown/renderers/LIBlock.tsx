import styled from "styled-components";

export function LIBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.ul`
    display: list-item;

    list-style: disc;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  `,
};
