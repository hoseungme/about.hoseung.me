import React from "react";
import styled from "styled-components";

export function ImageBlock(props: any) {
  return <S.Container src={props.src} alt="" />;
}

const S = {
  Container: styled.img`
    max-width: 100%;

    display: block;

    margin: 0 auto;

    object-fit: contain;
  `,
};
