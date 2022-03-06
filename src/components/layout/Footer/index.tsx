import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <div className="font-regular">Software Enginner, Hoseung Jang</div>
      <div className="font-regular">
        Inspired By{" "}
        <span>
          <a className="font-medium" href="https://hoondev.com">
            hoondev.com
          </a>
        </span>
        ,{" "}
        <span>
          <a className="font-medium" href="https://jbee.io/about">
            jbee.io/about
          </a>
        </span>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  padding: 100px 20px 30px;
  margin-top: auto;
  color: var(--grey3);
  font-size: 0.85rem;

  a {
    color: var(--green1);
    transition: color 0.1s;

    &:hover {
      color: var(--green2);
    }
  }
`;
