import { MobileMediaQuery } from "constants/css";
import React from "react";
import styled from "styled-components";

export function Content({ children }: React.PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  margin-top: 70px;
  padding: 0 20px;

  ${MobileMediaQuery} {
    padding: 0 16px;
  }
`;
