import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import classNames from "classnames";
import { useInView, IntersectionOptions } from "react-intersection-observer";

type Effect = "fadeInUp" | "fadeInDown";

export const TransitionContainer: React.FC<
  JSX.IntrinsicElements["div"] & {
    onInView?: () => void;
    className?: string;
    effect: Effect;
    duration?: number;
    delay?: number;
    translateY?: number;
    intersectionOptions?: Omit<IntersectionOptions, "triggerOnce">;
  }
> = ({
  onInView,
  children,
  className,
  intersectionOptions = {},
  ...options
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    ...intersectionOptions,
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
      {...(options as any)}
    >
      {children}
    </Container>
  );
};

const effects: {
  [key in Effect]: (
    duration?: number,
    delay?: number,
    translateY?: number
  ) => ReturnType<typeof css>;
} = {
  fadeInUp: (duration, delay, translateY) => css`
    opacity: 0;
    transform: translateY(${translateY ?? 10}%);

    transition: opacity ${duration ?? 1}s ${delay ?? 0}s,
      transform ${duration ?? 1}s ${delay ?? 0}s;

    &.intersected {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  fadeInDown: (duration, delay, translateY) => css`
    opacity: 0;
    transform: translateY(-${translateY ?? 10}%);

    transition: opacity ${duration ?? 1}s ${delay ?? 0}s,
      transform ${duration ?? 1}s ${delay ?? 0}s;

    &.intersected {
      opacity: 1;
      transform: translateY(0);
    }
  `,
};

const Container = styled.div<{
  effect: Effect;
  duration?: number;
  delay?: number;
  translateY?: number;
}>`
  ${({ effect, duration, delay, translateY }) =>
    effects[effect](duration, delay, translateY)}
`;
