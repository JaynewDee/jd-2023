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
    <div
      className="grid-container"
      style={{
        gridTemplateRows: "repeat(9, 12rem)",
        gridArea: "2 / 1 / 12 / 4"
      }}
    >
      <BackCell goBack={goBack} />
      <div className="grid-cell">
        <Title />
      </div>
      <div className="grid-cell"></div>
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
