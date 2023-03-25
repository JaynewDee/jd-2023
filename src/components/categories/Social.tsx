import React from "react";
import { openInNewTab } from "../../utils";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { TbHeartHandshake as HeartShake } from "react-icons/tb";

import { IconType } from "react-icons";
import { DisplayProps } from "../../Portal";
import Title from "./Title";
import IconTitle from "../partials/IconTitle";
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
    <div className="social" onClick={handler} key={id}>
      {icon({ size: "3rem", className: "social-icon" })}
    </div>
  );

  return (
    <div className="category-container" style={{ justifyContent: "center" }}>
      <div className="category-header">
        {backBtn()}
        {IconTitle("SOCIAL", HeartShake, true)}
      </div>
      <div className="social-container">
        {options.map(({ handler, icon }, idx) => Option(handler, icon, idx))}
      </div>
      <section>
        <h4 className="devto-header">
          <p
            className="devto-link"
            onClick={() => openInNewTab("https://dev.to/synthetic_rain")}
          >
            dev.to
          </p>
        </h4>
        <article></article>
      </section>
    </div>
  );
};

export default Social;
