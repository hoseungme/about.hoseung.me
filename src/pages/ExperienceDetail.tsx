import React, { useEffect } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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

const Container = styled.main``;
