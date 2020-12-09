import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";

import { hexToRgb } from "../../helpers/hexToRgb";

export const ModalContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="modal">{children}</div>
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
  }
`;
