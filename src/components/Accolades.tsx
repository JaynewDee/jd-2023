import { MouseEvent } from "react";
import { CategoryProps } from "../BaseGrid";

const Accolades: React.FC<CategoryProps> = () => {
  return (
    <div className="grid-container">
      <div className="accolades grid-cell">
        <h4 className="cell-title">Accolades</h4>
      </div>
    </div>
  );
};

export default Accolades;
