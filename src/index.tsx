import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { ExperienceDetail } from "./pages/ExperienceDetail";

import { ModalContextProvider } from "./contexts/Modal";

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
  <ModalContextProvider>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience/:name" component={ExperienceDetail} />
      </Switch>
    </BrowserRouter>
  </ModalContextProvider>,
  document.getElementById("root")
);
