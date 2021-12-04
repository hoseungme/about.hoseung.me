import styled, { css } from "styled-components";

import { Color } from "../../constants/Color";

const animation = css`
  @keyframes loading {
    0% {
      background-color: ${Color.LightGrey};
    }
    50% {
      background-color: ${Color.Grey};
    }
    100% {
      background-color: ${Color.LightGrey};
    }
  }
  animation: loading linear infinite 1s;
`;

export const Skeleton = {
  Rect: styled.div`
    ${animation}
  `,
  Text: styled.div`
    ${animation}
    &:empty:before {
      content: "\\00a0";
    }
  `,
};
