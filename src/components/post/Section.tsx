import { useLayoutEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { Client, Models } from "@hoseung-only/blog-api-client";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

import { useValueByMedia } from "../../hooks/useValueByMedia";

import { TransitionContainer } from "../common/TransitionContainer";
import { List, ListPlaceholder } from "./List";

export function PostSection() {
  const client = useMemo(() => {
    return new Client({
      baseURL:
        "https://y7wgfma059.execute-api.ap-northeast-2.amazonaws.com/prod",
    });
  }, []);

  const [posts, setPosts] = useState<Models.PostListShow["data"] | null>(null);

  const { columnSize, postsCount } = useValueByMedia({
    desktop: {
      columnSize: 3,
      postsCount: 9,
    },
    tablet: {
      columnSize: 2,
      postsCount: 6,
    },
    mobile: {
      columnSize: 1,
      postsCount: 4,
    },
  });

  useLayoutEffect(() => {
    (async () => {
      setPosts((await client.getPostsByCursor({ count: postsCount })).data);
    })();
  }, [postsCount, client]);

  return (
    <Container>
      <TransitionContainer
        className="topic"
        effect="fadeInDown"
        translateY={50}
      >
        MY POSTS
      </TransitionContainer>
      <TransitionContainer
        className="title"
        effect="fadeInDown"
        delay={0.2}
        translateY={50}
        duration={0.2}
      >
        최근 작성한 글
      </TransitionContainer>
      {posts ? (
        <List columnSize={columnSize} posts={posts} />
      ) : (
        <ListPlaceholder columnSize={columnSize} count={postsCount} />
      )}
    </Container>
  );
}

const Container = styled.section`
  width: 100%;

  padding: 5% 12%;

  box-sizing: border-box;

  > .topic {
    width: fit-content;

    margin-bottom: 20px;

    font-size: 0.85rem;
    font-weight: 700;

    color: ${Color.DarkMint};
  }

  > .title {
    width: 100%;

    margin-bottom: 40px;

    font-size: 1.4rem;
    font-weight: 600;
  }

  ${Media.Tablet} {
    padding: 5% 4%;
  }

  ${Media.Mobile} {
    padding: 5% 4%;
  }
`;
