import { DisplayProps } from "../../Portal";
import Title from "./Title";
import { BsWrenchAdjustable as Wrench } from "react-icons/bs";

//

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">
          {Wrench({ size: "1rem", style: { marginRight: "" } })}
          {Title("Projects")}
          {Wrench({
            size: "1rem",
            style: { transform: "scaleX(-1)", marginLeft: "" }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
