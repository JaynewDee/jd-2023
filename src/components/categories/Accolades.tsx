import BootCampBadge from "../../assets/boot_camp_badge.png";
import CloudPractitionerBadge from "../../assets/cloud_practitioner.png";
import SMUCert from "../../assets/smu_cert.png";
import CS50PCert from "../../assets/cs50p_cert.png";
import CS50XCert from "../../assets/cs50x_cert.png";
import { DisplayProps } from "../../Portal";
import { CiMedal } from "react-icons/ci";
import { useMagnifier } from "../../hooks/useMagnifier";
import IconTitle from "../partials/IconTitle";
//

const badges = [BootCampBadge, CloudPractitionerBadge];
const certs = [SMUCert, CS50PCert, CS50XCert];

const Accolades: React.FC<DisplayProps> = ({ backBtn }) => {
  //

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("ACCOLADES", CiMedal)}
      </div>
      <div className="accolades-box">
        <div className="badges-box">
          {badges.map((badge, idx) => (
            <div key={idx} className="badge-div">
              <img src={badge} alt="" />
            </div>
          ))}
        </div>
        <div className="certs-box">
          {certs.map((src, idx) =>
            useMagnifier({
              src,
              width: "330px",
              height: "",
              zoomLevel: 1.66,
              id: idx
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Accolades;
