import React from "react";
import { DisplayProps } from "../../Portal";

//

const Etc: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="grid-container-category">
      {backBtn()}
      <div className="accolades grid-cell">
        <h4 className="cell-title">Etc.</h4>
      </div>
    </div>
  );
};

export default Etc;
