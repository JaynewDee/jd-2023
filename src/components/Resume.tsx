import React from "react";
import { BsArrow90DegLeft } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";

const Resume: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  return (
    <>
      <div className="grid-container">
        <div className="return grid-cell" onClick={goBack}>
          <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
        </div>
        <div className="grid-cell">
          <h4 className="cell-title">Resume</h4>
        </div>
        <div className="grid-cell"></div>
        <div className="resume">
          <iframe
            src="src/assets/JoshuaDiehl_Resume.pdf#toolbar=0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
