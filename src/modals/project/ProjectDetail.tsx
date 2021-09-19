import React, { useEffect } from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

import { ModalBase } from "../base";

import { ModalProps } from "../../contexts/Modal";

import { GA } from "../../services/ga";

import { IProject } from "../../interfaces/section/Project";

export const ProjectDetail: React.FC<ModalProps & IProject> = ({
  close,
  img,
  title,
  description,
  activities,
  references,
}) => {
  useEffect(() => {
    GA.trackProjectSectionEvent({ action: "Modal Opened", label: title });
  }, []);

  return (
    <ModalBase close={close}>
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
            <a
              key={index}
              href={reference.link}
              onClick={() =>
                GA.trackProjectSectionEvent({
                  action: "Link Button Clicked",
                  label: reference.text,
                })
              }
            >
              {reference.text}
            </a>
          ))}
        </div>
      </Container>
    </ModalBase>
  );
};

const Container = styled.div`
  width: 700px;
  max-height: 800px;

  display: flex;
  flex-direction: column;

  padding: 20px 16px;

  box-sizing: border-box;

  overflow-y: scroll;

  > * {
    flex-grow: 1;
    flex-shrink: 0;
  }

  > .divider {
    width: 100%;
    height: 1px;

    margin: 20px 0;

    background-color: ${Color.Grey};
  }

  > .image {
    width: 100%;
    height: 300px;

    object-fit: contain;
  }

  > .description {
    padding: 0 10px;

    font-size: 0.85rem;
  }

  > .activities {
    padding-left: 30px;
    margin: 0;

    list-style: disc;

    > li {
      font-size: 0.85rem;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  > .references {
    display: flex;
    flex-flow: row wrap;

    > a {
      padding: 10px 8px;
      margin-bottom: 4px;

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

  ${Media.Tablet} {
    width: 500px;
    max-height: 600px;

    > .image {
      height: 200px;
    }

    > .references {
      > a {
        padding: 8px 6px;
      }
    }
  }

  ${Media.Mobile} {
    width: 300px;
    max-height: 400px;

    > .image {
      height: 100px;
    }

    > .activities {
      padding-left: 20px;
    }

    > .references {
      > a {
        padding: 5px 4px;
      }
    }
  }
`;
