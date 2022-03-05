import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface FadeInProps
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  as?: string | React.ComponentType<any>;
}

export function FadeIn({ children, as, ...props }: FadeInProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const className = React.useMemo(() => {
    return [props.className ?? "", inView ? "viewed" : ""].join(" ");
  }, [props.className, inView]);
  return (
    <Container as={as} {...props} className={className} ref={ref}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;

  &.viewed {
    visibility: visible;
    opacity: 1;
  }
`;
