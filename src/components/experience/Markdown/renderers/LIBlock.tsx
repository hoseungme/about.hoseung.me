import styled from "styled-components";

import { Color } from "../../../../constants/Color";

export function LIBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.ul`
    display: list-item;

    color: ${Color.LightBlack};
    font-weight: 400;

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  `,
};
