import React from "react";
import { DisplayProps } from "../../Portal";
import { Title } from "../partials/IconTitle";

//

const Etc: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("Etc.")}
      </div>
    </div>
  );
};

export default Etc;
