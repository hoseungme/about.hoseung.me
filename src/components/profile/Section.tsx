import styled from "styled-components";

import { TransitionContainer } from "../common/TransitionContainer";

import { Profile } from "../../data/profile";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

interface ProfileSectionProps {
  profile: Profile;
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  const { imageURL, description } = profile;
  return (
    <Container>
      <TransitionContainer className="profile-image" effect="fadeInDown">
        <img src={imageURL} alt="Profile" />
      </TransitionContainer>
      <div className="profile-text">
        <TransitionContainer
          className="topic"
          effect="fadeInUp"
          delay={0.2}
          duration={0.2}
          translateY={50}
        >
          WELCOME
        </TransitionContainer>
        <TransitionContainer
          className="description-primary"
          effect="fadeInUp"
          delay={0.4}
        >
          {description.primary}
        </TransitionContainer>
        <TransitionContainer
          className="description-secondary"
          effect="fadeInUp"
          delay={0.6}
          duration={0.2}
        >
          {description.secondary}
        </TransitionContainer>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: row;

  margin: 0 auto;
  padding: 150px 20px;

  box-sizing: border-box;

  > .profile-image {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 20px 40px;

    box-sizing: border-box;

    > img {
      width: 300px;
      height: 300px;

      border-radius: 50%;

      box-shadow: 0 0 15px ${Color.LightGrey};
    }
  }

  > .profile-text {
    max-width: 500px;

    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > .topic {
      font-size: 0.85rem;
      font-weight: 700;
      color: ${Color.DarkMint};
    }

    > .description-primary {
      margin: 15px 0 5px;

      font-size: 1.2rem;
      font-weight: 700;
      color: ${Color.Black};
    }

    > .description-secondary {
      line-height: 30px;
      font-size: 0.95rem;
      color: ${Color.LightBlack};

      word-break: keep-all;
    }
  }

  ${Media.Tablet} {
    padding: 100px 20px;

    box-sizing: border-box;

    > .profile-image {
      padding: 10px 20px;

      > img {
        width: 250px;
        height: 250px;
      }
    }

    > .profile-text {
      max-width: 400px;
    }
  }

  ${Media.Mobile} {
    flex-direction: column;
    align-items: center;

    padding: 50px 40px;

    > .profile-image {
      padding: 20px 0 40px;
    }

    > .profile-text {
      flex: 0;
      display: flex;
      align-items: center;

      text-align: center;

      > * {
        width: fit-content;
      }
    }
  }
`;
