import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";

import { Color } from "../../constants/Color";

export const Header: React.FC = () => {
  const [shadow, setShadow] = useState(false);

  const listener = () => {
    setShadow(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <>
      <Container className={shadow ? "scrolled" : undefined}>
        <div className="title">장호승 Résumé</div>
        <div className="accounts">
          <a href="https://github.com/HoseungJang">
            <IoLogoGithub />
            <div className="name">github</div>
          </a>
        </div>
      </Container>
      <div style={{ height: 100 }} />
    </>
  );
};

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  z-index: 1;

  height: 100px;

  display: flex;
  flex-directoin: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;

  background-color: ${Color.White};

  box-shadow: 0;

  transition: box-shadow 0.5s;

  &.scrolled {
    box-shadow: 0 0 15px ${Color.LightGrey};
  }

  > .title {
    font-size: 35px;
    font-weight: 400;

    color: ${Color.DarkMint};
  }

  > .accounts {
    height: 100%;

    display: flex;
    flex-direction: row;

    > a {
      width: auto;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;

      margin-left: 20px;

      text-decoration: none;

      &:hover {
        > .name {
          max-width: 100px;
          width: auto;
        }
      }

      > svg {
        width: 50px;
        height: 50px;

        color: ${Color.DarkMint};
        background-color: ${Color.White};
      }

      > .name {
        max-width: 0;

        font-size: 25px;
        font-weight: 100;

        color: ${Color.DarkMint};

        overflow: hidden;

        transition: max-width 1s;
      }
    }
  }
`;
