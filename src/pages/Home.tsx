import React from "react";
import styled from "styled-components";

import { Color } from "../constants/Color";

import { GA } from "../services/ga";

import { ProfileSection } from "../components/profile/Section";
import { SkillSection } from "../components/skill/Section";
import { ExperienceSection } from "../components/experience/Section";
import { ProjectSection } from "../components/project/Section";
import { OpenSourceSection } from "../components/openSource/Section";
import { EducationSection } from "../components/education/Section";
import { Font } from "../components/common/Font";

export const Home = React.memo(() => {
  React.useEffect(
    () => GA.trackPageView({ path: window.location.pathname }),
    []
  );
  return (
    <Container>
      <ProfileSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <OpenSourceSection />
      <EducationSection />
      <Font.M className="footnote">읽어주셔서 감사합니다.</Font.M>
    </Container>
  );
});

const Container = styled.div`
  max-width: 35rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0.8rem;

  box-sizing: border-box;

  > .footnote {
    width: 100%;

    margin: 4rem 0;

    color: ${Color.LightBlack};
    font-size: 1rem;
    text-align: center;
  }
`;
