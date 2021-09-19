import styled from "styled-components";

import { ChildrenProp } from "../../types/react";

import { Media } from "../../constants/Media";

export function Main({ children }: ChildrenProp) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 100px;

  overflow: hidden;

  ${Media.Tablet} {
    padding-top: 80px;
  }

  ${Media.Mobile} {
    padding-top: 50px;
  }
`;
