import { Dispatch, SetStateAction, useState, memo } from "react";
import { createPortal } from "react-dom";
import { DisplayProps } from "../../../Portal";
import { Title } from "../../IconTitle";
import { Tool } from "./Tool";
import { LinkMap, projects, ProjectType, aggregatedTagFilters } from "./data";
import { useNewTab, useImgViewer, useClipboard } from "../../../hooks";
import { AiOutlineArrowUp as Arrow } from 'react-icons/ai'

//
import "./Projects.css";
import { ScrollOverlay } from "../../Scroll";
import { useScrollDetection } from "../../../hooks/useScrollDetection";
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

  return <img key={src} className="project-image" onClick={handleActiveSrcChange} src={src}></img>
}


function ProjectLinks({ deployment, clone, repo }: LinkMap) {
  const [clipboardResult, setClipboardResult] = useState("COPY CLONE URL")

  const notifyCopyResult = (result: boolean) => {
    setClipboardResult(result ? "SUCCESS" : "FAILURE");
    setTimeout(() => {
      setClipboardResult("COPY CLONE URL")
    }, 3000)
  };

  const handleCopyCloneUrl = async (clone: string) => {
    const isCopiedToClipboard = await useClipboard(clone)
    notifyCopyResult(isCopiedToClipboard)
  }

  return <div className="git-links">
    <button type="button" disabled={!deployment} className="git-btn" onClick={() => deployment && useNewTab(deployment)}>DEPLOYMENT</button>
    <button type="button" className="git-btn" onClick={() => handleCopyCloneUrl(clone)}>{clipboardResult}</button>
    <button type="button" className="git-btn" onClick={() => repo && useNewTab(repo)}>VISIT REPOSITORY</button>
  </div>


}
const ProjectTools = (tools: { name: string, url: string }[], setModal: any, setActiveImg: any) =>
  <div className="tools-container">
    {tools.map((tool, idx) => (
      <div key={idx}>{Tool(tool, setModal, setActiveImg)}</div>
    ))}
  </div>

const Project = (
  { name, description, story, tools, id, images, gitLinks }: ProjectType,
  setModalState: Dispatch<SetStateAction<string>>,
  setActiveImageSrc: Dispatch<SetStateAction<string>>,
  activeImageSrc: string,
  activeFilters: string[]
) => {
  const withDelimiter = (delim: string, dashedStr: string) =>
    dashedStr.split(delim).map((section, idx) => <p key={idx + section}>{section}</p>);

  const storyWithDelims = withDelimiter(":", story);

  const toolNames = tools.map(tool => tool.name);

  return (
    <>
      <article
        className="project-container"
        key={id}
        style={activeFilters.every((filter) => toolNames.includes(filter)) ? {} : { display: "none" }}
      >
        <div className="project-wrapper" data-orientation={id % 2 === 0 ? "left" : "left"}
        >
          {ProjectName(name)}
          <p className="project-description">{description}</p>
          <div className="project-images">
            {images?.map(src =>
              <ProjectImage src={src} key={src} activeImageSrc={activeImageSrc} setActiveImageSrc={setActiveImageSrc} />)}
          </div>
          {ProjectLinks(gitLinks)}
          <hr className="hr-md" />
          <section className="project-story">{storyWithDelims}</section>
          <hr className="hr-sm" />
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

type FiltersProps = { filterState: any, setFilterState: any, reset: any };

const ProjectFilters = (
  { filterState, setFilterState, reset }: FiltersProps
) => {
  const handleClickActive = (tag: string) => () => {
    setFilterState((prev: any) => ({
      active: [...prev.active, tag],
      inactive: [...prev.inactive.filter((t: string) => t !== tag)]
    }))
  }

  const handleClickInactive = (tag: string) => () => {
    setFilterState((prev: any) => ({
      inactive: [...prev.inactive, tag],
      active: [...prev.active.filter((t: string) => t !== tag)]
    }))
  }

  return (
    <div className="project-filters-container">
      <h4 className="tooltags-header">ToolTags</h4>
      <h6 className="tooltags-subheader">Filter by associated technology</h6>
      <div className="inactive-filters">
        {filterState.inactive?.map((tag: string) =>
          <button key={tag} onClick={handleClickActive(tag)} className="filter-btn" type="button">{tag}</button>)
        }
      </div>
      <hr className="hr-md" />
      <div className="active-filters">
        <h5 className="active-header">Active :::</h5>
        <div>
          {filterState.active?.map((tag: string) =>
            <button key={tag} onClick={handleClickInactive(tag)} className="filter-btn-active" type="button">{tag}</button>)
          }
        </div>
      </div>
      <button type="button" onClick={reset}>CLEAR</button>
    </div>
  )
}

function Projects({ backBtn }: DisplayProps) {
  const [filterState, setFilterState] = useState({
    active: [],
    inactive: aggregatedTagFilters,
  });

  const [sortDirection, setSortDireciton] = useState<"asc" | "desc">("desc")

  const resetFilters = () => setFilterState({ active: [], inactive: aggregatedTagFilters });

  const [activeImageSrc, setActiveImageSrc] = useState("");

  // This modal handles population of the iframe on "Tool" click
  const [modalState, setModalState] = useState("");
  const modal = modalState && <IFrameModal state={modalState} setState={setModalState} />;

  const title = Title("PROJECTS");

  // A pop-up portal similar to that used in modal above, but for images
  // Note to self: consider unifying the two to reduce duplication
  const ImgViewer = useImgViewer(activeImageSrc, setActiveImageSrc);

  const scrollDetected = useScrollDetection();

  const filters = <ProjectFilters filterState={filterState} setFilterState={setFilterState} reset={resetFilters} />;

  const sortDesc = (a: ProjectType, b: ProjectType) => a.name > b.name ? 1 : -1;
  const sortAsc = (a: ProjectType, b: ProjectType) => a.name < b.name ? 1 : -1;

  const filteredSortedProjects = projects.sort((a, b) => sortDirection === "desc" ? sortDesc(a, b) : sortAsc(a, b)).map((project) => (
    <div key={project.id}>
      {Project(project, setModalState, setActiveImageSrc, activeImageSrc, filterState.active)}
    </div>
  ));

  const toggleSortDirection = () => sortDirection === "asc" ? setSortDireciton("desc") : setSortDireciton("asc")

  return (
    <>
      <header style={scrollDetected ? { display: "flex" } : { display: "none" }}>Scrollbar</header>
      <article className="category-container">
        <div className="category-header">
          {backBtn()}
          <div className="title-with-icons">{title}</div>
        </div>
        {filters}
        <div className="sort-direction-control">
          <span>{Arrow({ className: sortDirection === "asc" ? "arrow-up" : "arrow-down" })}</span>
          <p onClick={toggleSortDirection}>Sort Direction</p>
          <span>{Arrow({ className: sortDirection === "asc" ? "arrow-up" : "arrow-down" })}</span>
        </div>
        <article>
          {filteredSortedProjects}
        </article>
      </article>
      <ScrollOverlay />
      {modal}
      {ImgViewer}
    </>
  );
}

export default Projects;
