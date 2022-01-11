import styled from "styled-components";

export function OListBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.ol`
    padding-left: 22px;
    margin: 18px 0;
    list-style: decimal;
  `,
};
