import React from "react";
import { BsArrow90DegLeft as BackArrow } from "react-icons/bs";
const BackCell = ({ goBack }: any) => {
  return (
    <div className="return grid-cell" onClick={goBack}>
      <h4 className="cell-title">{BackArrow({})}</h4>
    </div>
  );
};

export default BackCell;
