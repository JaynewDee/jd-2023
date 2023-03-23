import BootCampBadge from "../../assets/boot_camp_badge.png";
import CloudPractitionerBadge from "../../assets/cloud_practitioner.png";
import SMUCert from "../../assets/smu_cert.png";
import CS50PCert from "../../assets/cs50p_cert.png";
import CS50XCert from "../../assets/cs50x_cert.png";
import { DisplayProps } from "../../Portal";
import Title from "./Title";
import { CiMedal } from "react-icons/ci";
import { useMagnifier } from "../../hooks/useMagnifier";
//

const accolades = [
  BootCampBadge,
  CloudPractitionerBadge,
  SMUCert,
  CS50PCert,
  CS50XCert
];
const Accolades: React.FC<DisplayProps> = ({ backBtn }) => {
  //

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">
          {CiMedal({})}
          {Title("Accolades")}
          {CiMedal({})}
        </div>
      </div>
      <div className="accolades-box">
        {accolades.map((src) =>
          useMagnifier({ src, width: "300px", height: "", zoomLevel: 2 })
        )}
      </div>
    </div>
  );
};

export default Accolades;
