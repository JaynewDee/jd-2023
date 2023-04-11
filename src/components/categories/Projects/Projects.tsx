import { useState } from "react";
import { createPortal } from "react-dom";
import { DisplayProps } from "../../../Portal";
import { Title } from "../../IconTitle";
import { Tool } from "./Tool";
import { projects, ProjectType } from "./data";

//
import "./Projects.css";
//

const Project = (
  { name, description, story, tools, id }: ProjectType,
  setModalState: any
) => {
  const withDelimiter = (delim: string, dashedStr: string) =>
    dashedStr.split(delim).map((section, idx) => <p key={idx}>{section}</p>);

  return (
    <>
      <article
        data-orientation={id % 2 === 0 ? "left" : "right"}
        className="project-container"
        key={id}
      >
        <h4 className="project-name">
          <span className="name-brace">{"["}</span>
          {name}
          <span className="name-brace">{"]"}</span>
        </h4>
        <p className="project-description">{description}</p>
        <div className="project-images"></div>
        <section className="project-story">{withDelimiter(":", story)}</section>
        <h5 className="tools-label">Tools</h5>
        <div className="tools-container">
          {tools.map((tool, idx) => (
            <>{Tool(tool, setModalState, idx)}</>
          ))}
        </div>
      </article>
    </>
  );
};

//

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  const [modalState, setModalState] = useState("");

  const modalRoot = document.getElementById("projects-modal") as HTMLElement;

  const Modal = () => {
    const [position] = useState(window.scrollY);

    return createPortal(
      <div style={{ marginTop: position }} className="modal-container">
        <iframe src={modalState}></iframe>
        <button className="modal-exit-btn" onClick={() => setModalState("")}>
          X CLOSE X
        </button>
      </div>,
      modalRoot
    );
  };

  return (
    <>
      <article className="category-container">
        <div className="category-header">
          {backBtn()}
          <div className="title-with-icons">{Title("PROJECTS")}</div>
        </div>
        <article>
          {projects.map((project, idx) => (
            <div key={idx}>{Project(project, setModalState)}</div>
          ))}
        </article>
      </article>
      {modalState && <Modal />}
    </>
  );
};

export default Projects;
