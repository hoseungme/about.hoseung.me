import React from "react";
import styled from "styled-components";

import { FadeInWrapper } from "../Layout/FadeInWrapper";

import { IProfile } from "../../interfaces/Profile";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const Profile: React.FC<IProfile> = ({
  profileImage,
  motto,
  comment,
}) => {
  return (
    <Container>
      <FadeInWrapper
        className="image"
        animation="fadeInToDown"
        intersecting={0.8}
      >
        <img src={profileImage} alt="Profile" />
      </FadeInWrapper>
      <FadeInWrapper className="text" animation="fadeInToUp" intersecting={0.5}>
        <div className="motto">{`"${motto}"`}</div>
        <div className="comment">{comment}</div>
      </FadeInWrapper>
    </Container>
  );
};

const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 400px;

  display: flex;
  flex-direction: row;

  margin-top: 300px;

  background-color: ${Color.Mint};

  > .image {
    position: absolute;

    top: -50%;

    display: flex;

    padding-left: 5%;

    > img {
      width: 400px;
      height: 400px;

      border-radius: 50%;

      box-shadow: 0 -5px 20px ${Color.LightGrey};
    }
  }

  > .text {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    padding-right: 10%;
    padding-bottom: 5%;

    > .motto {
      font-size: 3rem;
      color: ${Color.White};
    }

    > .comment {
      font-size: 1.5rem;
      color: ${Color.White};
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    min-height: 300px;

    margin-top: 200px;

    > .image {
      > img {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    min-height: 200px;

    margin-top: 150px;

    justify-content: center;

    > .image {
      padding: 0;

      > img {
        width: 200px;
        height: 200px;
      }
    }

    > .text {
      justify-content: flex-end;
      align-items: center;

      padding-right: 0;
      padding-bottom: 5%;
    }
  }
`;
