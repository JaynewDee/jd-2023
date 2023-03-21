import React from "react";
import { CategoryProps } from "../BaseGrid";
import {
  BsArrow90DegLeft,
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsPencil
} from "react-icons/bs";
import { IconType } from "react-icons";
import BackCell from "./BackCell";

//

const Social: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const visitGh = () => openInNewTab("https://github.com/JaynewDee");
  const visitLi = () => openInNewTab("https://www.linkedin.com/in/jaynewd73/");
  const visitFb = () => openInNewTab("https://www.facebook.com/jndiehl");
  const visitDev = () => openInNewTab("https://dev.to/synthetic_rain");

  const options = [
    {
      handler: visitGh,
      icon: BsGithub
    },
    {
      handler: visitLi,
      icon: BsLinkedin
    },
    {
      handler: visitFb,
      icon: BsFacebook
    },
    {
      handler: visitDev,
      icon: BsPencil
    }
  ];

  const Option = (handler: () => void, icon: IconType, id: number) => (
    <div className="social grid-cell" onClick={handler} key={id}>
      <span className="social-icon-card">{icon({ size: "2rem" })}</span>
    </div>
  );

  return (
    <div className="grid-container">
      <BackCell goBack={goBack} />

      <div className="social grid-cell">
        <h4 className="cell-title">Social</h4>
      </div>
      {options.map(({ handler, icon }, idx) => Option(handler, icon, idx))}
    </div>
  );
};

export default Social;
