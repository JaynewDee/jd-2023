import React from "react";
import { CategoryProps } from "../BaseGrid";
import BackCell from "./BackCell";

const About: React.FC<CategoryProps> = ({ setDisplay }) => {
  return (
    <>
      <BackCell goBack={() => setDisplay("")} />
      <div className="accolades grid-cell">
        <h4 className="cell-title">About Me</h4>
      </div>
    </>
  );
};

export default About;
