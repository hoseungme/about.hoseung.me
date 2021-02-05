import React from "react";

export const HeadingBlock: React.FC<{
  level: number;
}> = ({ level, children }) => {
  switch (level) {
    case 1:
    case 2:
    case 3: {
      return React.createElement(
        `h${level}`,
        { id: (children as any)[0].props.value.replace(/ /g, "-") },
        children
      );
    }
    default: {
      return React.createElement(`h${level}`, {}, children);
    }
  }
};
