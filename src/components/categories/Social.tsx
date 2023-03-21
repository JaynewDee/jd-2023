import React from "react";
import { openInNewTab } from "../../utils";
import { BsFacebook, BsLinkedin, BsGithub, BsPencil } from "react-icons/bs";
import { IconType } from "react-icons";
import { DisplayProps } from "../../Portal";
import Title from "./Title";

//

const Social: React.FC<DisplayProps> = ({ backBtn }) => {
  const visitGh = () => openInNewTab("https://github.com/JaynewDee");
  const visitLi = () => openInNewTab("https://www.linkedin.com/in/jaynewd73/");
  const visitFb = () => openInNewTab("https://www.facebook.com/jndiehl");
  // const visitDev = () => openInNewTab("https://dev.to/synthetic_rain");

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
    }
    // {
    //   handler: visitDev,
    //   icon: BsPencil
    // }
  ];

  const Option = (handler: () => void, icon: IconType, id: number) => (
    <div className="social grid-cell" onClick={handler} key={id}>
      <span className="social-icon-card">{icon({ size: "3rem" })}</span>
    </div>
  );

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {Title("Social")}
      </div>
      <div className="social-grid">
        {options.map(({ handler, icon }, idx) => Option(handler, icon, idx))}
      </div>
    </div>
  );
};

export default Social;
