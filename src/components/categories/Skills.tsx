import React from "react";
import { DisplayProps } from "../../Portal";
import Title from "./Title";
import { TbClipboardCheck as List } from "react-icons/tb";
//

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">
          {List({})}
          {Title("Skills")}
          {List({})}
        </div>
      </div>
    </div>
  );
};

export default Skills;
