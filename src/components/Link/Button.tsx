import React from "react";
import styled from "styled-components";

import { Project } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const LinkButton: React.FC<Project["references"][0]> = ({
  name,
  link,
}) => {
  return (
    <Link href={link} target="blank">
      {name}
    </Link>
  );
};

const Link = styled.a`
  width: fit-content;

  padding: 5px 15px;

  font-size: 20px;

  text-decoration: none;

  color: ${Color.White};

  border: 2px solid ${Color.White};

  &:hover {
    background-color: ${Color.White};
    color: ${Color.Black};

    transition: background-color 0.5s, color 0.5s;
  }
`;
