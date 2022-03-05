import styled from "styled-components";

import { ProfileSection } from "./sections/profile";
import { SkillSection } from "./sections/skill";
import { ExperienceSection } from "./sections/experience";
import { OpensourceSection } from "./sections/opensource";
import { EducationSection } from "./sections/education";

export function Main() {
  return (
    <Container>
      <ProfileSection />
      <SkillSection />
      <ExperienceSection />
      <OpensourceSection />
      <EducationSection />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
