import React from "react";
import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import { DisplayProps } from "../../Portal";
import IconTitle from "../IconTitle";
import resumePDF from "/JoshuaDiehl_Resume.pdf";
import { useNewTab, useViewportQuery } from "../../hooks";

//

const Resume: React.FC<DisplayProps> = ({ backBtn }) => {
  const [width, _] = useViewportQuery();

  const resumeSrc = "./JoshuaDiehl_Resume.pdf";

  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        {IconTitle("RESUME", Journal, "left")}
      </div>
      {
        width > 768 ?
        <div className="resume">
          <iframe
            src={resumePDF}
            title="Resume iframe"
            width="100%"
            height="48rem"
          /> 
        </div>
        :
        <div className="mobile-resume">
            <a href={resumeSrc} target="_blank">VIEW</a>
            <a href={resumeSrc} download="Joshua_Diehl_Resume">DOWNLOAD</a>
        </div>
      }
    </div>
  );
};

export default Resume;
