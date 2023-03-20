import React from "react";
import { CategoryProps } from "../BaseGrid";

const Social: React.FC<CategoryProps> = () => {
  return (
    <div className="grid-container">
      <div className="return grid-cell">
        <h4 className="cell-title">{"<"}</h4>
      </div>
      <div className="social grid-cell">
        <h4 className="cell-title">Social</h4>
      </div>
    </div>
  );
};

export default Social;
