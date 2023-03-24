import { DisplayProps } from "../../Portal";
import Title from "./Title";
import { BsWrenchAdjustable as Wrench } from "react-icons/bs";

//

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">{Title("PROJECTS")}</div>
      </div>
    </div>
  );
};

export default Projects;
