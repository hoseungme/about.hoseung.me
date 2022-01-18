import styled from "styled-components";

export function ParagraphBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.p`
    margin: 8px 0;
  `,
};
