import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { RouteComponentProps } from "react-router-dom";

type LocationState = {
  content: string;
};

export const ExperienceDetail: React.FC<RouteComponentProps> = ({
  location,
}) => {
  const { content } = location.state as LocationState;
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
};

const Container = styled.main``;
