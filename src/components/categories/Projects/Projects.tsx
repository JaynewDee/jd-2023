import { Dispatch, SetStateAction, useState } from "react";
import { createPortal } from "react-dom";
import { DisplayProps } from "../../../Portal";
import { Title } from "../../IconTitle";
import { Tool } from "./Tool";
import { LinkMap, projects, ProjectType } from "./data";
import { useNewTab, useImgViewer } from "../../../hooks";

//
import "./Projects.css";
//

const ProjectName = (name: string) =>
  <h4 className="project-name">
    <span className="name-brace">{"["}</span>
    {name}
    <span className="name-brace">{"]"}</span>
  </h4>

type ImageProps = {
  src: string,
  activeImageSrc: string,
  setActiveImageSrc: Dispatch<SetStateAction<string>>;
}

const ProjectImage = ({ src, activeImageSrc, setActiveImageSrc }: ImageProps) => {
  const handleActiveSrcChange = () => {
    if (src === activeImageSrc) {
      setActiveImageSrc("")
    } else {
      setActiveImageSrc(src);
    }
  }

  return <img className="project-image" onClick={handleActiveSrcChange} src={src}></img>
}

const useClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text)
  } catch (err) {
    // do something
  }
}

const ProjectLinks = ({ deployment, clone, repo }: LinkMap) =>
  <div className="git-links">
    <button type="button" disabled={!deployment}className="git-btn" onClick={() => deployment && useNewTab(deployment)}>Deployment</button>
    <button type="button" className="git-btn" onClick={() => useClipboard(clone)}>Copy Clone URL</button>
    <button type="button" className="git-btn" onClick={() => repo && useNewTab(repo)}>Visit Repository</button>
  </div>

const ProjectTools = (tools: { name: string, url: string }[], setModal: any, setActiveImg: any) => <div className="tools-container">
  {tools.map((tool, idx) => (
    <>{Tool(tool, setModal, setActiveImg, idx)}</>
  ))}
</div>


const Project = (
  { name, description, story, tools, id, images, gitLinks }: ProjectType,
  setModalState: Dispatch<SetStateAction<string>>,
  setActiveImageSrc: Dispatch<SetStateAction<string>>,
  activeImageSrc: string
) => {
  const withDelimiter = (delim: string, dashedStr: string) =>
    dashedStr.split(delim).map((section, idx) => <p key={idx + section}>{section}</p>);


  return (
    <>
      <article
        className="project-container"
        key={id}
      >
        <div className="project-wrapper" data-orientation={id % 2 === 0 ? "left" : "right"}
        >
          {ProjectName(name)}
          <p className="project-description">{description}</p>
          <div className="project-images">
            {images?.map(src => <ProjectImage src={src} activeImageSrc={activeImageSrc} setActiveImageSrc={setActiveImageSrc} />)}
          </div>
          {ProjectLinks(gitLinks)}
          <section className="project-story">{withDelimiter(":", story)}</section>
          <h5 className="tools-label">Tools</h5>
          {ProjectTools(tools, setModalState, setActiveImageSrc)}
        </div>
      </article>
    </>
  );
};

//

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  const [activeImageSrc, setActiveImageSrc] = useState("");

  const [modalState, setModalState] = useState("");

  const modalOff = () => setModalState("");
  const modalRoot = document.getElementById("projects-modal") as HTMLElement;

  const Modal = () => {
    const [position] = useState(window.scrollY);

    return createPortal(
      <div style={{ marginTop: position }} className="modal-container">
        <iframe title="Iframe Modal" src={modalState} />
        <button type="button" className="modal-exit-btn" onClick={modalOff}>
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
            <div key={idx + project.id}>{Project(project, setModalState, setActiveImageSrc, activeImageSrc)}</div>
          ))}
        </article>
      </article>
      {modalState && <Modal />}
      {useImgViewer(activeImageSrc, setActiveImageSrc)}
    </>
  );
};

export default Projects;
