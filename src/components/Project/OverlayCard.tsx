import React from "react";
import styled from "styled-components";

import { LinkButton } from "../Link/Button";

import { IProject } from "../../interfaces/Project";

import { Color } from "../../constants/Color";

export const OverlayCard: React.FC<
  Pick<IProject, "description" | "references"> & { visible: boolean }
> = ({ description, references, visible }) => {
  return (
    <Container visible={visible}>
      <div className="description">{description}</div>
      <div className="references">
        {references.map((props, index) => (
          <LinkButton key={index} disabled={!visible} {...props} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div<{ visible: boolean }>`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1;

  width: 100%:
  height: 100%;

  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: scroll;

  padding: 10px;

  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.8);

  opacity: ${({ visible }) => (visible ? 1 : 0)};

  transition: opacity 0.5s;

  > .description {
    font-size: 16px;

    color: ${Color.White};
  }

  > .references {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;

    margin-top: 10px;

    > * {
      margin: 5px 0;
      flex-shrink: 0;
    }
  }
`;
