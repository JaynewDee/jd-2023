import React from "react";
import { DisplayProps } from "../../Portal";

//

const Skills: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="grid-container-category">
      {backBtn()}

      <div className="projects grid-cell">
        <h4 className="cell-title">Skills</h4>
      </div>
    </div>
  );
};

export default Skills;
