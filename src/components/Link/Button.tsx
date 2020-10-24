import React from "react";
import styled from "styled-components";

import { IProject } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const LinkButton: React.FC<
  IProject["references"][0] & { disabled?: boolean }
> = ({ name, link, disabled }) => {
  return (
    <Containter onClick={(e) => e.stopPropagation()} disabled={disabled}>
      <a href={link}>{name}</a>
    </Containter>
  );
};

const Containter = styled.button`
  width: fit-content;

  padding: 5px 15px;

  font-size: 1rem;

  border: 2px solid ${Color.White};
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.5s;

  > a {
    text-decoration: none;

    color: ${Color.White};

    transition: color 0.5s;
  }

  &:hover {
    background-color: ${Color.White};

    > a {
      color: ${Color.Black};
    }
  }
`;
