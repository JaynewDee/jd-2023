import React from "react";

//

const Nameplate: React.FC = () => {
  return (
    <div data-category={"nameplate"} className="nameplate grid-cell">
      <div className="name-cell">
        <h2 className="joshua">Joshua</h2>
        <h1>Diehl</h1>
        <span style={{ transform: "translate(0, 0rem)" }}>{"["}</span>
        <span style={{ transform: "translate(4.35rem, 0rem)" }}>{"]"}</span>
      </div>
    </div>
  );
};

export default Nameplate;
