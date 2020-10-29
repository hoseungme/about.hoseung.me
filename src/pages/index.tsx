import React from "react";

import { Header } from "../components/Layout/Header";
import { Main } from "../components/Layout/Main";
import { Profile } from "../components/Profile";
import { Skill } from "../components/Skill";
import { Project } from "../components/Project";

import { accounts } from "../data/accounts";
import { profile } from "../data/profile";
import { skills } from "../data/skills";
import { projects } from "../data/projects";

export const Home: React.FC = () => {
  return (
    <>
      <Header accounts={accounts} />
      <Main>
        <Profile {...profile} />
        <Skill skills={skills} />
        <Project projects={projects} />
      </Main>
    </>
  );
};
