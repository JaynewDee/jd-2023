import React from "react";
import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import { DisplayProps } from "../../Portal";
import IconTitle from "../IconTitle";
import resumePDF from "/JoshuaDiehl_Resume.pdf";
//

const Resume: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("RESUME", Journal, "left")}
      </div>

      <div className="resume">
        <iframe src={resumePDF} width="100%" height="48rem"></iframe>
      </div>
    </div>
  );
};

export default Resume;
