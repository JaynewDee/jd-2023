import { BsArrow90DegLeft } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";

const Projects: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  return (
    <div className="grid-container">
      <div className="return grid-cell" onClick={goBack}>
        <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
      </div>
      <div className="projects grid-cell">
        <h4 className="cell-title">Projects</h4>
      </div>
    </div>
  );
};

export default Projects;
