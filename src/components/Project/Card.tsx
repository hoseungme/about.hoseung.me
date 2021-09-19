import styled from "styled-components";

import { Tag } from "./Tag";

import { IProject } from "../../interfaces/section/Project";

import { Color } from "../../constants/Color";
import { Media } from "../../constants/Media";

import { useModal } from "../../contexts/Modal";

interface ProjectCardProps {
  project: IProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const modal = useModal();

  const { img, tags, title, duration } = project;

  return (
    <Container onClick={() => modal.open("ProjectDetail", { project })}>
      <div className="top">
        <img src={img} alt="Project" />
        <div className="tags">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="title">{title}</div>
        <div className="duration">{duration}</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-radius: 6px;

  box-shadow: 0 0 50px ${Color.Grey};

  cursor: pointer;

  transition: transform 0.3s, box-shadow 1s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 80px ${Color.Grey};
  }

  > .top {
    position: relative;

    height: 400px;

    ${Media.Tablet} {
      height: 350px;
    }

    ${Media.Mobile} {
      height: 200px;
    }

    display: flex;

    > img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    > .tags {
      position: absolute;

      top: 0;
      left: 0;

      z-index: 0;

      padding: 10px;

      display: flex;
      flex-direction: column;

      > * {
        margin-bottom: 5px;

        background-color: ${Color.Mint};

        color: ${Color.White};
      }
    }
  }

  > .bottom {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > .title {
      margin: 10px 20px;

      color: ${Color.LightBlack};

      font-size: 1.25rem;

      word-break: keep-all;
    }

    > .duration {
      margin: 10px 20px;

      color: ${Color.LightBlack};

      font-size: 0.75rem;

      word-break: keep-all;
    }
  }
`;
