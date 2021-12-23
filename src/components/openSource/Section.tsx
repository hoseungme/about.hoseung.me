import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";

import { openSourceData } from "../../data/openSource";

import { Font } from "../common/Font";
import { SectionTitle } from "../common/SectionTitle";

export const OpenSourceSection = React.memo(() => {
  return (
    <>
      <SectionTitle title="OPEN SOURCES" />
      <Content>
        {openSourceData.openSources.map((openSource, index) => (
          <li key={index}>
            <Font.B className="name">{openSource.name}</Font.B>
            <table className="links">
              {openSource.links.map((link, index) => (
                <tr key={index}>
                  <Font.B as="td">{link.label}:</Font.B>
                  <Font.R as="td">
                    <a href={link.link}>{link.link}</a>
                  </Font.R>
                </tr>
              ))}
            </table>
            <Font.R className="summary">{openSource.summary}</Font.R>
            <ul className="articles">
              {openSource.articles.map((article, index) => (
                <Font.R as="li" key={index}>
                  <a href={article}>{article}</a>
                </Font.R>
              ))}
            </ul>
          </li>
        ))}
      </Content>
    </>
  );
});

const Content = styled.ul`
  width: 100%;

  > li {
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    > .name {
      width: 100%;

      font-size: 1.6rem;
    }

    > .links {
      width: 100%;

      > tr {
        width: 100%;

        font-size: 0.9rem;

        > td:last-child {
          width: 100%;

          padding-left: 0.6rem;

          > a {
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

    > .summary {
      margin: 0.5rem 0 1rem;

      font-size: 0.9rem;
    }

    > .articles {
      width: 100%;

      padding-left: 1.5rem;

      box-sizing: border-box;

      list-style: disc;

      > li {
        font-size: 0.8rem;

        &:not(:last-child) {
          margin-bottom: 0.2rem;
        }

        > a {
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
