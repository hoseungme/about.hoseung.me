import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";

export const Tag: React.FC<{ tag: string }> = ({ tag }) => {
  return <Container>{tag}</Container>;
};

const Container = styled.div`
  width: fit-content;

  padding: 5px;

  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;

  color: ${Color.LightBlack};

  background-color: ${Color.White};

  border-radius: 5px;
`;
