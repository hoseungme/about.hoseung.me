import React, { PropsWithChildren } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { useInView } from "react-intersection-observer";

type Effect = "fadeInToUp" | "fadeInToDown";

export const TransitionContainer: React.FC<PropsWithChildren<{
  className?: string;
  type: Effect;
  delay?: number;
  intersecting: number;
}>> = ({ className, type, delay, intersecting, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: intersecting,
  });

  return (
    <Container
      className={`${className ?? ""} ${inView ? "intersected" : ""}`}
      effect={type}
      delay={delay}
      ref={ref}
    >
      {children}
    </Container>
  );
};

const effects: {
  [key in Effect]: (delay?: number) => FlattenSimpleInterpolation;
} = {
  fadeInToUp: (delay?: number) => css`
    opacity: 0;
    transform: translateY(10%);

    transition: all 1s ${delay ?? 0}s;

    &.intersected {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  fadeInToDown: (delay?: number) => css`
    opacity: 0;
    transform: translateY(-10%);

    transition: all 1s ${delay ?? 0}s;

    &.intersected {
      opacity: 1;
      transform: translateY(0);
    }
  `,
};

const Container = styled.div<{ effect: Effect; delay?: number }>`
  display: flex;

  ${({ effect, delay }) => effects[effect](delay)}
`;
