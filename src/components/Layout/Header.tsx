import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import { IHeaderTab } from "../../interfaces/HeaderTab";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const Header: React.FC<{ tabs: IHeaderTab[] }> = ({ tabs }) => {
  const { ref, inView } = useInView({ initialInView: true });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(!inView);
  }, [inView]);

  return (
    <>
      <div ref={ref} />
      <Container className={classNames({ scrolled: isScrolled })}>
        <div className="title">Hoseung Jang Résumé</div>
        <nav className="accounts">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <a key={index} href={tab.link}>
                <Icon className="icon" />
                <div className="name">{tab.text}</div>
              </a>
            );
          })}
        </nav>
      </Container>
    </>
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

        transition: max-width 0.3s cubic-bezier(0.4, 0, 0, 0.7);
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
