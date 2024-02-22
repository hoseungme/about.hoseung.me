import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { adaptive } from "constants/colors";
import { useLocale } from "hooks/useLocale";
import { MobileMediaQuery } from "constants/css";

export function Header() {
  const [ref, inView] = useInView({ initialInView: true });

  const locale = useLocale();

  return (
    <>
      <div ref={ref} />
      <Container className={!inView ? "scrolled" : ""}>
        <Link
          className="link-to-home font-medium"
          to={locale === "en" ? "/en" : "/"}
        >
          hoseung.me
        </Link>
        <a
          className="link-to-blog font-medium"
          href={
            locale === "en"
              ? "https://blog.hoseung.me/en"
              : "https://blog.hoseung.me"
          }
        >
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
  background-color: ${adaptive.white0};
  backdrop-filter: blur(8px);
  transition: background-color 0.2s, box-shadow 0.2s;

  ${MobileMediaQuery} {
    max-width: 100%;
    top: 0;
    left: 0;
    right: 0;
    padding: 12px 16px;
    border-radius: 0;
  }

  &.scrolled {
    background-color: ${adaptive.white0_t70};
    box-shadow: 0 0 10px ${adaptive.grey1};
  }

  > a {
    font-size: 1.5rem;
    transition: color 0.1s;
  }

  > .link-to-home {
    color: ${adaptive.green1};

    &:hover {
      color: ${adaptive.green2};
    }
  }

  > .link-to-home {
    color: ${adaptive.green1};

    &:hover {
      color: ${adaptive.green2};
    }
  }

  > .link-to-blog {
    margin-left: auto;

    &:hover {
      color: ${adaptive.black1};
    }
  }

  > .link-to-github {
    margin-left: 12px;

    &:hover {
      color: ${adaptive.black1};
    }
  }
`;
