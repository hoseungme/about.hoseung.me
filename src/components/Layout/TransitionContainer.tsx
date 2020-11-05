import React, { PropsWithChildren } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

type Effect = "fadeInToUp" | "fadeInToDown";

export const TransitionContainer: React.FC<PropsWithChildren<{
  className?: string;
  type: Effect;
  intersecting: number;
  delay?: number;
  translateY?: number;
}>> = ({ className, type, intersecting, delay, translateY, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: intersecting,
  });

  return (
    <Container
      className={classNames(className, { intersected: inView })}
      effect={type}
      delay={delay}
      translateY={translateY}
      ref={ref}
    >
      {children}
    </Container>
  );
};

const effects: {
  [key in Effect]: (
    delay?: number,
    translateY?: number
  ) => FlattenSimpleInterpolation;
} = {
  fadeInToUp: (delay, translateY) => css`
    opacity: 0;
    transform: translateY(${translateY ?? 10}%);

    transition: opacity 1s ${delay ?? 0}s, transform 1s ${delay ?? 0}s;

    &.intersected {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  fadeInToDown: (delay, translateY) => css`
    opacity: 0;
    transform: translateY(-${translateY ?? 10}%);

    transition: opacity 1s ${delay ?? 0}s, transform 1s ${delay ?? 0}s;

    &.intersected {
      opacity: 1;
      transform: translateY(0);
    }
  `,
};

const Container = styled.div<{
  effect: Effect;
  delay?: number;
  translateY?: number;
}>`
  display: flex;

  ${({ effect, delay, translateY }) => effects[effect](delay, translateY)}
`;
