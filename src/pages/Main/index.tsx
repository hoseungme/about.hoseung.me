import React from "react";

import { Header } from "../../components/Header/Header";
import { Profile } from "../../components/Profile/Profile";
// import { ProjectCardList } from "../../components/Project/CardList";

import { accounts } from "../../data/accounts";
import { profile } from "../../data/profile";
// import { projects } from "../../data/projects";

export const Main: React.FC = () => {
  return (
    <>
      <Header accounts={accounts} />
      <Profile {...profile} />
    </>
  );

  // return <ProjectCardList projects={projects} />;
};
