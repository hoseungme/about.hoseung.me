import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { IoLogoGithub } from "react-icons/io";
import { ImBook } from "react-icons/im";
import styled from "styled-components";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

import { GA } from "../../services/ga";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface Tab {
  icon: IconType;
  text: string;
  link: string;
}

const tabs: Tab[] = [
  {
    icon: IoLogoGithub,
    text: "github",
    link: "https://github.com/HoseungJang",
  },
  {
    icon: ImBook,
    text: "blog",
    link: "https://blog.hoseung.me/",
  },
];

export function Header() {
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
              <a
                key={index}
                href={tab.link}
                onClick={() =>
                  GA.trackHeaderEvent({
                    action: "Link Button Clicked",
                    label: tab.text,
                  })
                }
              >
                <Icon className="icon" />
                <div className="name">{tab.text}</div>
              </a>
            );
          })}
        </nav>
      </Container>
    </>
  );
}

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
    box-shadow: 0 0 15px ${Color.Grey};
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
          max-width: 120px;
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

  ${Media.Tablet} {
    height: 80px;

    padding: 0 20px;

    > .accounts {
      > a {
        margin-left: 10px;

        > .icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  ${Media.Mobile} {
    height: 60px;

    padding: 0 15px;

    > .accounts {
      > a {
        margin-left: 5px;

        > .icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
