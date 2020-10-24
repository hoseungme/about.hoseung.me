import React from "react";
import styled, { keyframes } from "styled-components";

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
      <img src={profileImage} alt="Profile" />
      <div className="text">
        <div className="motto">{`"${motto}"`}</div>
        <div className="comment">{comment}</div>
      </div>
    </Container>
  );
};

const imageFadeIn = keyframes`
  from {
    opacity: 0;

    transform: translateY(-10%);
    
    @media (max-width: ${Device.Mobile}) {
      transform: translate(-50%, -10%);
    }
  }
  to {
    opacity: 1;

    transform: translateY(0);

    @media (max-width: ${Device.Mobile}) {
      transform: translate(-50%, 0);
    }
  }
`;

const mobileImageFadeIn = keyframes`
  from {
    opacity: 0;

    transform: translate(-50%, -10%);
  }
  to {
    opacity: 1;

    transform: translate(-50%, 0);
  }
`;

const textFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const mobileTextFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 400px;

  display: flex;
  flex-direction: row;

  margin-top: 300px;

  background-color: ${Color.Mint};

  > img {
    position: absolute;

    top: -50%;
    left: 5%;

    width: 400px;

    border-radius: 50%;

    box-shadow: 0 -5px 20px ${Color.LightGrey};

    animation: ${imageFadeIn} 1s;
  }

  > .text {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    padding-right: 10%;
    padding-bottom: 5%;

    animation: ${textFadeIn} 1s;

    > .motto,
    > .comment {
      color: ${Color.White};
    }

    > .motto {
      font-size: 3rem;
    }

    > .comment {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${Device.Tablet}) {
    min-height: 300px;

    margin-top: 200px;

    > img {
      width: 300px;
    }
  }

  @media (max-width: ${Device.Mobile}) {
    min-height: 200px;

    margin-top: 150px;

    justify-content: center;

    > img {
      width: 200px;

      left: 50%;

      transform: translateX(-50%);

      animation: ${mobileImageFadeIn} 1s;
    }

    > .text {
      justify-content: flex-end;
      align-items: center;

      padding-right: 0;
      padding-bottom: 5%;

      animation: ${mobileTextFadeIn} 1s;
    }
  }
`;
