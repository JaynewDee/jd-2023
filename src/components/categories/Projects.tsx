import { DisplayProps } from "../../Portal";

//

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="grid-container-category">
      {backBtn()}

      <div className="projects grid-cell">
        <h4 className="cell-title">Projects</h4>
      </div>
    </div>
  );
};

export default Projects;
