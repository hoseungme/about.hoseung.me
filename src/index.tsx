import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Color } from "./constants/Color";

import { Routes } from "./routes";

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: ${Color.DarkWhite};
    
    font-family: 'Gothic A1', sans-serif;
    font-weight: 100;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <BrowserRouter basename="/resume">
      <Routes />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
