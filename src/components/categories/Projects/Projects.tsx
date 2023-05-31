import { Dispatch, SetStateAction, useState, memo } from "react";
import { createPortal } from "react-dom";
import { DisplayProps } from "../../../Portal";
import { Title } from "../../IconTitle";
import { Tool } from "./Tool";
import { LinkMap, projects, ProjectType, aggregatedTagFilters } from "./data";
import { useNewTab, useImgViewer } from "../../../hooks";

//
import "./Projects.css";
//
const filterByTool = (projectsData: ProjectType[], toInclude: string[]) => {
  const filteredProjects = [];
  for (const project of projectsData.slice()) {
    for (const tool of project.tools) {
      if (toInclude.includes(tool.name) && !filteredProjects.includes(project)) {
        filteredProjects.push(project)
      }
    }
  }
  console.log(filteredProjects);
  return filteredProjects;
}

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

  return <img key={src} className="project-image" onClick={handleActiveSrcChange} src={src}></img>
}

const useClipboard = (text: string) => {
  try {
    navigator.clipboard.writeText(text)
  } catch (err) {
    // do something with error
  }
}

const ProjectLinks = ({ deployment, clone, repo }: LinkMap) =>
  <div className="git-links">
    <button type="button" disabled={!deployment} className="git-btn" onClick={() => deployment && useNewTab(deployment)}>Deployment</button>
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

  const storyWithDelims = withDelimiter(":", story);

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
            {images?.map(src => <ProjectImage src={src} key={src} activeImageSrc={activeImageSrc} setActiveImageSrc={setActiveImageSrc} />)}
          </div>
          {ProjectLinks(gitLinks)}
          <section className="project-story">{storyWithDelims}</section>
          <h5 className="tools-label">Tools</h5>
          {ProjectTools(tools, setModalState, setActiveImageSrc)}
        </div>
      </article>
    </>
  );
};

//

const IFrameModal = memo(({ state, setState }: { state: string, setState: any }) => {
  const [position] = useState(window.scrollY);
  const modalRoot = document.getElementById("projects-modal") as HTMLElement;
  const modalOff = () => setState("");

  return createPortal(
    <div style={{ marginTop: position }} className="modal-container">
      <iframe title="Iframe Modal" src={state} />
      <button type="button" className="modal-exit-btn" onClick={modalOff}>
        X CLOSE X
      </button>
    </div>,
    modalRoot
  );
})

type Filters = string[] | [];
type FiltersProps = { active: Filters, inactive: Filters, setFilterState: any };

const ProjectFilters = (
  { active, inactive, setFilterState }: FiltersProps
) => {
  const handleClickActive = (tag: string) => () => {
    setFilterState(prev => ({
      active: [...prev.active, tag],
      inactive: [...prev.inactive.filter(t => t !== tag)]
    }))
  }

  const handleClickInactive = (tag: string) => () => {
    setFilterState(prev => ({
      inactive: [...prev.inactive, tag],
      active: [...prev.active.filter(t => t !== tag)]
    }))
  }

  return (
    <div className="project-filters-container">
      <h4>Filter By Tool</h4>
      <div className="inactive-filters">
        <p>Inactive</p>
        {inactive?.map(tag => <button key={tag} onClick={handleClickActive(tag)} type="button">{tag}</button>)}
      </div>
      <div className="active-filters">
        <p>Active</p>
        {active?.map(tag => <button key={tag} onClick={handleClickInactive(tag)} type="button">{tag}</button>)}
      </div>
    </div>
  )
}

const Projects: React.FC<DisplayProps> = ({ backBtn }) => {
  const [filterState, setFilterState] = useState({
    active: [],
    inactive: aggregatedTagFilters,
  });

  const [activeImageSrc, setActiveImageSrc] = useState("");

  const [modalState, setModalState] = useState("");
  const title = Title("PROJECTS");
  const ImgViewer = useImgViewer(activeImageSrc, setActiveImageSrc);
  const toInclude = filterState.active.length === 0 ? filterState.inactive : filterState.active;

  const filteredProjects = filterByTool(projects, toInclude)?.map((project) => (
    <div key={project.id}>{Project(project, setModalState, setActiveImageSrc, activeImageSrc)}</div>
  ));

  const modal = modalState && <IFrameModal state={modalState} setState={setModalState} />;
  const filters = <ProjectFilters active={filterState.active} inactive={filterState.inactive} setFilterState={setFilterState} />;

  return (
    <>
      <article className="category-container">
        <div className="category-header">
          {backBtn()}
          <div className="title-with-icons">{title}</div>
        </div>
       {filters} 
        <article>
          {filteredProjects}
        </article>
      </article>
      {modal}
      {ImgViewer}
    </>
  );
}

export default Projects;
