import React from "react";
import Title from "../categories/Title";
import { IconType } from "react-icons";

const IconTitle = (title: string, Icon: IconType, mirror: boolean = false) => {
  return (
    <div className="title-with-icons">
      {Icon({})}
      {Title(title)}
      {Icon({ style: mirror ? { transform: "scaleX(-1)" } : {} })}
    </div>
  );
};

export default IconTitle;
