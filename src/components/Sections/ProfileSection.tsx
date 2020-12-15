import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";
import { ProfileLink } from "../Profile/ProfileLink";

import { IProfile } from "../../interfaces/Profile";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";
import { LazyFullImage } from "../Layout/LazyFullImage";

export const ProfileSection: React.FC<IProfile> = ({
  image,
  motto,
  comment,
  links,
}) => {
  return (
    <Container>
      <TransitionContainer className="image-container" effect="fadeInDown">
        <LazyFullImage className="image" src={image} alt="profile image" />
      </TransitionContainer>
      <div className="description">
        <div className="text">
          <TransitionContainer
            className="topic"
            effect="fadeInUp"
            delay={0.2}
            translateY={50}
          >
            WELCOME
          </TransitionContainer>
          <TransitionContainer className="motto" effect="fadeInUp" delay={0.4}>
            {motto}
          </TransitionContainer>
          <TransitionContainer
            className="comment"
            effect="fadeInUp"
            delay={0.6}
          >
            {comment}
          </TransitionContainer>
        </div>
        <TransitionContainer
          className="links"
          effect="fadeInUp"
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

  > .image-container {
    width: 300px;
    height: 300px;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin: 20px 40px;

    > .image {
      border-radius: 50%;

      box-shadow: 0 0 15px ${Color.Grey};

      overflow: hidden;
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
        margin: 15px 0;

        font-size: 1.2rem;
        font-weight: 700;
        color: ${Color.Black};
      }

      > .comment {
        line-height: 30px;
        font-size: 0.95rem;
        color: ${Color.LightBlack};

        word-break: keep-all;
      }
    }

    > .links {
      margin-top: 20px;
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
