import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../constants/Color";

import { experienceData } from "../../data/experience";

import { renderWithAnchor } from "../../helpers/common/renderWithAnchor";

import { Font } from "../common/Font";
import { SectionTitle } from "../common/SectionTitle";

export const ExperienceSection = React.memo(() => {
  return (
    <>
      <SectionTitle title="EXPERIENCES" />
      <Content>
        <ul className="experiences">
          {experienceData.experiences.map((experience, index) => (
            <li key={index}>
              <Font.B className="name">{experience.name}</Font.B>
              <Font.M className="position">{experience.position}</Font.M>
              <Font.M className="period">{experience.period}</Font.M>
              <ul className="projects">
                {experience.projects.map((project, index) => (
                  <li key={index}>
                    <Font.B className="name">{project.name}</Font.B>
                    <Font.M className="skills">
                      {project.skills.join(", ")}
                    </Font.M>
                    <Font.R className="summary">{project.summary}</Font.R>
                    <ul className="descriptions">
                      {project.descriptions.map(
                        ([primary, secondary], index) => (
                          <li key={index}>
                            <Font.R className="parent">{primary}</Font.R>
                            <ul className="children">
                              {secondary.map((item, index) => (
                                <Font.R as="li" key={index}>
                                  {renderWithAnchor(item)}
                                </Font.R>
                              ))}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
              <Link
                className="link-to-detail"
                to={`/experience/${experience.id}`}
              >
                <Font.M>{experience.name} 이력 자세히보기</Font.M>
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
});

const Content = styled.div`
  width: 100%;

  > .experiences {
    > li {
      width: 100%;

      ul {
        width: 100%;

        padding-left: 1.5rem;

        box-sizing: border-box;

        list-style: disc;

        > li {
          font-size: 0.8rem;

          &:not(:last-child) {
            margin-bottom: 0.2rem;
          }
        }
      }

      > .name {
        width: 100%;

        font-size: 1.7rem;
      }

      > .position {
        width: 100%;

        margin-bottom: 0.5rem;

        font-size: 1rem;
      }

      > .period {
        width: 100%;

        margin-bottom: 1.6rem;

        font-size: 0.9rem;
      }

      > .projects {
        padding: 0;
        list-style: none;

        > li {
          &:not(:last-child) {
            margin-bottom: 1.2rem;
          }

          > .name {
            width: 100%;

            font-size: 1.3rem;
          }

          > .skills {
            font-size: 0.8rem;
          }

          > .summary {
            margin-top: 1rem;

            font-size: 0.9rem;
          }

          > .descriptions {
            margin-top: 0.6rem;

            > li {
              > .parent,
              > .children {
                margin-bottom: 0.5rem;

                > li > span > a {
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
        }
      }

      > .link-to-detail {
        display: flex;

        margin: 1.5rem 0 2rem;

        font-size: 1rem;
        color: ${Color.Mint};
        text-decoration: none;

        transition: color 0.1s;

        &:hover {
          color: ${Color.DarkMint};
        }
      }
    }
  }
`;
