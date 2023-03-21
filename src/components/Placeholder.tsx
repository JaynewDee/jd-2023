import React, { Dispatch, SetStateAction } from "react";
import BackCell from "./BackCell";

const Placeholder = ({
  setDisplay
}: {
  setDisplay: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="grid-container">
      <BackCell goBack={() => setDisplay("")} />
      <div className="grid-cell">
        <h4 className="cell-title">Placeholder</h4>
      </div>
    </div>
  );
};

export default Placeholder;
