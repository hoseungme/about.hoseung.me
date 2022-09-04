import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import { Footer } from "./components/layout/Footer";
import { Content } from "./components/layout/Content";
import { Header } from "./components/layout/Header";

import { RouteSwitch } from "./pages";

const GlobalStyle = createGlobalStyle`
  :root {
    --white0: rgba(255, 255, 255, 1);
    --white0_t70: rgba(255, 255, 255, 0.7);

    --black0: rgba(85, 87, 112, 1);
    --black1: rgba(0, 0, 0, 1);

    --grey0: rgba(242, 242, 242, 1);
    --grey1: rgba(230, 230, 230, 1);
    --grey2: rgba(216, 216, 216, 1);
    --grey3: rgba(205, 205, 205, 1);

    --green0: rgba(0, 230, 195, 1);
    --green1: rgba(0, 204, 173, 1);
    --green2: rgba(0, 179, 152, 1);
    --green3: rgba(0, 153, 130, 1);

    @media (prefers-color-scheme: dark) {
      --white0: rgba(36, 36, 36, 1);
      --white0_t70: rgba(36, 36, 36, 0.7);

      --black0: rgba(216, 216, 216, 1);
      --black1: rgba(189, 189, 189, 1);

      --grey0: rgba(110, 110, 110, 1);
      --grey1: rgba(100, 100, 100, 1);
      --grey2: rgba(90, 90, 90, 1);
      --grey3: rgba(80, 80, 80, 1);
  
      --green0: rgba(0, 230, 195, 1);
      --green1: rgba(0, 204, 173, 1);
      --green2: rgba(0, 179, 152, 1);
      --green3: rgba(0, 153, 130, 1);
    }
  }

  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    background-color: var(--white0);

    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 20px;
    font-weight: 300;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    color: var(--black0);

    @media screen and (max-width: 950px) {
      font-size: 16px;
    }

    * {
      box-sizing: border-box;
    }

    a {
      color: var(--black0);
      text-decoration: none;
    }

    p {
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      > li {
        position: relative;
        padding-left: 1.5em;

        &::before {
          content: "";
          position: absolute;
          top: 0.375em;
          left: 0.25em;
          width: 0.375em;
          height: 0.375em;
          border-radius: 50%;
          background-color: var(--grey0);
        }
      }
    }

    .font-regular {
      font-weight: 300;
    }

    .font-medium {
      font-weight: 500;
    }

    .font-bold {
      font-weight: 700;
    }

    > #root {
      width: 100%;
      min-height: 100%;
      display: flex;
      overflow: auto;
    }
  }
`;

const GlobalWrapper = styled.main`
  position: relative;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <GlobalWrapper>
      <Header />
      <Content>
        <RouteSwitch />
      </Content>
      <Footer />
    </GlobalWrapper>
  </BrowserRouter>,
  document.getElementById("root")
);
