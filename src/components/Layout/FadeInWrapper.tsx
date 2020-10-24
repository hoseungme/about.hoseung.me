import React, { PropsWithChildren } from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

type Animation =
  | "fadeInToUp"
  | "fadeInToDown"
  | "fadeInToLeft"
  | "fadeInToRight";

export const FadeInWrapper: React.FC<PropsWithChildren<{
  className?: string;
  animation: Animation;
  animationDelay?: number;
  intersecting: number;
}>> = ({ className, animation, animationDelay, intersecting, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: intersecting,
  });

  return (
    <Container
      className={`${className ?? ""} ${inView ? "intersected" : ""}`}
      animation={animation}
      delay={animationDelay}
      ref={ref}
    >
      {children}
    </Container>
  );
};

const animations: { [key in Animation]: Keyframes } = {
  fadeInToUp: keyframes`
    from {
      opacity: 0;

      transform: translateY(10%);
    }
    to {
      opacity: 1;

      transform: translateY(0);
    }
  `,
  fadeInToDown: keyframes`
    from {
      opacity: 0;

      transform: translateY(-10%);
    }
    to {
      opacity: 1;

      transform: translateY(0);
    }
  `,
  fadeInToLeft: keyframes`
    from {
      opacity: 0;
      transform: translateX(5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  fadeInToRight: keyframes`
    from {
      opacity: 0;
      transform: translateX(-5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
};

const Container = styled.div<{ animation: Animation; delay?: number }>`
  display: flex;

  opacity: 0;

  transition-delay: ${({ delay }) => delay ?? 0}s;
  transition-property: opacity;

  &.intersected {
    opacity: 1;

    animation: ${({ animation }) => animations[animation]} 1s;
    animation-delay: ${({ delay }) => delay ?? 0}s;
  }
`;
