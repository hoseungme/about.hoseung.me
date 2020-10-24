import React from "react";
import styled from "styled-components";

import { TransitionContainer } from "../Layout/TransitionContainer";

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
      <TransitionContainer
        className="image"
        type="fadeInToDown"
        intersecting={0.8}
      >
        <img src={profileImage} alt="Profile" />
      </TransitionContainer>
      <TransitionContainer
        className="text"
        type="fadeInToUp"
        intersecting={0.5}
      >
        <div className="motto">{`"${motto}"`}</div>
        <div className="comment">{comment}</div>
      </TransitionContainer>
    </Container>
  );
};

const Container = styled.section`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-end;

  margin-top: 300px;
  padding-top: 150px;

  box-sizing: border-box;

  background-color: ${Color.Mint};

  > .image {
    position: absolute;

    top: -200px;

    display: flex;

    padding-left: 10%;

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
    text-align: right;

    padding: 0 10% 3%;

    > .motto {
      margin-bottom: 10px;

      font-size: 2.3rem;
      color: ${Color.White};
    }

    > .comment {
      width: 60%;

      font-size: 1.5rem;
      color: ${Color.White};

      word-break: keep-all;
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    min-height: 300px;

    margin-top: 200px;
    padding-top: calc(150px + 5%);

    justify-content: center;

    > .image {
      top: -150px;

      padding: 0;

      > img {
        width: 300px;
        height: 300px;
      }
    }

    > .text {
      align-items: center;
      text-align: center;

      word-break: keep-all;

      padding: 0 3% 5%;
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    min-height: 200px;

    margin-top: 150px;
    padding-top: calc(100px + 5%);

    > .image {
      top: -100px;

      > img {
        width: 200px;
        height: 200px;
      }
    }
  }
`;
