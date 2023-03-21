import { DisplayProps } from "../../Portal";
import Title from "./Title";

//

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("Projects")}
      </div>
    </div>
  );
};

export default Projects;
