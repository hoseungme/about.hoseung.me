import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import { Home } from "./Home";

import { Color } from "./constants/Color";
import { Device } from "./constants/Device";

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: ${Color.DarkWhite};

    font-family: 'Gothic A1', sans-serif;
    font-weight: 300;

    font-size: 20px;

    @media (max-width: ${Device.Tablet}px) {
      font-size: 17px;
    }

    @media (max-width: ${Device.Mobile}px) {
      font-size: 14px;
    }
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <Home />
  </>,
  document.getElementById("root")
);
