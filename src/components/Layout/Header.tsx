import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

import { Account } from "../../interfaces/Account";

import { Color } from "../../constants/Color";

export const Header: React.FC<{ accounts: Account[] }> = ({ accounts }) => {
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
    <Container className={shadow ? "scrolled" : undefined}>
      <div className="title">Hoseung Jang Résumé</div>
      <nav className="accounts">
        {accounts.map((account, index) => (
          <a key={index} href={account.link}>
            <Icon className="icon" icon={account.icon} />
            <div className="name">{account.name}</div>
          </a>
        ))}
      </nav>
    </Container>
  );
};

const Container = styled.header`
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

  background-color: ${Color.DarkWhite};

  box-shadow: 0;

  transition: box-shadow 0.5s;

  &.scrolled {
    box-shadow: 0 0 15px ${Color.LightGrey};
  }

  > .title {
    font-family: "Bebas Neue", cursive;
    font-size: 2.5rem;

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

      > .icon {
        width: 50px;
        height: 50px;

        color: ${Color.DarkMint};
        background-color: ${Color.DarkWhite};
      }

      > .name {
        max-width: 0;

        font-family: "Bebas Neue", cursive;
        font-size: 2rem;

        color: ${Color.DarkMint};

        overflow: hidden;

        transition: max-width 0.8s cubic-bezier(0.4, 0, 0, 0.7);
      }
    }
  }
`;
