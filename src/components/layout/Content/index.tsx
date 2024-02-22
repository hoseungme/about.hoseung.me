import {
  DesktopHeaderHeight,
  MobileHeaderHeight,
  MobileMediaQuery,
} from "constants/css";
import React from "react";
import styled from "styled-components";

export function Content({ children }: React.PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  margin-top: ${DesktopHeaderHeight}px;
  padding: 0 20px;

  ${MobileMediaQuery} {
    margin-top: ${MobileHeaderHeight}px;
    padding: 0 16px;
  }
`;
