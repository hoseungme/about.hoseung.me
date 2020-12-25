import React from "react";
import styled from "styled-components";

import { GA } from "../../services/ga";

import { IProfile } from "../../interfaces/section/Profile";

import { Color } from "../../constants/Color";

export const ProfileLink: React.FC<IProfile["links"][0]> = ({ text, link }) => {
  return (
    <Container
      href={link}
      onClick={() => {
        GA.trackProfileSectionEvent({
          action: "Link Button Clicked",
          label: text,
        });
      }}
    >
      {text}
    </Container>
  );
};

const Container = styled.a`
  padding: 7px 7px;

  border: 0;
  border-radius: 5px;

  box-shadow: 0 0 5px 0.1px ${Color.Grey};

  background-color: ${Color.DarkMint};

  font-size: 1rem;
  color: ${Color.White};
  text-decoration: none;

  outline: none;

  transition: color 0.3s, background-color 0.3s;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${Color.DarkWhite};

    color: ${Color.DarkMint};
  }
`;
