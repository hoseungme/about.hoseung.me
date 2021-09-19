import React, { useEffect } from "react";

import { Header } from "../components/common/Header";
import { Main } from "../components/common/Main";
import { ProfileSection } from "../components/profile/ProfileSection";
import { ValuesSection } from "../components/values/ValuesSection";
import { ExperienceSection } from "../components/experience/ExperienceSection";
import { SkillSection } from "../components/skill/SkillSection";
import { ProjectSection } from "../components/project/ProjectSection";
import { Footer } from "../components/common/Footer";

import { GA } from "../services/ga";

import { headerTabs } from "../data/layout/headerTabs";
import { profile } from "../data/section/profile";
import { values } from "../data/section/values";
import { experiences } from "../data/section/experiences";
import { skills } from "../data/section/skills";
import { projects } from "../data/section/projects";
import { footerLink } from "../data/layout/footerLink";

export const Home: React.FC = () => {
  useEffect(() => GA.trackPageView({ path: window.location.pathname }), []);

  return (
    <>
      <Header tabs={headerTabs} />
      <Main>
        <ProfileSection {...profile} />
        <ValuesSection values={values} />
        <ExperienceSection experiences={experiences} />
        <SkillSection skills={skills} />
        <ProjectSection projects={projects} />
      </Main>
      <Footer link={footerLink} />
    </>
  );
};
