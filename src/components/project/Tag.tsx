import styled from "styled-components";

import { Color } from "../../constants/Color";

interface TagProps {
  tag: string;
}

export function Tag({ tag }: TagProps) {
  return <Container>{tag.toUpperCase()}</Container>;
}

const Container = styled.div`
  width: fit-content;

  padding: 5px;

  font-size: 1.5rem;

  color: ${Color.LightBlack};

  background-color: ${Color.White};

  border-radius: 5px;
`;
