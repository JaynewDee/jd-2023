import React from "react";
import { openInNewTab } from "../../utils";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { IconType } from "react-icons";
import { DisplayProps } from "../../Portal";
import Title from "./Title";
import { RiTeamLine as Team } from "react-icons/ri";
//

const Social: React.FC<DisplayProps> = ({ backBtn }) => {
  const visitGh = () => openInNewTab("https://github.com/JaynewDee");
  const visitLi = () => openInNewTab("https://www.linkedin.com/in/jaynewd73/");
  const visitFb = () => openInNewTab("https://www.facebook.com/jndiehl");

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
  ];

  const Option = (handler: () => void, icon: IconType, id: number) => (
    <div className="social grid-cell" onClick={handler} key={id}>
      <span className="social-icon-card">
        {icon({ size: "3rem", className: "social-icon" })}
      </span>
    </div>
  );

  return (
    <div className="category-container" style={{ justifyContent: "center" }}>
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">
          {Team({})}
          {Title("Social")}
          {Team({})}
        </div>
      </div>
      <div className="social-container">
        {options.map(({ handler, icon }, idx) => Option(handler, icon, idx))}
      </div>
    </div>
  );
};

export default Social;
