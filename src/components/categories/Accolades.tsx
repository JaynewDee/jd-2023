import BootCampBadge from "/boot_camp_badge.png";
import CloudPractitionerBadge from "/cloud_practitioner.png";
import SMUCert from "/smu_cert.png";
import CS50PCert from "/cs50p_cert.png";
import CS50XCert from "/cs50x_cert.png";
import { DisplayProps } from "../../Portal";
import { CiMedal } from "react-icons/ci";
import { useMagnifier } from "../../hooks/useMagnifier";
import IconTitle from "../IconTitle";
import { SetStateAction, useState, Dispatch } from "react";

//

const badges = [BootCampBadge, CloudPractitionerBadge];
const certs = [SMUCert, CS50PCert, CS50XCert];

const Accolades: React.FC<DisplayProps> = ({ backBtn }) => {
  const [magnification, setMagnification] = useState(1.6)

  //

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("ACCOLADES", CiMedal)}
      </div>
      <MagnifierSlider magnification={magnification} setLevel={setMagnification} />
      <p className="magnify-instruction">Tap or hover to magnify</p>
      <div className="accolades-box">
        <div className="certs-box">
          {certs.map((src, idx) =>
            useMagnifier({
              src,
              width: "360px",
              height: "",
              zoomLevel: magnification,
              id: idx
            })
          )}
        </div>
        <div className="badges-box">
          {badges.map((badge, idx) => (
            <div key={idx} className="badge-div">
              <img src={badge} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MagnifierSlider = ({ magnification, setLevel }: { magnification: number, setLevel: Dispatch<SetStateAction<number>> }) => {

  const handleChange = (event: any) => {
    setLevel(Number(event.target.value));
  };

  return (
    <div className="magnify-controls">
      <p>Magnification Strength</p>
      <input
        type="range"
        min="1"
        max="2.5"
        step="0.1"
        value={magnification}
        onChange={handleChange}
      />
      <p>{magnification}</p>
    </div>
  );
}
export default Accolades;
