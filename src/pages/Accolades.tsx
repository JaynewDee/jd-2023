import { SetStateAction, useState, Dispatch, ChangeEvent } from "react";
import { CiMedal } from "react-icons/ci";
import IconTitle from "../components/IconTitle";
import BackBtn from "../components/BackBtn";
import { useMagnifier } from "../hooks/useMagnifier";
import "../styles/slider.css";
import CloudPractitionerBadge from "/cloud_practitioner.png";
import BootCampBadge from "/boot_camp_badge.png";
import SMUCert from "/smu_cert.png";
import CS50PCert from "/cs50p_cert.png";
import CS50XCert from "/cs50x_cert.png";

//

const badges = [BootCampBadge, CloudPractitionerBadge];
const certs = [SMUCert, CS50PCert, CS50XCert];

function Accolades() {
  const [magnification, setMagnification] = useState(1.8);

  //

  return (
    <div className="category-container">
      <div className="category-header">
        {BackBtn()}
        {IconTitle("ACCOLADES", CiMedal)}
      </div>
      <MagnifierSlider
        magnification={magnification}
        setLevel={setMagnification}
      />
      <p className="magnify-instruction">Tap or hover to magnify</p>
      <div className="accolades-box">
        <div className="certs-box">
          {certs.map((src, idx) =>
            useMagnifier({
              src,
              width: "360px",
              height: "",
              zoomLevel: magnification,
              id: idx,
            }),
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
}

const MagnifierSlider = ({
  magnification,
  setLevel,
}: {
  magnification: number;
  setLevel: Dispatch<SetStateAction<number>>;
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLevel(Number(event.target.value));
  };

  return (
    <div className="magnify-controls">
      <p className="mag-strength">Magnification Strength</p>
      <input
        type="range"
        min="1"
        max="2.5"
        step="0.1"
        value={magnification}
        onChange={handleChange}
      />
      <p className="mag-value">
        {magnification}
        {"x"}
      </p>
    </div>
  );
};
export default Accolades;
