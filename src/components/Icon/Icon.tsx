import React from "react";
import * as icons from "react-icons/io";

export const Icon: React.FC<{
  className?: string;
  icon: keyof typeof icons;
}> = ({ className, icon }) => {
  const Icon = icons[icon];

  return <Icon className={className} />;
};
