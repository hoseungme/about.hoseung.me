import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Icon } from "../Icon/Icon";

import { IAccount } from "../../interfaces/Account";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const Header: React.FC<{ accounts: IAccount[] }> = ({ accounts }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const listener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <Container className={isScrolled ? "scrolled" : undefined}>
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
    width: auto;

    font-family: "Bebas Neue", cursive;
    font-size: 2rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

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
        width: auto;

        font-family: "Bebas Neue", cursive;
        font-size: 2rem;

        color: ${Color.DarkMint};

        overflow: hidden;

        transition: max-width 0.8s cubic-bezier(0.4, 0, 0, 0.7);
      }
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    height: 80px;

    padding: 0 20px;

    > .accounts {
      > a {
        > .icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    height: 60px;

    padding: 0 15px;

    > .accounts {
      > a {
        > .icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
