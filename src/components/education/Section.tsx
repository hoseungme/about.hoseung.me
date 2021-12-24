import React from "react";
import styled from "styled-components";

import { educationData } from "../../data/education";

import { Font } from "../common/Font";
import { SectionTitle } from "../common/SectionTitle";

export const EducationSection = React.memo(() => {
  return (
    <>
      <SectionTitle title="EDUCATIONS" />
      <Content>
        {educationData.educations.map((education, index) => (
          <li key={index}>
            <Font.B className="name">{education.name}</Font.B>
            <Font.M className="period">{education.period}</Font.M>
            <ul className="descriptions">
              {education.descriptions.map((description, index) => (
                <Font.R as="li" key={index}>
                  {description}
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
    > .name {
      width: 100%;

      font-size: 1.7rem;
    }

    > .period {
      width: 100%;

      margin-bottom: 1rem;

      font-size: 0.9rem;
    }

    > .descriptions {
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
  }
`;
