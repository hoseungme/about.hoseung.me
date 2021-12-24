import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useScrollToTopOnHistoryChange } from "./hooks/useScrollToTopOnHistoryChange";

import { Home } from "./pages/Home";
import { ExperienceDetail } from "./pages/ExperienceDetail";

import { Color } from "./constants/Color";
import { Media } from "./constants/Media";

export function Main() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <RouteSwitch />
      </BrowserRouter>
    </>
  );
}

function RouteSwitch() {
  useScrollToTopOnHistoryChange();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/experience/:id" component={ExperienceDetail} />
    </Switch>
  );
}

const GlobalStyles = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: ${Color.White};

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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
