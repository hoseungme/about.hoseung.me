import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkButtonProps {
  className?: string;
  to: string;
}

export function LinkButton({
  className,
  to,
  children,
}: React.PropsWithChildren<LinkButtonProps>) {
  if (/^(http|https)/.test(to)) {
    return (
      <Container as="a" className={className} href={to}>
        {children}
      </Container>
    );
  }

  return (
    <Container className={className} to={to}>
      {children}
    </Container>
  );
}

const Container = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 12px;
  background-color: var(--grey0);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--grey1);
  }
`;
