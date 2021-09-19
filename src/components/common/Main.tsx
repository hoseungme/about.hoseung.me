import React from "react";
import styled from "styled-components";

import { Media } from "../../constants/Media";

export const Main: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

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
