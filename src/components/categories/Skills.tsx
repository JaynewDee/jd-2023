import React from "react";
import { DisplayProps } from "../../Portal";
import Title from "../partials/Title";
import { TbClipboardCheck as List } from "react-icons/tb";
import IconTitle from "../partials/IconTitle";
import { IconType } from "react-icons";
//

const Skill = (name: string, Icon: IconType) => {};

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("SKILLS", List)}
      </div>
    </div>
  );
};

export default Skills;
