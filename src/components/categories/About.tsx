import React from "react";
import { DisplayProps } from "../../Portal";
import Title from "./Title";

//

const About: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("About Me")}
      </div>
    </div>
  );
};

export default About;
