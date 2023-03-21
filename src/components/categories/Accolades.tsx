import BootCampBadge from "../../assets/boot_camp_badge.png";
import CloudPractitionerBadge from "../../assets/cloud_practitioner.png";
import SMUCert from "../../assets/smu_cert.png";
import CS50PCert from "../../assets/cs50p_cert.png";
import CS50XCert from "../../assets/cs50x_cert.png";
import { DisplayProps } from "../../Portal";

//

const Accolades: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="grid-container-category">
      {backBtn()}
      <div className="accolade grid-cell">
        <h4 className="cell-title">Accolades</h4>
      </div>
      <div className="accolade grid-cell">
        <img className="badge-img" src={BootCampBadge}></img>
      </div>
      <div className="accolade grid-cell">
        <img className="badge-img" src={CloudPractitionerBadge}></img>
      </div>
      <div className="accolade grid-cell">
        <img className="cert-img" src={SMUCert}></img>
      </div>
      <div className="accolade grid-cell">
        <img className="cert-img" src={CS50PCert}></img>
      </div>
      <div className="accolade grid-cell">
        <img className="cert-img" src={CS50XCert}></img>
      </div>
    </div>
  );
};

export default Accolades;
