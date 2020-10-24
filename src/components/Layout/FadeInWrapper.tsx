import React, { PropsWithChildren } from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import { useInView } from "react-intersection-observer";

type Animation = "fadeInUp" | "fadeInDown" | "fadeInLeft";

export const FadeInWrapper: React.FC<PropsWithChildren<{
  animation: Animation;
  animationDelay?: number;
  intersecting: number;
}>> = ({ animation, animationDelay, intersecting, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: intersecting,
  });

  return (
    <Container
      className={inView ? "intersected" : undefined}
      animation={animation}
      delay={animationDelay}
      ref={ref}
    >
      {children}
    </Container>
  );
};

const animations: { [key in Animation]: Keyframes } = {
  fadeInUp: keyframes`
    from {
      opacity: 0;

      transform: translateY(10%);
    }
    to {
      opacity: 1;

      transform: translateY(0);
    }
  `,
  fadeInDown: keyframes`
    from {
      opacity: 0;

      transform: translateY(-10%);
    }
    to {
      opacity: 1;

      transform: translateY(0);
    }
  `,
  fadeInLeft: keyframes`
    from {
      opacity: 0;
      transform: translateX(5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `,
};

const Container = styled.div<{ animation: Animation; delay?: number }>`
  width: 100%;

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
