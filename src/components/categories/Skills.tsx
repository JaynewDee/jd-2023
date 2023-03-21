import React from "react";
import { DisplayProps } from "../../Portal";
import Title from "./Title";

//

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("Skills")}
      </div>
    </div>
  );
};

export default Skills;
