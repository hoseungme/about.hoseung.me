import React from "react";
import styled from "styled-components";

export function Content({ children }: React.PropsWithChildren<{}>) {
  return <Container>{children}</Container>;
}

const Container = styled.main`
  margin-top: 70px;
  padding: 0 20px;

  @media screen and (max-width: 950px) {
    padding: 0 16px;
  }
`;
