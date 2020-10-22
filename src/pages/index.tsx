import React from "react";

import { Header } from "../components/Layout/Header";
import { Main } from "../components/Layout/Main";
import { Profile } from "../components/Profile/Profile";
// import { ProjectCardList } from "../../components/Project/CardList";

import { accounts } from "../data/accounts";
import { profile } from "../data/profile";
// import { projects } from "../../data/projects";

export const Home: React.FC = () => {
  return (
    <>
      <Header accounts={accounts} />
      <Main>
        <Profile {...profile} />
      </Main>
    </>
  );

  // return <ProjectCardList projects={projects} />;
};
