import React from "react";

import MITLicense from "../assets/license-MIT-blue.svg";

const Footnote = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const licenseUrl = "https://opensource.org/license/mit/";
  const visitLicensing = () => openInNewTab(licenseUrl);
  return (
    <div className="footnote">
      <p>built and maintained by</p>
      <p>Joshua Newell Diehl</p>
      <img
        className="license-badge"
        onClick={visitLicensing}
        src={MITLicense}
      />
      <p>&copy;2023 </p>
    </div>
  );
};

export default Footnote;
