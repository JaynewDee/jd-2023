import { BsArrow90DegLeft } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";
import BackCell from "./BackCell";

const Projects: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  return (
    <div className="grid-container">
      <BackCell goBack={goBack} />

      <div className="projects grid-cell">
        <h4 className="cell-title">Projects</h4>
      </div>
    </div>
  );
};

export default Projects;
