import React from "react";
import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import { DisplayProps } from "../../Portal";
import IconTitle from "../IconTitle";
const resumePDF = new URL(
  "../../assets/JoshuaDiehl_Resume.pdf",
  import.meta.url
).href;
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
