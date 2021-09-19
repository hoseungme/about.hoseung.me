import { useEffect } from "react";

import { Header } from "../components/common/Header";
import { Main } from "../components/common/Main";
import { ProfileSection } from "../components/profile/Section";
import { ValuesSection } from "../components/values/Section";
import { ExperienceSection } from "../components/experience/Section";
import { SkillSection } from "../components/skill/Section";
import { ProjectSection } from "../components/project/Section";
import { Footer } from "../components/common/Footer";

import { GA } from "../services/ga";

import { headerTabs } from "../data/layout/headerTabs";
import { profile } from "../data/section/profile";
import { values } from "../data/section/values";
import { experiences } from "../data/section/experiences";
import { skills } from "../data/section/skills";
import { projects } from "../data/section/projects";
import { footerLink } from "../data/layout/footerLink";

export function Home() {
  useEffect(() => GA.trackPageView({ path: window.location.pathname }), []);

  return (
    <>
      <Header tabs={headerTabs} />
      <Main>
        <ProfileSection profile={profile} />
        <ValuesSection values={values} />
        <ExperienceSection experiences={experiences} />
        <SkillSection skills={skills} />
        <ProjectSection projects={projects} />
      </Main>
      <Footer link={footerLink} />
    </>
  );
}
