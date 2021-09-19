import { PropsWithChildren, useEffect, useRef } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { ModalProps, useTransitionStatus } from "../contexts/Modal";

import { Color } from "../constants/Color";

export function ModalBase({ close, children }: PropsWithChildren<ModalProps>) {
  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  }, [close]);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      disableBodyScroll(current);

      return () => {
        enableBodyScroll(current);
      };
    }
  }, []);

  const transitionStatus = useTransitionStatus();

  return (
    <Container
      className={transitionStatus}
      onTouchMove={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation();
        close();
      }}
    >
      <div className="modal" ref={ref}>
        <div className="header">
          <button onClick={close}>
            <CgClose />
          </button>
        </div>
        {children}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.BlackTransparency50};

  opacity: 0;

  transition: opacity 0.3s;

  &.entered {
    opacity: 1;

    > .modal {
      transform: translateY(0);
    }
  }

  &.entering {
    opacity: 1;

    > .modal {
      transform: translateY(0);
    }
  }

  &.exiting {
    opacity: 0;

    > .modal {
      transform: translateY(5%);
    }
  }

  > .modal {
    max-width: 100%;
    max-height: 100%;

    display: flex;
    flex-direction: column;

    border-radius: 3px;

    background-color: ${Color.WhiteGrey};

    overflow: hidden;

    transform: translateY(5%);

    transition: transform 0.3s;

    > .header {
      padding-top: 10px;

      display: flex;
      justify-content: flex-end;

      > button {
        width: 20px;
        height: 20px;

        padding: 0;
        margin-right: 16px;

        border: 0;

        background-color: transparent;

        cursor: pointer;

        outline: none;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
