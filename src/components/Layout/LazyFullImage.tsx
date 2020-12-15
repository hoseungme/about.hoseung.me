import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { Color } from "../../constants/Color";

export const LazyFullImage: React.FC<{
  className?: string;
  src: string;
  alt?: string;
  imageFit?: "contain" | "cover";
}> = ({ className, src, alt, imageFit = "contain" }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setIsImageLoaded(true);
  }, [src]);

  return (
    <div
      className={className}
      style={{ width: "100%", height: "100%" }}
      ref={ref}
    >
      {inView &&
        (isImageLoaded ? (
          <FullImage src={src} alt={alt} style={{ objectFit: imageFit }} />
        ) : (
          <FullImagePlaceholder />
        ))}
    </div>
  );
};

const FullImage = styled.img`
  width: 100%;
  height: 100%;
`;

const FullImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;

  @keyframes load {
    0% {
      background-color: ${Color.Grey};
    }
    50% {
      background-color: ${Color.LightGrey};
    }
    100% {
      background-color: ${Color.Grey};
    }
  }

  animation: load 1s infinite;
`;
