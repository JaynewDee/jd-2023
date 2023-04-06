import { DisplayProps } from "../../Portal";
import { Title } from "../partials/IconTitle";

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
