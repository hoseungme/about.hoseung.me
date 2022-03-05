import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Header() {
  const [ref, inView] = useInView({ initialInView: true });
  return (
    <>
      <div ref={ref} />
      <Container className={!inView ? "scrolled" : ""}>
        <Link className="link-to-home font-medium" to="/">
          hoseung.me
        </Link>
        <a className="link-to-blog font-medium" href="https://blog.hoseung.me">
          blog
        </a>
        <a
          className="link-to-github font-medium"
          href="https://github.com/HoseungJang"
        >
          github
        </a>
      </Container>
    </>
  );
}

const Container = styled.header`
  position: fixed;
  top: 10px;
  z-index: 99999999;
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 12px 20px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(8px);
  transition: background-color 0.2s, box-shadow 0.2s;

  @media screen and (max-width: 950px) {
    max-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 10px var(--grey1);
  }

  > a {
    font-size: 1.5rem;
    transition: color 0.1s;
  }

  > .link-to-home {
    color: var(--green1);

    &:hover {
      color: var(--green2);
    }
  }

  > .link-to-home {
    color: var(--green1);

    &:hover {
      color: var(--green2);
    }
  }

  > .link-to-blog {
    margin-left: auto;
    color: var(--grey2);

    &:hover {
      color: var(--grey3);
    }
  }

  > .link-to-github {
    margin-left: 12px;
    color: var(--grey2);

    &:hover {
      color: var(--grey3);
    }
  }
`;
