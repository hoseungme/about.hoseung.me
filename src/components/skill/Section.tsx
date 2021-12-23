import React from "react";
import styled from "styled-components";

import { skillData } from "../../data/skill";

import { Font } from "../common/Font";
import { SectionTitle } from "../common/SectionTitle";

export const SkillSection = React.memo(() => {
  return (
    <>
      <SectionTitle title="SKILLS" />
      <Content>
        {skillData.skills.map((skill, index) => (
          <tr key={index}>
            <Font.B as="td">{skill.category}</Font.B>
            <td>
              <ul>
                {skill.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </Content>
    </>
  );
});

const Content = styled.table`
  width: 100%;

  > tr {
    width: 100%;

    > td {
      vertical-align: top;

      padding-bottom: 2rem;

      &:first-child {
        font-size: 1.2rem;
      }

      &:last-child {
        width: 100%;

        padding-left: 1.5rem;

        box-sizing: border-box;

        > ul {
          width: 100%;

          padding-left: 1.5rem;

          box-sizing: border-box;

          list-style: disc;

          > li {
            font-size: 1rem;

            &:not(:last-child) {
              margin-bottom: 0.5rem;
            }
          }
        }
      }
    }
  }
`;
