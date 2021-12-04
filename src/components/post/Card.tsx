import dayjs from "dayjs";
import styled from "styled-components";

import { Models } from "@hoseung-only/blog-api-client";

import { Color } from "../../constants/Color";

import { EmptyImage } from "./EmptyImage";
import { Skeleton } from "../common/Skeleton";

interface CardProps {
  post: Models.PostListShow["data"][number];
}

export function Card({ post }: CardProps) {
  return (
    <Container href={`https://blog.hoseung.me/posts/${post.id}`}>
      <div className="image-wrapper">
        <div className="padding" />
        {post.coverImageURL ? (
          <img className="image" src={post.coverImageURL} alt="" />
        ) : (
          <EmptyImage className="empty-image" />
        )}
      </div>
      <div className="title">{post.title}</div>
      <div className="created-at">
        {dayjs(post.createdAt).format("YYYY/MM/DD")}
      </div>
    </Container>
  );
}

export function CardPlaceholder() {
  return (
    <Container as="div">
      <div className="image-wrapper">
        <div className="padding" />
        <Skeleton.Rect className="image" />
      </div>
      <div className="title">
        <Skeleton.Text style={{ width: "70%" }} />
      </div>
      <div className="created-at">
        <Skeleton.Text style={{ width: "30%" }} />
      </div>
    </Container>
  );
}

const Container = styled.a`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  text-decoration: none;

  > .image-wrapper {
    > .image,
    > .empty-image {
      transform: scale(1);
      transition: transform 0.2s;
    }
  }

  &:hover > .image-wrapper {
    > .image,
    > .empty-image {
      transform: scale(1.1);
    }
  }

  > .image-wrapper {
    position: relative;

    width: 100%;

    border-radius: 8px;

    overflow: hidden;

    > .padding {
      width: 100%;

      padding-bottom: calc((2 / 3) * 100%);
    }

    > .image {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    > .empty-image {
      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
    }
  }

  > .title {
    width: 100%;

    margin: 4px 0 10px;

    color: ${Color.LightBlack};
    font-size: 1rem;
    font-weight: 400;
    word-break: break-all;
  }

  > .created-at {
    margin-top: auto;

    color: ${Color.Grey};
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
