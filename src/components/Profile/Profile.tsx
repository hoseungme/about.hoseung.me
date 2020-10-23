import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";
import { Device } from "../../constants/Device";

export const Profile: React.FC<{
  profileImage: string;
  motto: string;
  comment: string;
}> = ({ profileImage, motto, comment }) => {
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

const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 400px;

  @media (max-width: ${Device.Tablet}) {
    min-height: 300px;

    margin-top: 200px;
  }

  @media (max-width: ${Device.Mobile}) {
    min-height: 200px;

    margin-top: 150px;

    justify-content: center;
  }

  display: flex;
  flex-direction: row;

  margin-top: 300px;

  background-color: ${Color.Mint};

  > img {
    position: absolute;

    top: -50%;
    left: 5%;

    width: 400px;

    @media (max-width: ${Device.Tablet}) {
      width: 300px;
    }

    @media (max-width: ${Device.Mobile}) {
      width: 200px;
    }

    border-radius: 50%;

    box-shadow: 0 -5px 20px ${Color.LightGrey};

    @keyframes imagefadeIn {
      from {
        opacity: 0;
        transform: translateY(-10%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    animation: imagefadeIn 1s;
  }

  > .text {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    padding-right: 10%;
    padding-bottom: 5%;

    @keyframes textFadeIn {
      from {
        opacity: 0;
        transform: translateX(5%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    > .motto,
    > .comment {
      color: ${Color.White};

      animation: textFadeIn 1s;
    }

    > .motto {
      font-size: 3rem;
    }

    > .comment {
      font-size: 1.5rem;
    }
  }
`;
