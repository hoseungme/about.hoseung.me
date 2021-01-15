import React, { useEffect } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { Color } from "../constants/Color";
import { Device } from "../constants/Device";

type LocationState = {
  content: string;
};

export const ExperienceDetail: React.FC<RouteComponentProps> = ({
  location,
}) => {
  const { content } = location.state as LocationState;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 20%;

  box-sizing: border-box;

  a {
    font-weight: 500;
    color: ${Color.DarkMint};
    text-decoration: none;
  }

  @media (max-width: ${Device.Tablet}px) {
    padding: 0 10%;
  }

  @media (max-width: ${Device.Mobile}px) {
    padding: 0 2%;
  }
`;
