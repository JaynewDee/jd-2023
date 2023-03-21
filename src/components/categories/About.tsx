import React from "react";
import { DisplayProps } from "../../Portal";

//

const About: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="grid-container-category">
      {backBtn()}
      <div className="accolades grid-cell">
        <h4 className="cell-title">About Me</h4>
      </div>
    </div>
  );
};

export default About;
