import React from "react";
import { Header } from "../../components/Header/Header";

import { Profile } from "../../components/Profile/Profile";
// import { ProjectCardList } from "../../components/Project/CardList";

// import { projects } from "../../data/projects";

import profile from "../../images/profile.png";

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Profile
        profileImage={profile}
        motto="기록은 나를 빛낸다"
        comment="서브 프로젝트를 사랑하는 웹 개발자 입니다."
      />
      <Profile
        profileImage={profile}
        motto="기록은 나를 빛낸다"
        comment="서브 프로젝트를 사랑하는 웹 개발자 입니다."
      />
      <Profile
        profileImage={profile}
        motto="기록은 나를 빛낸다"
        comment="서브 프로젝트를 사랑하는 웹 개발자 입니다."
      />
      <Profile
        profileImage={profile}
        motto="기록은 나를 빛낸다"
        comment="서브 프로젝트를 사랑하는 웹 개발자 입니다."
      />
    </>
  );

  // return <ProjectCardList projects={projects} />;
};
