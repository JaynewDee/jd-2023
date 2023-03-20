import React from "react";
import { CategoryProps } from "../BaseGrid";

const Resume: React.FC<CategoryProps> = () => {
  return (
    <div className="grid-container">
      <div className="resume grid-cell">
        <h4 className="cell-title">Resume</h4>
      </div>
    </div>
  );
};

export default Resume;
