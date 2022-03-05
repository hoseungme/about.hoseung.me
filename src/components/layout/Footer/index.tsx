import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <div className="label font-regular">Software Enginner, Hoseung Jang</div>
    </Container>
  );
}

const Container = styled.footer`
  padding: 20px 20px 30px;
  margin-top: auto;
  color: var(--grey1);
  font-size: 0.85rem;
`;
