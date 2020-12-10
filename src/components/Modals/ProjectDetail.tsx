import React from "react";
import styled from "styled-components";
import { Color } from "../../constants/Color";

import { ModalContainer } from "../ModalBase/ModalContainer";

import { ModalProps } from "../../contexts/Modal";

import { IProject } from "../../interfaces/Project";

export const ProjectDetail: React.FC<ModalProps & IProject> = ({
  close,
  img,
  description,
  activities,
  references,
}) => {
  return (
    <ModalContainer close={close}>
      <Container>
        <img className="image" src={img} alt="Project" />
        <div className="divider" />
        <div className="description">{description}</div>
        <div className="divider" />
        <ul className="activities">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <div className="divider" />
        <div className="references">
          {references.map((reference, index) => (
            <a key={index} href={reference.link}>
              {reference.text}
            </a>
          ))}
        </div>
      </Container>
    </ModalContainer>
  );
};

const Container = styled.div`
  width: 700px;
  max-height: 800px;

  display: flex;
  flex-direction: column;

  padding: 20px 16px;

  box-sizing: border-box;

  overflow-y: auto;

  > * {
    flex-grow: 1;
    flex-shrink: 0;
  }

  > .divider {
    width: 100%;
    height: 1px;

    margin: 20px 0;

    background-color: ${Color.LightGrey};
  }

  > .image {
    width: 100%;
    height: 300px;

    object-fit: contain;
  }

  > .description {
    font-size: 0.85rem;
  }

  > .activities {
    margin: 0;

    > li {
      font-size: 0.85rem;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  > .references {
    > a {
      padding: 10px 8px;

      box-sizing: border-box;

      background-color: ${Color.DarkMint};

      border: 1px solid ${Color.DarkMint};
      border-radius: 5px;

      font-size: 0.95rem;
      color: ${Color.White};
      text-decoration: none;

      transition: color 0.3s, background-color 0.3s;

      &:hover {
        background-color: ${Color.White};
        color: ${Color.DarkMint};
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;
