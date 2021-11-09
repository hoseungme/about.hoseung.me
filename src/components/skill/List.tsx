import styled from "styled-components";

import { Skill } from "../../data/skill";

import { Media } from "../../constants/Media";

export function List({ skills }: { skills: Skill[] }) {
  return (
    <S.List>
      {skills.map((skill, index) => (
        <li key={index}>
          <div className="title">{skill.title}</div>
          <ul className="images">
            {skill.imageURLs.map((imageURL, index) => (
              <img key={index} src={imageURL} alt="" />
            ))}
          </ul>
          <ul className="details">
            {skill.details.map((detail) => (
              <li>{detail}</li>
            ))}
          </ul>
        </li>
      ))}
    </S.List>
  );
}

const S = {
  List: styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    > li {
      width: 60%;

      display: flex;
      flex-direction: column;

      &:not(:last-child) {
        margin-bottom: 60px;
      }

      > .title {
        width: 100%;

        margin-bottom: 20px;

        font-size: 1.4rem;
        font-weight: 600;
      }

      > .images {
        width: 100%;

        display: flex;

        margin-bottom: 30px;

        > img {
          width: 60px;

          object-fit: contain;

          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }

      > .details {
        width: 100%;

        display: flex;
        flex-direction: column;

        padding-left: 30px;

        box-sizing: border-box;

        list-style: disc;

        > li {
          font-size: 1rem;
          word-break: break-all;

          &:not(:last-child) {
            margin-bottom: 15px;
          }
        }
      }
    }

    ${Media.Tablet} {
      > li {
        width: 80%;

        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }
    }

    ${Media.Mobile} {
      padding: 0 16px;

      box-sizing: border-box;

      > li {
        width: 100%;

        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }
  `,
};
