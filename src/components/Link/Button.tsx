import React from "react";
import styled from "styled-components";

import { IProject } from "../../interfaces/Project";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

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

  border: 2px solid ${Color.White};
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.5s;

  font-size: 1rem;
  font-weight: 500;

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

  @media (max-width: ${Device.Tablet}px) {
    font-size: 1.3rem;
  }

  @media (max-width: ${Device.Mobile}px) {
    font-size: 1.5rem;
  }
`;
