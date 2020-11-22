import React, { PropsWithChildren, useEffect } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

type Effect = "fadeInToUp" | "fadeInToDown";

export const TransitionContainer: React.FC<PropsWithChildren<{
  intersecting: number;
  onInView?: () => void;
  className?: string;
  effect: Effect;
  delay?: number;
  translateY?: number;
}>> = ({ intersecting, onInView, children, className, ...options }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: intersecting,
  });

  useEffect(() => {
    if (inView) {
      onInView?.();
    }
  }, [inView, onInView]);

  return (
    <Container
      className={classNames(className, { intersected: inView })}
      ref={ref}
      {...options}
    >
      {children}
    </Container>
  );
};

const effects: {
  [key in Effect]: (
    delay?: number,
    translateY?: number
  ) => ReturnType<typeof css>;
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
  ${({ effect, delay, translateY }) => effects[effect](delay, translateY)}
`;
