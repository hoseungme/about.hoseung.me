import React from "react";

import { Header } from "../components/Layout/Header";
import { Main } from "../components/Layout/Main";
import { Profile } from "../components/Profile";
import { Project } from "../components/Project";

import { accounts } from "../data/accounts";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export const Home: React.FC = () => {
  return (
    <>
      <Header accounts={accounts} />
      <Main>
        <Profile {...profile} />
        <Project projects={projects} />
      </Main>
    </>
  );
};
