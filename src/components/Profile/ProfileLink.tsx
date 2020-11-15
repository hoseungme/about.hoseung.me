import React from "react";
import styled from "styled-components";

import { GA } from "../../services/ga";

import { Color } from "../../constants/Color";

import { IProfile } from "../../interfaces/Profile";

export const ProfileLink: React.FC<IProfile["links"][0]> = ({ text, link }) => {
  return (
    <Container
      onClick={() => {
        GA.trackProfileSectionEvent({
          action: "Link Button Clicked",
          label: text,
        });
        window.location.href = link;
      }}
    >
      {text}
    </Container>
  );
};

const Container = styled.button`
  padding: 4px 8px;

  border: 1px solid ${Color.DarkMint};
  border-radius: 5px;

  background-color: ${Color.DarkMint};

  font-size: 1.1rem;
  color: ${Color.White};

  cursor: pointer;

  outline: none;

  transition: color 0.5s, background-color 0.5s;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${Color.DarkWhite};

    color: ${Color.DarkMint};
  }
`;
