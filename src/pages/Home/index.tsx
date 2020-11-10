import React from "react";

import { Header } from "../../components/Layout/Header";
import { Main } from "../../components/Layout/Main";
import { ProfileSection } from "./sections/ProfileSection";
import { SkillSection } from "./sections/SkillSection";
import { ProjectSection } from "./sections/ProjectSection";

import { accounts } from "../../data/accounts";
import { profile } from "../../data/profile";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";

export const Home: React.FC = () => {
  return (
    <>
      <Header accounts={accounts} />
      <Main>
        <ProfileSection {...profile} />
        <SkillSection skills={skills} />
        <ProjectSection projects={projects} />
      </Main>
    </>
  );
};
