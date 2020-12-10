import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

import { Color } from "../../constants/Color";

import { ModalProps } from "../../contexts/Modal";

import { hexToRgb } from "../../helpers/hexToRgb";

export const ModalContainer: React.FC<ModalProps> = ({ close, children }) => {
  return (
    <Container>
      <div className="modal">
        <div className="header">
          <button onClick={close}>
            <CgClose />
          </button>
        </div>
        {children}
      </div>
    </Container>
  );
};

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

  background-color: rgba(${hexToRgb(Color.Black)}, 0.5);

  > .modal {
    border-radius: 3px;

    background-color: ${Color.WhiteGrey};

    overflow: hidden;

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

        outline: none;

        > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;
