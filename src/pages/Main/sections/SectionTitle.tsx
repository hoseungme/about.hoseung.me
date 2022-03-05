import React from "react";
import styled from "styled-components";

import { FadeIn } from "../../../components/common/FadeIn";

export const SectionTitle = styled(
  ({
    className,
    children,
  }: React.PropsWithChildren<{ className?: string }>) => (
    <FadeIn as="h3" className={className}>
      {children}
    </FadeIn>
  )
)`
  margin: 4rem 0 1.5rem;
  font-size: 1.5rem;
`;
