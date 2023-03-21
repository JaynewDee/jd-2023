import { BsArrow90DegLeft } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";
import BootCampBadge from "../assets/boot_camp_badge.png";
import CloudPractitionerBadge from "../assets/cloud_practitioner.png";
const Accolades: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  return (
    <div className="grid-container">
      <div className="return grid-cell" onClick={goBack}>
        <h4 className="cell-title">{BsArrow90DegLeft({})}</h4>
      </div>
      <div className="accolades grid-cell">
        <h4 className="cell-title">Accolades</h4>
      </div>
      <div className="accolades grid-cell">
        <img className="badge-img" src={BootCampBadge}></img>
      </div>
      <div className="accolades grid-cell">
        <img className="badge-img" src={CloudPractitionerBadge}></img>
      </div>
    </div>
  );
};

export default Accolades;
