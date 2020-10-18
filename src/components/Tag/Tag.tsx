import React from "react";
import styled from "styled-components";

import { Project } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  return <Container>{tag}</Container>;
};

const Container = styled.div`
  width: fit-content;

  padding: 5px;

  font-size: 20px;

  background-color: ${Color.White};

  border-radius: 5px;
`;
