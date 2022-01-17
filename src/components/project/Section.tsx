import React from "react";
import styled from "styled-components";

import { Color } from "../../constants/Color";

import { projectData } from "../../data/project";

import { renderWithAnchor } from "../../helpers/common/renderWithAnchor";

import { Font } from "../common/Font";
import { SectionTitle } from "../common/SectionTitle";

export const ProjectSection = React.memo(() => {
  return (
    <>
      <SectionTitle title="SIDE PROJECTS" />
      <Content>
        <ul className="projects">
          {projectData.projects.map((project, index) => (
            <li key={index}>
              <Font.B className="name">{project.name}</Font.B>
              <Font.M className="skills">{project.skills.join(", ")}</Font.M>
              <Font.M className="description">{project.description}</Font.M>
              <ul className="links">
                {project.links.map((link, index) => (
                  <Font.R as="li" key={index}>
                    {renderWithAnchor(link)}
                  </Font.R>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
});

const Content = styled.div`
  width: 100%;

  > .projects {
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

      &:not(:last-child) {
        margin-bottom: 2rem;
      }

      > .name {
        width: 100%;

        color: ${Color.Black};
        text-decoration: none;
        font-size: 1.7rem;
      }

      > .skills {
        font-size: 0.9rem;
      }

      > .description {
        margin-top: 1rem;

        font-size: 0.9rem;
      }

      > .links {
        margin-top: 1.6rem;

        > li {
          &:not(:last-child) {
            margin-bottom: 0.5rem;
          }

          > span > a {
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
`;
