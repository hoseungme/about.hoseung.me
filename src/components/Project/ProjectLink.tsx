import React from "react";
import styled from "styled-components";

import { GA } from "../../services/ga";

import { IProject } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const ProjectLink: React.FC<
  IProject["references"][0] & { disabled?: boolean }
> = ({ text, link, disabled }) => {
  return (
    <Containter
      href={link}
      onClick={(e) => {
        if (!disabled) {
          e.stopPropagation();
          GA.trackProjectSectionEvent({
            action: "Link Button Clicked",
            label: text,
          });
        } else {
          e.preventDefault();
        }
      }}
    >
      {text}
    </Containter>
  );
};

const Containter = styled.a`
  width: fit-content;

  padding: 5px 15px;

  border: 2px solid ${Color.White};
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.3s, color 0.3s;

  font-size: 16px;
  font-weight: 500;

  color: ${Color.White};
  text-decoration: none;

  outline: none;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: ${Color.White};

    color: ${Color.Black};
  }
`;
