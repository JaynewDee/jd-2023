import React from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";

const Resume: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  return (
    <div className="grid-container">
      <div className="return grid-cell" onClick={goBack}>
        <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
      </div>
      <div className="resume grid-cell">
        <h4 className="cell-title">Resume</h4>
      </div>
    </div>
  );
};

export default Resume;
