import styled from "styled-components";

import { GA } from "../../services/ga";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface FooterProps {
  link: string;
}

export function Footer({ link }: FooterProps) {
  return (
    <Container>
      <span>
        ⓒ 2020
        <a
          href={link}
          onClick={() => GA.trackFooterEvent({ action: "Name Clicked" })}
        >
          HoseungJang
        </a>
        All RIGHTS RESERVED.
      </span>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  height: 150px;

  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  background-color: ${Color.LightMint};

  > span {
    font-size: 1.1rem;
    font-weight: 500;

    color: ${Color.DarkMint};

    > a {
      margin: 0 8px;

      font-size: 1.2rem;
      font-weight: 700;

      color: ${Color.DarkMint};

      text-decoration: none;

      cursor: pointer;
    }

    > * {
      flex-shrink: 0;
    }
  }

  ${Media.Tablet} {
    height: 100px;
  }

  ${Media.Mobile} {
    height: 70px;
  }
`;
