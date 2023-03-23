import React from "react";
import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import { DisplayProps } from "../../Portal";
import Title from "./Title";
//

const Resume: React.FC<DisplayProps> = ({ backBtn }) => {
  return (
    <div className="category-container">
      <div className="category-header">
        {backBtn()}
        <div className="title-with-icons">
          {Journal({})}
          {Title("Resume")}
          {Journal({})}
        </div>
      </div>

      <div className="resume">
        <iframe
          src="/JoshuaDiehl_Resume.pdf"
          width="100%"
          height="48rem"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
