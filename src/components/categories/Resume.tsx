import React from "react";
import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import { DisplayProps } from "../../Portal";

//

const Resume: React.FC<DisplayProps> = ({ backBtn }) => {
  const Title = () => (
    <h4 className="cell-title">
      <Journal className="journal" />
      <span
        style={{
          padding: "0 1rem",
          fontSize: "1.33rem"
        }}
      >
        Resume
      </span>
      <Journal className="journal" />
    </h4>
  );

  return (
    <div className="grid-container-category">
      {backBtn()}
      <div className="grid-cell">
        <Title />
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
