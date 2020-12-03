import React from "react";
import styled from "styled-components";

import { GA } from "../../services/ga";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const Footer: React.FC = () => {
  return (
    <Container>
      <span>
        ⓒ 2020
        <a
          href="https://github.com/HoseungJang/resume"
          onClick={() => GA.trackFooterEvent({ action: "Name Clicked" })}
        >
          HoseungJang
        </a>
        All RIGHTS RESERVED.
      </span>
    </Container>
  );
};

const Container = styled.footer`
  width: 100%;
  height: 150px;

  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  background-color: ${Color.LightMint};

  > span {
    font-size: 1.1rem;
    font-weight: 500;

    color: ${Color.DarkMint};

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
  }

  @media (max-width: ${Device.Tablet}px) {
    height: 100px;
  }

  @media (max-width: ${Device.Mobile}px) {
    height: 70px;
  }
`;
