import React from "react";
import styled from "styled-components";

import { Color } from "../../../constants/Color";

export function BlockquoteBlock(props: any) {
  return <S.Container>{props.children}</S.Container>;
}

const S = {
  Container: styled.blockquote`
    width: 100%;

    padding: 0 20px;
    margin: 0;

    box-sizing: border-box;

    background-color: ${Color.LightGrey};
  `,
};
