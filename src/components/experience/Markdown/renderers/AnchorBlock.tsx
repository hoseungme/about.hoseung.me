import { Link } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../../../constants/Color";

export function AnchorBlock(props: any) {
  return props.href.startsWith("#") || props.href.startsWith("http") ? (
    <S.Container href={props.href}>{props.children}</S.Container>
  ) : (
    <S.Container as={Link} to={props.href}>
      {props.children}
    </S.Container>
  );
}

const S = {
  Container: styled.a`
    font-weight: bold;
    color: ${Color.Mint};
    text-decoration: none;

    &:hover {
      color: ${Color.DarkMint};
    }
  `,
};
