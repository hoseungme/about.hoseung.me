import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../../../components/Layout/TransitionContainer";
import { ProfileLink } from "../../../components/Profile/ProfileLink";

import { IProfile } from "../../../interfaces/Profile";

import { Color } from "../../../constants/Color";
import { Device } from "../../../constants/Device";

export const ProfileSection: React.FC<IProfile> = ({
  profileImage,
  motto,
  comment,
  links,
}) => {
  return (
    <Container>
      <div className="profile">
        <TransitionContainer
          className="image"
          type="fadeInToDown"
          intersecting={0.8}
        >
          <img src={profileImage} alt="Profile" />
        </TransitionContainer>
      </div>
      <div className="description">
        <div className="text">
          <TransitionContainer
            className="topic"
            type="fadeInToUp"
            intersecting={0.5}
            delay={0.2}
            translateY={50}
          >
            WHO I AM
          </TransitionContainer>
          <TransitionContainer
            className="motto"
            type="fadeInToUp"
            intersecting={0.5}
            delay={0.4}
          >
            <h1>{motto}</h1>
          </TransitionContainer>
          <TransitionContainer
            className="comment"
            type="fadeInToUp"
            intersecting={0.5}
            delay={0.6}
          >
            {comment}
          </TransitionContainer>
        </div>
        <TransitionContainer
          className="links"
          type="fadeInToUp"
          intersecting={0.5}
          delay={0.8}
          translateY={40}
        >
          {links.map((props, index) => (
            <ProfileLink key={index} {...props} />
          ))}
        </TransitionContainer>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;

  margin: 0 auto;
  padding: 150px 20px;

  box-sizing: border-box;

  > .profile {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 20px 40px;

    box-sizing: border-box;

    .image {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      > img {
        width: 300px;
        height: 300px;

        border-radius: 50%;

        box-shadow: 0 0 15px ${Color.LightGrey};
      }
    }
  }

  > .description {
    max-width: 500px;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > .text {
      display: flex;
      flex-direction: column;

      > .topic {
        font-size: 0.85rem;
        font-weight: 700;
        color: ${Color.DarkMint};
      }

      > .motto {
        color: ${Color.Black};
      }

      > .comment {
        line-height: 30px;
        font-size: 0.95rem;
        color: ${Color.FontBlack};

        word-break: keep-all;
      }
    }

    > .links {
      margin-top: 8px;
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    padding: 100px 20px;

    box-sizing: border-box;

    > .profile {
      padding: 10px 20px;

      > .image {
        > img {
          width: 200px;
          height: 200px;

          border-radius: 50%;
        }
      }
    }

    > .description {
      max-width: 400px;

      > .text {
        > .comment {
          line-height: 27px;
        }
      }
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    flex-direction: column;
    align-items: center;

    padding: 50px 40px;

    > .profile {
      padding: 20px 0;
    }

    > .description {
      flex: 0;
      display: flex;
      justify-content: center;

      > .text {
        display: flex;
        align-items: center;

        text-align: center;

        > * {
          width: fit-content;
        }
      }

      > .links {
        display: flex;
        justify-content: center;
      }
    }
  }
`;
