import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";

export const Footer: React.FC = () => {
  return (
    <Container>
      <span>ⓒ 2020</span>
      <a href="https://github.com/HoseungJang/resume">HoseungJang</a>
      <span>All RIGHTS RESERVED.</span>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 150px;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  font-weight: 500;

  color: ${Color.DarkMint};

  background-color: ${Color.LightMint};

  > a {
    margin: 0 8px;

    font-size: 1.2rem;
    font-weight: 700;

    color: ${Color.DarkMint};

    text-decoration: none;

    cursor: pointer;
  }

  > * {
    flex-shrink: 0;
  }
`;
