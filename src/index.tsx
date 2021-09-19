import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop";

import { Home } from "./pages/Home";
import { ExperienceDetail } from "./pages/ExperienceDetail";

import { ModalContextProvider } from "./contexts/Modal";

import { Color } from "./constants/Color";
import { Media } from "./constants/Media";

const GlobalStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: ${Color.DarkWhite};

    font-family: 'Gothic A1', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4;

    ul {
      margin: 0;
      padding: 0;
  
      list-style: none;
    }

    ${Media.Tablet} {
      font-size: 17px;
    }

    ${Media.Mobile} {
      font-size: 14px;
    }
  }
`;

ReactDOM.render(
  <ModalContextProvider>
    <GlobalStyles />
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience/:id" component={ExperienceDetail} />
      </Switch>
    </BrowserRouter>
  </ModalContextProvider>,
  document.getElementById("root")
);
