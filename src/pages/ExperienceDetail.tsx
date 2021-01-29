import React, { useEffect } from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ReactMarkdown from "react-markdown";

import { CodeBlock } from "../components/MarkdownRenderers/CodeBlock";

import { GA } from "../services/ga";

import { experienceDetailMap } from "../data/section/experiences";

import { Color } from "../constants/Color";
import { Device } from "../constants/Device";

export const ExperienceDetail: React.FC = () => {
  const { title } = useParams<{ title: string }>();

  const [bottomRef, bottomInView] = useInView({ triggerOnce: true });

  useEffect(() => {
    window.scrollTo({ top: 0 });
    GA.trackPageView({ path: window.location.pathname });
  }, []);

  useEffect(() => {
    if (bottomInView) {
      GA.trackExperienceDetailEventParams({ action: "All Content Viewed" });
    }
  }, [bottomInView]);

  return (
    <Container>
      <Link className="back-button" to="/">
        <BiArrowBack />
        메인으로 돌아가기
      </Link>
      <div className="content">
        <ReactMarkdown renderers={{ code: CodeBlock }}>
          {experienceDetailMap.get(title)!}
        </ReactMarkdown>
      </div>
      <div ref={bottomRef} />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 25% 20px;

  > .back-button {
    display: flex;

    margin-top: 20px;

    font-size: 1.3rem;
    font-weight: 500;
    color: ${Color.Blue};
    text-decoration: none;

    transition: color 0.1s;

    &:hover {
      color: ${Color.BlueHover};
    }
  }

  > .content {
    box-sizing: border-box;

    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 0;
    }

    p {
      margin: 20px 0;
    }

    a {
      font-weight: 500;
      color: ${Color.DarkMint};
      text-decoration: none;

      transition: color 0.1s;

      &:hover {
        color: ${Color.Mint};
      }
    }

    ul {
      margin: 0;
      padding: 0 0 0 40px;
    }

    img {
      max-width: 100%;
      max-height: 450px;
      object-fit: contain;
    }

    hr {
      width: 100%;
      height: 3px;

      margin-top: 30px;

      border: 0;

      background-color: ${Color.LightGrey};
    }
  }

  @media (max-width: ${Device.Tablet}px) {
    padding: 0 20% 20px;

    > .content {
      ul {
        padding: 0 0 0 30px;
      }

      p {
        margin: 15px 0;
      }
    }
  }

  @media (max-width: ${Device.Mobile}px) {
    padding: 0 2% 20px;

    > .content {
      ul {
        padding: 0 0 0 20px;
      }

      p {
        margin: 10px 0;
      }
    }
  }
`;
