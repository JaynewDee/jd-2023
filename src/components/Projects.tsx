import { CategoryProps } from "../BaseGrid";

const Projects: React.FC<CategoryProps> = () => {
  return (
    <div className="grid-container">
      <div className="projects grid-cell">
        <h4 className="cell-title">Projects</h4>
      </div>
    </div>
  );
};

export default Projects;
