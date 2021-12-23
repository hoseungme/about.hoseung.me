import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";

import { profileData } from "../../data/profile";

import { Font } from "../common/Font";
import { SectionTitle } from "../common/SectionTitle";

export const ProfileSection = React.memo(() => {
  return (
    <>
      <SectionTitle title="장호승" />
      <Content>
        <Font.M className="title">{profileData.title}</Font.M>
        <ul className="descriptions">
          {profileData.descriptions.map((description, index) => (
            <Font.R as="li" key={index}>
              {description}
            </Font.R>
          ))}
        </ul>
        <table className="contacts">
          {profileData.contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <Font.B className="label">{contact.label}</Font.B>
              </td>
              <td>
                {(() => {
                  switch (contact.type) {
                    case "link": {
                      return (
                        <Font.M as="a" className="value" href={contact.value}>
                          {contact.value}
                        </Font.M>
                      );
                    }
                    case "string": {
                      return <Font.R className="value">{contact.value}</Font.R>;
                    }
                  }
                })()}
              </td>
            </tr>
          ))}
        </table>
      </Content>
    </>
  );
});

const Content = styled.div`
  width: 100%;

  > .title {
    width: 100%;

    font-size: 1rem;
  }

  > .descriptions {
    width: 100%;

    margin: 1rem 0;
    padding-left: 1.5rem;

    list-style: disc;

    > li {
      width: 100%;

      color: ${Color.Black};
      font-size: 0.9rem;

      &:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
  }

  > .contacts {
    width: 100%;

    > tr {
      width: 100%;

      font-size: 0.9rem;

      > td:last-child {
        width: 100%;

        padding-left: 0.6rem;

        > a.value {
          color: ${Color.Mint};
          text-decoration: none;

          transition: color 0.1s;

          &:hover {
            color: ${Color.DarkMint};
          }
        }
      }
    }
  }
`;
