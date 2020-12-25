import React, { useEffect } from "react";

import { Header } from "./components/Layout/Header";
import { Main } from "./components/Layout/Main";
import { ProfileSection } from "./components/Profile/ProfileSection";
import { ValuesSection } from "./components/Values/ValuesSection";
import { SkillSection } from "./components/Skill/SkillSection";
import { ProjectSection } from "./components/Project/ProjectSection";
import { Footer } from "./components/Layout/Footer";

import { GA } from "./services/ga";

import { headerTabs } from "./data/layout/headerTabs";
import { profile } from "./data/section/profile";
import { values } from "./data/section/values";
import { skills } from "./data/section/skills";
import { projects } from "./data/section/projects";
import { footerLink } from "./data/layout/footerLink";

export const Home: React.FC = () => {
  useEffect(() => GA.trackPageView({ path: "/" }), []);

  return (
    <>
      <Header tabs={headerTabs} />
      <Main>
        <ProfileSection {...profile} />
        <ValuesSection values={values} />
        <SkillSection skills={skills} />
        <ProjectSection projects={projects} />
      </Main>
      <Footer link={footerLink} />
    </>
  );
};
