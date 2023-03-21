import React from "react";
import { BsFillJournalBookmarkFill as Journal } from "react-icons/bs";
import { CategoryProps } from "../BaseGrid";
import BackCell from "./BackCell";

const Resume: React.FC<CategoryProps> = ({ setDisplay }) => {
  const goBack = () => setDisplay("");

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
    <>
      <div className="grid-container">
        <BackCell goBack={goBack} />
        <div className="grid-cell">
          <Title />
        </div>
        <div className="grid-cell"></div>
        <div className="resume">
          <iframe
            src="/JoshuaDiehl_Resume.pdf"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
