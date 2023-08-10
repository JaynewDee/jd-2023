import React from "react";
import { useNewTab } from "../../hooks/useNewTab";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { TbHeartHandshake as HeartShake } from "react-icons/tb";

import { IconType } from "react-icons";
import { DisplayProps } from "../../Portal";
import IconTitle from "../IconTitle";

//

const Social: React.FC<DisplayProps> = ({ backBtn }) => {
  const visitGh = () => useNewTab("https://github.com/JaynewDee");
  const visitLi = () => useNewTab("https://www.linkedin.com/in/jaynewd73/");
  const visitFb = () => useNewTab("https://www.facebook.com/jndiehl");
  const visitDev = () => useNewTab("https://dev.to/synthetic_rain");

  const options = [
    {
      handler: visitGh,
      icon: BsGithub,
    },
    {
      handler: visitLi,
      icon: BsLinkedin,
    },
    {
      handler: visitFb,
      icon: BsFacebook,
    },
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
        {IconTitle("SOCIAL", HeartShake, "right")}
      </div>
      <div className="social-container">
        {options.map(({ handler, icon }, idx) => Option(handler, icon, idx))}
      </div>
      <section>
        <h4 className="devto-header">
          <p className="devto-link" onClick={visitDev}>
            dev.to
          </p>
        </h4>
      </section>
    </div>
  );
};

export default Social;
