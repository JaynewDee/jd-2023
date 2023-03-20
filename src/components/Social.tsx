import React from "react";
import { CategoryProps } from "../BaseGrid";
import { BsArrow90DegLeft } from "react-icons/bs";
const Social: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  return (
    <div className="grid-container">
      <div className="return grid-cell" onClick={goBack}>
        <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
      </div>
      <div className="social grid-cell">
        <h4 className="cell-title">Social</h4>
      </div>
    </div>
  );
};

export default Social;
